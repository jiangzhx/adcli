import type { JavaApiSpec, JavaModelSpec } from "./java-parser";

export interface ApiEmitOptions {
  runtimePrefix?: string;
  modelsModule?: string;
  parameterStyle?: "positional" | "requestObject";
}

export function emitApiClass(spec: JavaApiSpec, options: ApiEmitOptions = {}) {
  return `${emitApiHeader([spec], options)}

${emitApiClassBody(spec, options)}
`;
}

export function emitApiFile(specs: JavaApiSpec[], options: ApiEmitOptions = {}) {
  return `${emitApiHeader(specs, options)}

${specs.map((spec) => emitApiClassBody(spec, options)).join("\n")}
`;
}

function emitApiHeader(specs: JavaApiSpec[], options: ApiEmitOptions = {}) {
  const runtimePrefix = options.runtimePrefix ?? "../runtime";
  const modelsModule = options.modelsModule ?? "./models";
  const modelImports = [
    ...new Set(specs.flatMap((spec) => [...extractModelTypes(spec.responseType), ...spec.params.flatMap((param) => extractModelTypes(param.javaType))])),
  ].sort();
  const modelImportLine = modelImports.length > 0 ? `\nimport type { ${modelImports.join(", ")} } from "${modelsModule}";` : "";

  return `import { ApiClient } from "${runtimePrefix}/ApiClient";
import { ApiException } from "${runtimePrefix}/ApiException";
import type { ApiResponse } from "${runtimePrefix}/ApiResponse";${modelImportLine}`;
}

export function emitModelModule(spec: JavaModelSpec) {
  const modelImports = extractModelImports(spec);
  const importLine = modelImports.length > 0 ? `import type { ${modelImports.join(", ")} } from "../models";\n\n` : "";
  return `${importLine}${emitModel(spec)}`;
}

function extractModelImports(spec: JavaModelSpec) {
  if (spec.kind !== "interface") {
    return [];
  }
  const modelImports = [
    ...new Set(spec.fields.flatMap((field) => extractModelTypes(field.javaType)).filter((modelName) => modelName !== spec.name)),
  ].sort();
  return modelImports;
}

function emitApiClassBody(spec: JavaApiSpec, options: ApiEmitOptions = {}) {
  if (options.parameterStyle === "requestObject") {
    return emitApiClassBodyWithRequestObject(spec);
  }
  const responseType = toTypeScriptType(spec.responseType);
  const params = spec.params.map((param) => `${param.name}: ${toTypeScriptType(param.javaType)}`).join(", ");
  const args = spec.params.map((param) => param.name).join(", ");
  const checks = spec.params
    .filter((param) => param.required)
    .map(
      (param) =>
        `    if (${param.name} == null) {\n      throw new ApiException("Missing the required parameter '${param.name}' when calling ${spec.methodName}");\n    }`,
    )
    .join("\n\n");
  const queryParams = spec.queryParams
    .map((param) => {
      const collection = param.collectionFormat ? `, collectionFormat: "${param.collectionFormat}"` : "";
      return `        { name: "${param.name}", value: ${param.source}${collection} }`;
    })
    .join(",\n");
  const body = spec.bodyParam ? `,\n      body: ${spec.bodyParam}` : "";

  return `
export class ${spec.className} {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async ${spec.methodName}(${params}): Promise<${responseType}> {
    const response = await this.${spec.methodName}WithHttpInfo(${args});
    return response.data;
  }

  async ${spec.methodName}WithHttpInfo(${params}): Promise<ApiResponse<${responseType}>> {
${checks}
    return this.apiClient.requestWithHttpInfo<${responseType}>({
      method: "${spec.httpMethod}",
      path: "${spec.path}",
      queryParams: [
${queryParams}
      ]${body}
    });
  }
}

`;
}

