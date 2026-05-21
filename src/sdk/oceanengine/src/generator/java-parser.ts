export interface JavaApiParam {
  javaType: string;
  name: string;
  required: boolean;
}

export interface JavaApiQueryParam {
  name: string;
  source: string;
  collectionFormat?: "csv" | "multi";
}

export interface JavaApiSpec {
  className: string;
  methodName: string;
  httpMethod: string;
  path: string;
  responseType: string;
  params: JavaApiParam[];
  queryParams: JavaApiQueryParam[];
  formParams: string[];
  authNames: string[];
  accepts: string[];
  contentTypes: string[];
  bodyParam?: string;
}

export type JavaModelSpec =
  | {
      kind: "interface";
      name: string;
      fields: Array<{ jsonName: string; javaName: string; javaType: string; required: boolean }>;
    }
  | {
      kind: "abstractSchema";
      name: "AbstractOpenApiSchema";
    }
  | {
      kind: "enum";
      name: string;
      values: Array<{ key: string; value: string }>;
    };

export function parseJavaApiSource(source: string, filename: string): JavaApiSpec {
  const className = requireMatch(source, /public\s+class\s+(\w+)/, filename, "class name");
  const methodMatch = source.match(/public\s+([\w<>\[\]\s]+?)\s+(openApi\w+?)\(([^)]*)\)\s+throws\s+ApiException/);
  if (!methodMatch) {
    throw new Error(`Unable to parse sync API method from ${filename}`);
  }

  const methodName = methodMatch[2];
  const params = parseMethodParams(methodMatch[3]);
  const required = new Set([...source.matchAll(/Missing the required parameter '(\w+)'/g)].map((match) => match[1]));
  const path = requireMatch(source, /String\s+localVarPath\s*=\s*"([^"]+)"/, filename, "localVarPath");
  const httpMethod = requireMatch(source, /buildCall\([\s\S]*?,\s*"([A-Z]+)"/, filename, "HTTP method");
  const responseType = requireMatch(source, /new\s+TypeToken<([^>]+)>/, filename, "response type").trim();
  const bodyParam = source.match(/Object\s+localVarPostBody\s*=\s*(\w+)/)?.[1];

  return {
    className,
    methodName,
    httpMethod,
    path,
    responseType,
    params: params.map((param) => ({ ...param, required: required.has(param.name) })),
    queryParams: parseQueryParams(source),
    formParams: parseFormParams(source),
    authNames: parseStringArray(source, /String\[\]\s+localVarAuthNames\s*=\s*new\s+String\[\]\s*\{([^}]*)\}/),
    accepts: parseStringArray(source, /String\[\]\s+localVarAccepts\s*=\s*\{([^}]*)\}/),
    contentTypes: parseStringArray(source, /String\[\]\s+localVarContentTypes\s*=\s*\{([^}]*)\}/),
    bodyParam: bodyParam && bodyParam !== "null" ? bodyParam : undefined,
  };
}

export function parseJavaModelSource(source: string, filename: string): JavaModelSpec {
  if (filename === "AbstractOpenApiSchema.java" && /public\s+abstract\s+class\s+AbstractOpenApiSchema/.test(source)) {
    return {
      kind: "abstractSchema",
      name: "AbstractOpenApiSchema",
    };
  }

  const enumName = source.match(/public\s+enum\s+(\w+)/)?.[1];
  if (enumName) {
    return {
      kind: "enum",
      name: enumName,
      values: [...source.matchAll(/^\s*([A-Z][A-Z0-9_]*)\("([^"]+)"\)/gm)].map((match) => ({
        key: match[1],
        value: match[2],
      })),
    };
  }

  const className = requireMatch(source, /public\s+class\s+(\w+)/, filename, "model class name");
  const serializedNames = new Map(
    [...source.matchAll(/public\s+static\s+final\s+String\s+(SERIALIZED_NAME_\w+)\s*=\s*"([^"]+)"/g)].map((match) => [
      match[1],
      match[2],
    ]),
  );
  const required = new Set([...source.matchAll(/openapiRequiredFields\.add\("([^"]+)"\)/g)].map((match) => match[1]));
  const fields = [...source.matchAll(/@SerializedName\((SERIALIZED_NAME_\w+)\)\s+private\s+([^;=]+?)\s+(\w+)\s*(?:=|;)/g)].map(
    (match) => {
      const jsonName = serializedNames.get(match[1]);
      if (!jsonName) {
        throw new Error(`Unable to resolve ${match[1]} in ${filename}`);
      }
      return {
        jsonName,
        javaType: match[2].trim(),
        javaName: match[3],
        required: required.has(jsonName),
      };
    },
  );

  return {
    kind: "interface",
    name: className,
    fields,
  };
}

function parseMethodParams(paramsSource: string): Array<{ javaType: string; name: string }> {
  return splitParams(paramsSource)
    .filter((param) => param && !param.includes("ApiCallback"))
    .map((param) => {
      const match = param.trim().match(/^(.+?)\s+(\w+)$/);
      if (!match) {
        throw new Error(`Unable to parse Java parameter '${param}'`);
      }
      return {
        javaType: match[1].trim(),
        name: match[2],
      };
    });
}

function parseQueryParams(source: string): JavaApiQueryParam[] {
  const scalar = [...source.matchAll(/parameterToPair\("([^"]+)",\s*(\w+)\)/g)].map((match) => ({
    name: match[1],
    source: match[2],
  }));
  const collections = [...source.matchAll(/parameterToPairs\("([^"]+)",\s*"([^"]+)",\s*(\w+)\)/g)].map((match) => ({
    collectionFormat: match[1] as "csv" | "multi",
    name: match[2],
    source: match[3],
  }));
  return [...scalar, ...collections];
}

function parseFormParams(source: string): string[] {
  return [...source.matchAll(/localVarFormParams\.put\("([^"]+)"/g)].map((match) => match[1]);
}

function parseStringArray(source: string, pattern: RegExp): string[] {
  const match = source.match(pattern);
  if (!match) {
    return [];
  }
  return [...match[1].matchAll(/"([^"]+)"/g)].map((item) => item[1]);
}

function splitParams(paramsSource: string) {
  const params: string[] = [];
  let depth = 0;
  let current = "";
  for (const char of paramsSource) {
    if (char === "<") {
      depth += 1;
    } else if (char === ">") {
      depth -= 1;
    } else if (char === "," && depth === 0) {
      params.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }
  if (current.trim()) {
    params.push(current.trim());
  }
  return params;
}

function requireMatch(source: string, pattern: RegExp, filename: string, label: string) {
  const match = source.match(pattern);
  if (!match) {
    throw new Error(`Unable to parse ${label} from ${filename}`);
  }
  return match[1];
}
