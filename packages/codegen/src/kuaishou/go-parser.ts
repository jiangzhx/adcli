import type {
  KuaishouApiFileSpec,
  KuaishouApiKind,
  KuaishouApiParamSpec,
  KuaishouApiSpec,
  KuaishouEnumSpec,
  KuaishouModelFieldSpec,
  KuaishouModelFileSpec,
  KuaishouModelStructSpec,
  KuaishouRequestKind,
} from "./spec";

const FUNCTION_PATTERN =
  /^func\s+(\w+)\s*\(([\s\S]*?)\)\s*(?:\(([^)]+)\)|([\w.*\[\]]+))\s*\{([\s\S]*?)\n\}/gm;

const STRUCT_PATTERN = /type\s+(\w+)\s+struct\s*\{([\s\S]*?)\n\}/g;

export function parseGoModelSource(source: string, relativePath: string): KuaishouModelFileSpec {
  const packageName = source.match(/^package\s+(\w+)/m)?.[1] ?? packageNameFromPath(relativePath);
  const structs: KuaishouModelStructSpec[] = [];
  const enums = parseGoEnums(source);

  for (const match of source.matchAll(STRUCT_PATTERN)) {
    const name = match[1];
    const fields = parseStructFields(match[2], name);
    structs.push({
      name,
      fields,
      requestKind: inferRequestKind(source, name),
      url: parseUrlMethod(source, name),
    });
  }

  if (structs.length === 0 && enums.length === 0) {
    throw new Error(`Unable to parse model structs from ${relativePath}`);
  }

  return { packageName, relativePath, structs, enums };
}

export function parseGoEnums(source: string): KuaishouEnumSpec[] {
  const enums: KuaishouEnumSpec[] = [];
  for (const match of source.matchAll(/^type\s+(\w+)\s+(string|int|int32|int64|uint64)\b/gm)) {
    const name = match[1];
    if (name === "Uint64" || name === "Int64" || name === "Int" || name === "Float64" || name === "MatchType") {
      continue;
    }
    const kind = match[2] === "string" ? "string" : "number";
    const members = parseEnumMembers(source, name, kind);
    if (members.length === 0) {
      continue;
    }
    enums.push({ name, kind, members });
  }
  return enums;
}

function parseEnumMembers(source: string, typeName: string, kind: KuaishouEnumSpec["kind"]) {
  const members: KuaishouEnumSpec["members"] = [];
  const pattern = new RegExp(`(\\w+)\\s+${typeName}\\s*=\\s*("[^"]+"|\\d+)`, "g");
  for (const match of source.matchAll(pattern)) {
    const rawValue = match[2];
    members.push({
      goName: match[1],
      tsName: enumMemberName(match[1], typeName),
      value: kind === "string" ? rawValue.slice(1, -1) : Number(rawValue),
    });
  }
  return members;
}

function enumMemberName(goName: string, typeName: string) {
  const prefix = `${typeName}_`;
  return goName.startsWith(prefix) ? goName.slice(prefix.length) : goName;
}

export function parseGoApiSource(source: string, relativePath: string, models: KuaishouModelStructSpec[] = []): KuaishouApiFileSpec {
  const packageName = source.match(/^package\s+(\w+)/m)?.[1] ?? packageNameFromPath(relativePath);
  const functions: KuaishouApiSpec[] = [];
  const modelByName = new Map(models.map((model) => [model.name, model]));

  for (const match of source.matchAll(FUNCTION_PATTERN)) {
    const [, functionName, rawParams, groupedReturns, singleReturn, body] = match;
    if (!sourceIncludesSdkClient(rawParams)) {
      continue;
    }

    const params = parseApiParams(rawParams);
    const kind = inferApiKind(functionName, body);
    const requestParam = params.find((param) => param.role === "request");
    const requestType = requestParam ? stripPointer(typeName(requestParam.tsType)) : undefined;
    const buildsRequest = parseBuiltRequest(body, modelByName);
    const resolvedRequestType = requestType ?? buildsRequest?.type;
    const goReturnType = (groupedReturns ?? singleReturn).split(",")[0]?.trim() ?? "error";
    const extract = parseExtractedField(body, modelByName);

    functions.push({
      functionName,
      tsName: lowerFirst(functionName),
      kind,
      params: params.filter((param) => param.role !== "accessToken" || true),
      responseType: resolveResponseType(goReturnType, extract, kind),
      unwrap: resolveUnwrap(goReturnType, extract, kind),
      extractField: extract?.jsonName,
      requestType: resolvedRequestType,
      requestInitType: resolvedRequestType ? `${resolvedRequestType}Init` : undefined,
      buildsRequest,
    });
  }

  if (functions.length === 0) {
    throw new Error(`Unable to parse API functions from ${relativePath}`);
  }

  return {
    packageName,
    relativePath,
    modelImport: parseModelImport(source),
    functions,
  };
}

