import type { ApiSpec, ModelSpec } from "./spec";

export function parseGoApiSource(source: string, filename: string): ApiSpec {
  const serviceName = requireMatch(source, /type\s+(\w+ApiService)\s+service/, filename, "service name");
  const requestMatch = source.match(/type\s+(Api\w+Request)\s+struct\s*\{([\s\S]*?)\n\}/);
  if (!requestMatch) {
    throw new Error(`Unable to parse request struct from ${filename}`);
  }

  const requestType = requestMatch[1];
  const params = parseRequestFields(requestMatch[2]);
  const required = new Set([...source.matchAll(/if\s+r\.(\w+)\s*==\s*nil\s*\{/g)].map((match) => match[1]));
  const queryParams = parseQueryParams(source, params);
  const formParams = parseFormParams(source);
  const fileParams = parseFileParams(source);
  const bodyParam = source.match(/localVarPostBody\s*=\s*r\.(\w+)/)?.[1];

  return {
    className: serviceName.replace(/Service$/, ""),
    methodName: lowerFirst(requestType.replace(/^Api/, "").replace(/Request$/, "")),
    httpMethod: parseHttpMethod(source, filename),
    path: requireMatch(source, /localVarPath\s*:=\s*localBasePath\s*\+\s*"([^"]+)"/, filename, "localVarPath"),
    responseType: parseResponseType(source, filename),
    params: params.map((param) => ({ ...param, required: required.has(param.name) })),
    queryParams,
    formParams,
    fileParams,
    authNames: ["ApiKeyAuth"],
    accepts: [],
    contentTypes: parseStringArray(source, /localVarHTTPContentTypes\s*:=\s*\[\]string\s*\{([^}]*)\}/),
    bodyParam: bodyParam ? `request.${bodyParam}` : undefined,
  };
}

export function parseGoModelSource(source: string, filename: string): ModelSpec {
  const enumName = source.match(/type\s+(\w+)\s+(?:string|int|int32|int64|float32|float64)/)?.[1];
  if (enumName && /const\s*\(/.test(source)) {
    return {
      kind: "enum",
      name: enumName,
      values: [...source.matchAll(/^\s*(\w+)\s+\w+\s*=\s*("[^"]+"|-?\d+(?:\.\d+)?)/gm)].map((match) => ({
        key: stripEnumSuffix(match[1], enumName),
        value: parseEnumValue(match[2]),
      })),
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

function parseRequestFields(fieldsSource: string) {
  return fieldsSource
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("ctx ") && !line.startsWith("ApiService "))
    .map((line) => {
      const match = line.match(/^(\w+)\s+(.+)$/);
      if (!match) {
        throw new Error(`Unable to parse Go request field '${line}'`);
      }
      return {
        name: match[1],
        javaType: toJavaLikeType(match[2].trim(), match[1]),
      };
    });
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

function parseQueryParams(source: string, params: Array<{ javaType: string; name: string }>) {
  return [...source.matchAll(/parameterAddToHeaderOrQuery\(localVarQueryParams,\s*"([^"]+)",\s*r\.(\w+)\)/g)].map((match) => {
    return {
      name: match[1],
      source: `request.${match[2]}`,
    };
  });
}

function parseFormParams(source: string) {
  return [...source.matchAll(/parameterAddToHeaderOrQuery\(localVarFormParams,\s*"([^"]+)",\s*r\.(\w+)\)/g)].map((match) => ({
    name: match[1],
    source: `request.${match[2]}`,
  }));
}

function parseFileParams(source: string) {
  return [...source.matchAll(/formFiles\["([^"]+)"\]\s*=\s*r\.(\w+)/g)].map((match) => ({
    name: match[1],
    source: `request.${match[2]}`,
  }));
}

function parseHttpMethod(source: string, filename: string) {
  const method = requireMatch(source, /localVarHTTPMethod\s*:?=\s*http\.Method(\w+)/, filename, "HTTP method");
  return method.toUpperCase();
}

function parseResponseType(source: string, filename: string) {
  const executeMatch = source.match(/func\s+\(a\s+\*\w+ApiService\)\s+\w+Execute\([^)]*\)\s+\((\*?\w+|\[\]byte),\s+\*http\.Response,\s+error\)/);
  if (executeMatch) {
    return toJavaLikeType(executeMatch[1]);
  }
  return toJavaLikeType(requireMatch(source, /localVarReturnValue\s+(\*?\w+|\[\]byte)/, filename, "response type"));
}

function parseStringArray(source: string, pattern: RegExp): string[] {
  const match = source.match(pattern);
  if (!match) {
    return [];
  }
  return [...match[1].matchAll(/"([^"]+)"/g)].map((item) => item[1]);
}

function toJavaLikeType(goType: string, nameHint?: string): string {
  let normalized = goType.trim();
  normalized = normalized.replace(/^&/, "");
  while (normalized.startsWith("*")) {
    normalized = normalized.slice(1);
  }
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
    case "FormFileInfo":
      return "File";
    case "NullableTime":
      return "JsonNullable<String>";
    case "time.Time":
      return "String";
    default:
      return normalized;
  }
}

function isUnsafeIntegerName(name?: string) {
  if (!name) {
    return false;
  }
  return /^(?:id|ids)$/i.test(name) || /[_-]ids?$/i.test(name) || /Ids?$/.test(name);
}

function stripEnumSuffix(key: string, enumName: string) {
  return key.endsWith(`_${enumName}`) ? key.slice(0, -enumName.length - 1) : key;
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
