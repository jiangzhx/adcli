import type { ApiParamSpec, ApiSpec, ModelSpec } from "./spec";

type GoParam = { name: string; goType: string; javaType: string; required: boolean };

export function parseGoApiSource(source: string, filename: string, namespace = ""): ApiSpec[] {
  const serviceName = requireMatch(source, /type\s+(\w+ApiService)\s+service/, filename, "service name");
  const className = `${namespace}${serviceName.replace(/Service$/, "")}`;
  const optsByName = parseOptionStructs(source);
  const specs: ApiSpec[] = [];
  const methodPattern =
    /func\s+\(a\s+\*\w+ApiService\)\s+(\w+)\(([^)]*)\)\s+\((\w+|interface\{\}),\s+http\.Header,\s+error\)\s*\{([\s\S]*?)(?=\n}\n\n\/\*|\n}\s*$)/g;

  for (const match of source.matchAll(methodPattern)) {
    const [, goMethodName, signature, responseType, body] = match;
    const params = parseSignatureParams(signature, optsByName);
    const fileParams = parseFileParams(body);
    markFileParams(params, fileParams);
    specs.push({
      className,
      methodName: lowerFirst(goMethodName),
      httpMethod: parseHttpMethod(body, filename),
      path: requireMatch(body, /localVarPath\s*:=\s*a\.client\.Cfg\.BasePath\s*\+\s*"([^"]+)"/, filename, "localVarPath"),
      responseType: toJavaLikeType(responseType),
      params: params.map(({ name, javaType, required }) => ({ name, javaType, required })),
      queryParams: parseNamedParams(body, "localVarQueryParams"),
      formParams: parseNamedParams(body, "localVarFormParams"),
      fileParams,
      authNames: ["OAuth2"],
      accepts: parseStringArray(body, /localVarHttpHeaderAccepts\s*:=\s*\[\]string\s*\{([^}]*)\}/),
      contentTypes: parseStringArray(body, /localVarHttpContentTypes\s*:=\s*\[\]string\s*\{([^}]*)\}/),
      bodyParam: parseBodyParam(body),
    });
  }

  if (specs.length === 0) {
    throw new Error(`Unable to parse API methods from ${filename}`);
  }
  return specs;
}

export function parseGoModelSource(source: string, filename: string): ModelSpec {
  const enumName = source.match(/type\s+(\w+)\s+(?:string|int|int32|int64|float32|float64)/)?.[1];
  if (enumName && /const\s*\(/.test(source)) {
    return {
      kind: "enum",
      name: enumName,
      values: [...source.matchAll(/^\s*(\w+)\s+\w+\s*=\s*("[^"]+"|-?\d+(?:\.\d+)?)/gm)].map((match) => ({
        key: stripEnumPrefix(match[1], enumName),
        value: parseEnumValue(match[2]),
      })),
    };
  }

  const aliasMatch = source.match(/type\s+(\w+)\s+(\[\][\w.]+|map\[string\][\w.]+)/);
  if (aliasMatch) {
    return {
      kind: "alias",
      name: aliasMatch[1],
      javaType: toJavaLikeType(aliasMatch[2], aliasMatch[1]),
    };
  }

  const structMatch = source.match(/type\s+(\w+)\s+struct\s*\{([\s\S]*?)\n\}/);
  if (!structMatch) {
    throw new Error(`Unable to parse model struct from ${filename}`);
  }

  return {
    kind: "interface",
    name: structMatch[1],
    fields: parseModelFields(structMatch[2]),
  };
}

function parseOptionStructs(source: string) {
  const optsByName = new Map<string, GoParam[]>();
  for (const match of source.matchAll(/type\s+(\w+Opts)\s+struct\s*\{([\s\S]*?)\n\}/g)) {
    optsByName.set(
      match[1],
      match[2]
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
          const fieldMatch = line.match(/^(\w+)\s+optional\.(\w+)/);
          if (!fieldMatch) {
            throw new Error(`Unable to parse optional field '${line}'`);
          }
          return {
            name: lowerFirst(fieldMatch[1]),
            goType: fieldMatch[2],
            javaType: optionalToJavaLikeType(fieldMatch[2], fieldMatch[1]),
            required: false,
          };
        }),
    );
  }
  return optsByName;
}

function parseSignatureParams(signature: string, optsByName: Map<string, GoParam[]>) {
  const params: GoParam[] = [];
  for (const part of signature.split(",").map((item) => item.trim()).filter(Boolean)) {
    const match = part.match(/^(\w+)\s+(.+)$/);
    if (!match) {
      continue;
    }
    const [, name, goType] = match;
    if (name === "ctx") {
      continue;
    }
    const optsName = goType.replace(/^\*/, "");
    if (optsByName.has(optsName)) {
      params.push(...optsByName.get(optsName)!);
      continue;
    }
    params.push({
      name,
      goType,
      javaType: toJavaLikeType(goType, name),
      required: true,
    });
  }
  return params;
}

function parseNamedParams(source: string, target: "localVarQueryParams" | "localVarFormParams") {
  return [...source.matchAll(new RegExp(`${target}\\.Add\\("([^"]+)",\\s*parameterToString\\(([^,]+),\\s*"([^"]*)"\\)\\)`, "g"))].map(
    (match) => ({
      name: match[1],
      source: toRequestSource(match[2]),
      ...(match[3] ? { collectionFormat: match[3] as "multi" | "csv" } : {}),
    }),
  );
}