export function parseStructFields(body: string, ownerName: string): KuaishouModelFieldSpec[] {
  const fields: KuaishouModelFieldSpec[] = [];
  for (const rawLine of body.split("\n")) {
    const line = stripInlineComment(rawLine).trim();
    if (!line) {
      continue;
    }
    const match = line.match(/^(\w+)\s+([^\s`]+)(?:\s+`([^`]*)`)?$/);
    if (!match) {
      continue;
    }
    const [, goName, goType, tags] = match;
    const jsonName = parseJsonName(tags, goName);
    if (!jsonName) {
      continue;
    }
    fields.push({
      goName,
      jsonName,
      tsType: toTypeScriptType(goType, goName, ownerName),
    });
  }
  return fields;
}

function inferRequestKind(source: string, typeName: string): KuaishouRequestKind {
  const encode = source.match(new RegExp(`func\\s+\\(\\w+\\s+\\*?${typeName}\\)\\s+Encode\\s*\\(\\)\\s*([\\w.[\\]]+)`));
  if (!encode) {
    return "none";
  }
  const returnType = encode[1];
  if (returnType.includes("UploadField")) {
    return "upload";
  }
  if (returnType === "string") {
    return "get";
  }
  return "post";
}

function parseUrlMethod(source: string, typeName: string): string | undefined {
  const match = source.match(new RegExp(`func\\s+\\(\\w+\\s+\\*?${typeName}\\)\\s+Url\\s*\\(\\)\\s+string\\s*\\{[\\s\\S]*?return\\s+"([^"]+)"`));
  return match?.[1];
}

function parseApiParams(rawParams: string): KuaishouApiParamSpec[] {
  return rawParams
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const match = part.match(/^(\w+)\s+(.+)$/);
      if (!match) {
        throw new Error(`Unable to parse API param '${part}'`);
      }
      const [, goName, goType] = match;
      if (goName === "ctx" || goType.includes("context.Context") || goType.includes("SDKClient")) {
        return null;
      }
      const role = inferParamRole(goName, goType);
      return {
        goName,
        tsName: toTsParamName(goName, role),
        tsType: role === "request" ? `${stripPointer(typeName(goType))} | ${stripPointer(typeName(goType))}Init` : toTypeScriptType(goType, goName),
        role,
      };
    })
    .filter((param): param is KuaishouApiParamSpec => param != null);
}

function inferParamRole(goName: string, goType: string): KuaishouApiParamSpec["role"] {
  if (goName === "accessToken" || goType === "string" && goName.toLowerCase() === "accesstoken") {
    return "accessToken";
  }
  if (goType.includes("Request") || goName === "req") {
    return "request";
  }
  return "scalar";
}

function inferApiKind(functionName: string, body: string): KuaishouApiKind {
  if (/\bclt\.Upload\b/.test(body)) {
    return "upload";
  }
  if (/\bclt\.GetOnBody\b/.test(body)) {
    return "getOnBody";
  }
  if (/\bclt\.Get\b/.test(body)) {
    return "get";
  }
  if (/\bclt\.Post\b/.test(body)) {
    return "post";
  }
  if (functionName === "Url" || /OAUTH_URL/.test(body)) {
    return "url";
  }
  return "unknown";
}

function parseBuiltRequest(body: string, models: Map<string, KuaishouModelStructSpec>) {
  const match = body.match(/(\w+)\s*:=\s*&(?:\w+\.)?(\w+)\{((?:\s*\w+\s*:[^,\n]+,?\s*)*)\s*\}/);
  if (!match) {
    return undefined;
  }
  const typeName = match[2];
  const model = models.get(typeName);
  const fields = [...match[3].matchAll(/(\w+)\s*:\s*([^,\n]+)/g)].map((fieldMatch) => {
    const goField = fieldMatch[1];
    const value = fieldMatch[2].trim();
    const jsonName = model?.fields.find((field) => field.goName === goField)?.jsonName ?? toSnakeCase(goField);
    if (value.includes("AppID()")) {
      return { jsonName, source: "appId" as const };
    }
    if (value.includes("Secret()")) {
      return { jsonName, source: "secret" as const };
    }
    return {
      jsonName,
      source: "param" as const,
      paramName: toTsParamName(value, "scalar"),
    };
  });
  return { type: typeName, fields };
}

function parseExtractedField(body: string, models: Map<string, KuaishouModelStructSpec>) {
  const match = body.match(/return\s+resp\.(\w+)/);
  if (!match) {
    return undefined;
  }
  for (const model of models.values()) {
    const field = model.fields.find((item) => item.goName === match[1]);
    if (field) {
      return field;
    }
  }
  return { goName: match[1], jsonName: toSnakeCase(match[1]), tsType: "KuaishouId" };
}

function resolveResponseType(goReturnType: string, extract: { tsType: string } | undefined, kind: KuaishouApiKind) {
  if (kind === "url") {
    return "string";
  }
  if (goReturnType === "error") {
    return "void";
  }
  if (extract) {
    return extract.tsType;
  }
  return toTypeScriptType(goReturnType, goReturnType);
}

function resolveUnwrap(
  goReturnType: string,
  extract: { jsonName: string } | undefined,
  kind: KuaishouApiKind,
): KuaishouApiSpec["unwrap"] {
  if (kind === "url") {
    return "string";
  }
  if (goReturnType === "error") {
    return "void";
  }
  if (extract) {
    return "field";
  }
  return "object";
}

function parseModelImport(source: string) {
  const match = source.match(/github.com\/bububa\/kwai-marketing-api\/model\/([\w./]+)/);
  return match?.[1];
}

function toTypeScriptType(goType: string, goName = "", ownerName = ""): string {
  const trimmed = goType.trim();
  if (trimmed === "interface{}" || trimmed === "any") {
    return "unknown";
  }
  if (trimmed === "[]byte" || trimmed === "json.RawMessage") {
    return "Uint8Array";
  }
  if (trimmed.startsWith("*")) {
    return toTypeScriptType(trimmed.slice(1), goName, ownerName);
  }
  if (trimmed.startsWith("[]")) {
    return `${toTypeScriptType(trimmed.slice(2), goName, ownerName)}[]`;
  }
  const mapMatch = trimmed.match(/^map\[([^\]]+)\](.+)$/);
  if (mapMatch) {
    return `Record<string, ${toTypeScriptType(mapMatch[2], goName, ownerName)}>`;
  }
  const named = typeName(trimmed);
  if (named === "string") {
    return "string";
  }
  if (named === "bool") {
    return "boolean";
  }
  if (named === "float32" || named === "float64" || named === "Float64") {
    return "number";
  }
  if (named === "int" || named === "int32" || named === "Int") {
    return "number";
  }
  if (named === "uint64" || named === "int64" || named === "Uint64" || named === "Int64") {
    return isIdName(goName) || isIdName(ownerName) ? "KuaishouId" : "number";
  }
  if (named === "PageInfo") {
    return "PageInfo";
  }
  return named;
}