function emitApiClassBodyWithRequestObject(spec: JavaApiSpec) {
  const responseType = toTypeScriptType(spec.responseType);
  const requestType = `${upperFirst(spec.methodName)}Request`;
  const fields = spec.params
    .map((param) => `  ${param.name}${param.required ? "" : "?"}: ${toTypeScriptType(param.javaType)};`)
    .join("\n");
  const checks = spec.params
    .filter((param) => param.required)
    .map(
      (param) =>
        `    if (request.${param.name} == null) {\n      throw new ApiException("Missing the required parameter '${param.name}' when calling ${spec.methodName}");\n    }`,
    )
    .join("\n\n");
  const queryParams = spec.queryParams
    .map((param) => {
      const collection = param.collectionFormat ? `, collectionFormat: "${param.collectionFormat}"` : "";
      return `        { name: "${param.name}", value: ${param.source}${collection} }`;
    })
    .join(",\n");
  const body = spec.bodyParam ? `,\n      body: ${spec.bodyParam}` : "";

  return `
export interface ${requestType} {
${fields}
}

export class ${spec.className} {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async ${spec.methodName}(request: ${requestType}): Promise<${responseType}> {
    const response = await this.${spec.methodName}WithHttpInfo(request);
    return response.data;
  }

  async ${spec.methodName}WithHttpInfo(request: ${requestType}): Promise<ApiResponse<${responseType}>> {
${checks}
    return this.apiClient.requestWithHttpInfo<${responseType}>({
      method: "${spec.httpMethod}",
      path: "${spec.path}",
      queryParams: [
${queryParams}
      ]${body}
    });
  }
}
`;
}

export function emitModelFile(specs: JavaModelSpec[]) {
  return specs.map((spec) => emitModel(spec)).join("\n");
}

export function emitModel(spec: JavaModelSpec) {
  if (spec.kind === "enum") {
    const values = spec.values.map((value) => `  ${value.key}: ${JSON.stringify(value.value)},`).join("\n");
    return `export const ${spec.name} = {
${values}
} as const;

export type ${spec.name} = typeof ${spec.name}[keyof typeof ${spec.name}];
`;
  }

  if (spec.kind === "abstractSchema") {
    return `export interface ${spec.name} {
  instance?: unknown;
  is_nullable?: boolean;
  schema_type?: string;
}
`;
  }

  const fields = spec.fields
    .map((field) => `  ${toPropertyKey(field.jsonName)}${field.required ? "" : "?"}: ${toTypeScriptType(field.javaType)};`)
    .join("\n");
  return `export interface ${spec.name} {
${fields}
}
`;
}

function toPropertyKey(name: string) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name) ? name : JSON.stringify(name);
}

function upperFirst(value: string) {
  return value ? value[0].toUpperCase() + value.slice(1) : value;
}

function toTypeScriptType(javaType: string): string {
  const normalized = javaType.trim();
  const listMatch = normalized.match(/^List<(.+)>$/);
  if (listMatch) {
    return `${toTypeScriptType(listMatch[1])}[]`;
  }
  const mapMatch = normalized.match(/^Map<String,\s*(.+)>$/);
  if (mapMatch) {
    return `Record<string, ${toTypeScriptType(mapMatch[1])}>`;
  }
  if (normalized.startsWith("JsonNullable<") && normalized.endsWith(">")) {
    const inner = normalized.slice("JsonNullable<".length, -1);
    return `${toTypeScriptType(inner)} | null`;
  }
  switch (normalized) {
    case "byte[]":
      return "ArrayBuffer";
    case "String":
      return "string";
    case "Integer":
    case "Long":
    case "Float":
    case "Double":
    case "BigDecimal":
      return "number";
    case "LongString":
      return "number | string";
    case "Boolean":
      return "boolean";
    case "Object":
      return "unknown";
    case "File":
      return "File";
    default:
      return normalized;
  }
}

function extractModelTypes(javaType: string): string[] {
  const normalized = javaType.trim();
  const listMatch = normalized.match(/^List<(.+)>$/);
  if (listMatch) {
    return extractModelTypes(listMatch[1]);
  }
  const mapMatch = normalized.match(/^Map<String,\s*(.+)>$/);
  if (mapMatch) {
    return extractModelTypes(mapMatch[1]);
  }
  if (normalized.startsWith("JsonNullable<") && normalized.endsWith(">")) {
    return extractModelTypes(normalized.slice("JsonNullable<".length, -1));
  }
  if (
    ["String", "Integer", "Long", "LongString", "Float", "Double", "BigDecimal", "Boolean", "Object", "File", "byte[]"].includes(
      normalized,
    )
  ) {
    return [];
  }
  return [normalized];
}