function parseFileParams(source: string) {
  const fileKey = source.match(/localVarFileKey\s*=\s*"([^"]+)"/)?.[1];
  if (!fileKey) {
    return [];
  }
  const fileSource =
    source.match(/localVarFile\s*:=\s*(\w+)/)?.[1] ??
    source.match(/localVarFile,\s*localVarFileOk\s*=\s*localVarOptionals\.(\w+)\.Value\(\)\.\(\*os\.File\)/)?.[1] ??
    "file";
  const requestField = /^[A-Z]/.test(fileSource) ? lowerFirst(fileSource) : fileSource;
  return [{ name: fileKey, source: `request.${requestField}` }];
}

function markFileParams(params: GoParam[], fileParams: Array<{ source: string }>) {
  for (const fileParam of fileParams) {
    const fieldName = fileParam.source.match(/^request\.(\w+)$/)?.[1];
    if (!fieldName) {
      continue;
    }
    const param = params.find((item) => item.name === fieldName);
    if (param) {
      param.javaType = "File";
      continue;
    }
    params.push({
      name: fieldName,
      goType: "os.File",
      javaType: "File",
      required: false,
    });
  }
}

function parseBodyParam(source: string) {
  const bodyParam = source.match(/localVarPostBody\s*=\s*&?(\w+)/)?.[1];
  return bodyParam ? `request.${bodyParam}` : undefined;
}

function parseModelFields(fieldsSource: string) {
  return fieldsSource
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const match = line.match(/^(\w+)\s+(.+?)\s+`json:"([^"]+)"`/);
      if (!match) {
        return undefined;
      }
      const [jsonName, ...tagOptions] = match[3].split(",");
      if (jsonName === "-") {
        return undefined;
      }
      return {
        jsonName,
        javaName: lowerFirst(match[1]),
        javaType: toJavaLikeType(match[2].trim(), jsonName),
        required: !tagOptions.includes("omitempty"),
      };
    })
    .filter((field): field is { jsonName: string; javaName: string; javaType: string; required: boolean } => Boolean(field));
}

function parseHttpMethod(source: string, filename: string) {
  return requireMatch(source, /localVarHttpMethod\s*(?::=|=)\s*strings\.ToUpper\("([^"]+)"\)/, filename, "HTTP method").toUpperCase();
}

function parseStringArray(source: string, pattern: RegExp): string[] {
  const match = source.match(pattern);
  if (!match) {
    return [];
  }
  return [...match[1].matchAll(/"([^"]+)"/g)].map((item) => item[1]);
}

function toRequestSource(source: string) {
  const trimmed = source.trim();
  const optionalMatch = trimmed.match(/localVarOptionals\.(\w+)\.Value\(\)/);
  if (optionalMatch) {
    return `request.${lowerFirst(optionalMatch[1])}`;
  }
  return `request.${trimmed}`;
}

function optionalToJavaLikeType(optionalType: string, nameHint?: string) {
  switch (optionalType) {
    case "String":
      return "String";
    case "Int32":
      return "Integer";
    case "Int64":
      return isUnsafeIntegerName(nameHint) ? "LongString" : "Long";
    case "Float32":
      return "Float";
    case "Float64":
      return "Double";
    case "Bool":
      return "Boolean";
    case "Interface":
      return "Object";
    default:
      return "Object";
  }
}

function toJavaLikeType(goType: string, nameHint?: string): string {
  let normalized = goType.trim();
  while (normalized.startsWith("*")) {
    normalized = normalized.slice(1);
  }
  normalized = normalized.replace(/^model\./, "");
  if (normalized === "[]byte") {
    return "byte[]";
  }
  if (normalized.startsWith("[]")) {
    return `List<${toJavaLikeType(normalized.slice(2), nameHint)}>`;
  }
  if (normalized.startsWith("map[string]")) {
    return `Map<String, ${toJavaLikeType(normalized.slice("map[string]".length))}>`;
  }
  switch (normalized) {
    case "string":
      return "String";
    case "int":
    case "int32":
      return "Integer";
    case "int64":
      return isUnsafeIntegerName(nameHint) ? "LongString" : "Long";
    case "float32":
      return "Float";
    case "float64":
      return "Double";
    case "bool":
      return "Boolean";
    case "interface{}":
      return "Object";
    case "os.File":
      return "File";
    default:
      return normalized;
  }
}

function isUnsafeIntegerName(name?: string) {
  if (!name) {
    return false;
  }
  return /^(?:id|ids)$/i.test(name) || /[_-]ids?$/i.test(name) || /Ids?$/.test(name) || /Id$/.test(name);
}

function stripEnumPrefix(key: string, enumName: string) {
  return key.startsWith(`${enumName}_`) ? key.slice(enumName.length + 1) : key;
}

function parseEnumValue(value: string) {
  if (value.startsWith('"') && value.endsWith('"')) {
    return value.slice(1, -1);
  }
  return Number(value);
}

function lowerFirst(value: string) {
  return value ? value[0].toLowerCase() + value.slice(1) : value;
}

function requireMatch(source: string, pattern: RegExp, filename: string, label: string) {
  const match = source.match(pattern);
  if (!match) {
    throw new Error(`Unable to parse ${label} from ${filename}`);
  }
  return match[1];
}