function isIdName(name: string) {
  return /id$/i.test(name) || /ids$/i.test(name) || /_id$/.test(name) || /_ids$/.test(name);
}

function parseJsonName(tags: string | undefined, goName: string) {
  if (!tags) {
    return toSnakeCase(goName);
  }
  const json = tags.match(/json:"([^"]*)"/)?.[1];
  if (!json || json === "-") {
    return undefined;
  }
  return json.split(",")[0] || toSnakeCase(goName);
}

function toTsParamName(goName: string, role: KuaishouApiParamSpec["role"]) {
  if (role === "accessToken") {
    return "accessToken";
  }
  if (role === "request") {
    return "req";
  }
  return lowerFirst(goName.replace(/\.$/, ""));
}

function sourceIncludesSdkClient(rawParams: string) {
  return rawParams.includes("SDKClient");
}

function stripPointer(value: string) {
  return value.replace(/^\*/, "").replace(/ \| .+$/, "");
}

function typeName(goType: string) {
  return goType.replace(/^\*/, "").split(".").at(-1) ?? goType;
}

function packageNameFromPath(relativePath: string) {
  return relativePath.split("/").at(-2) ?? "mapi";
}

function stripInlineComment(line: string) {
  return line.replace(/\/\/.*$/, "");
}

function lowerFirst(value: string) {
  return value ? value[0].toLowerCase() + value.slice(1) : value;
}

function toSnakeCase(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
    .toLowerCase();
}
