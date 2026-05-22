import type { ApiCheckSpec, ApiSpec, ModelSpec } from "./spec";

export interface ApiEmitOptions {
  clientModule?: string;
  modelsModule?: string;
}

export interface ModelEmitOptions {
  modelsModule?: string;
}

export function emitApiClass(spec: ApiSpec, options: ApiEmitOptions = {}) {
  return `${emitApiHeader([spec], options)}

${emitApiClassBody(spec)}
`;
}

export function emitApiFile(specs: ApiSpec[], options: ApiEmitOptions = {}) {
  return `${emitApiHeader(specs, options)}

${specs.map((spec) => emitApiClassBody(spec)).join("\n")}
`;
}

function emitApiHeader(specs: ApiSpec[], options: ApiEmitOptions = {}) {
  const clientModule = options.clientModule ?? "./client";
  const modelsModule = options.modelsModule ?? "./models";
  const modelImports = [
    ...new Set(specs.flatMap((spec) => [...extractModelTypes(spec.responseType), ...spec.params.flatMap((param) => extractModelTypes(param.javaType))])),
  ].sort();
  const modelImportLine = modelImports.length > 0 ? `\nimport type { ${modelImports.join(", ")} } from "${modelsModule}";` : "";

  return `import { ApiClient, ApiException, type ApiResponse } from "${clientModule}";${modelImportLine}`;
}

export function emitModelModule(spec: ModelSpec, options: ModelEmitOptions = {}) {
  const modelsModule = options.modelsModule ?? "../models/index";
  const modelImports = extractModelImports(spec);
  const importLine = modelImports.length > 0 ? `import type { ${modelImports.join(", ")} } from "${modelsModule}";\n\n` : "";
  return `${importLine}${emitModel(spec)}`;
}

function extractModelImports(spec: ModelSpec) {
  if (spec.kind !== "interface") {
    return [];
  }
  const modelImports = [
    ...new Set(spec.fields.flatMap((field) => extractModelTypes(field.javaType)).filter((modelName) => modelName !== spec.name)),
  ].sort();
  return modelImports;
}

function emitApiClassBody(spec: ApiSpec) {
  const responseType = toTypeScriptType(spec.responseType);
  const requestType = requestTypeName(spec);
  const fields = spec.params
    .map((param) => `  ${param.name}${param.required ? "" : "?"}: ${toTypeScriptType(param.javaType)};`)
    .join("\n");
  const checks = emitApiChecks(spec);
  const queryParams = spec.queryParams
    .map((param) => {
      const collection = param.collectionFormat ? `, collectionFormat: "${param.collectionFormat}"` : "";
      return `        { name: "${param.name}", value: ${param.source}${collection} }`;
    })
    .join(",\n");
  const formParams = emitNamedRequestObject("formParams", spec.formParams);
  const fileParams = emitNamedRequestObject("files", spec.fileParams);
  const contentType = spec.contentTypes[0] ? `,\n      contentType: "${spec.contentTypes[0]}"` : "";
  const responseTypeOption = spec.responseType === "byte[]" ? `,\n      responseType: "arrayBuffer"` : "";
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
      ]${contentType}${formParams}${fileParams}${body}${responseTypeOption}
    });
  }
}
`;
}

function emitApiChecks(spec: ApiSpec) {
  const checks = spec.checks ?? spec.params
    .filter((param) => param.required)
    .map((param) => ({ kind: "required" as const, paramName: param.name, message: `${param.name} is required and must be specified` }));
  return checks.map(emitApiCheck).join("\n\n");
}

function emitApiCheck(check: ApiCheckSpec) {
  const condition = emitCheckCondition(check);
  return `    if (${condition}) {\n      throw new ApiException(${JSON.stringify(check.message)});\n    }`;
}

function emitCheckCondition(check: ApiCheckSpec) {
  switch (check.kind) {
    case "required":
      return `request.${check.paramName} == null`;
    case "number":
      return `request.${check.paramName} != null && Number(request.${check.paramName}) ${check.operator} ${check.value}`;
    case "length":
      return `request.${check.paramName} != null && request.${check.paramName}.length ${check.operator} ${check.value}`;
    case "stringLength":
      return `request.${check.paramName} != null && Array.from(String(request.${check.paramName})).length ${check.operator} ${check.value}`;
  }
}

function emitNamedRequestObject(name: "formParams" | "files", params: Array<{ name: string; source: string }>) {
  if (params.length === 0) {
    return "";
  }
  const fields = params.map((param) => `        ${toPropertyKey(param.name)}: ${param.source}`).join(",\n");
  return `,\n      ${name}: {\n${fields}\n      }`;
}

export function emitModelFile(specs: ModelSpec[]) {
  return specs.map((spec) => emitModel(spec)).join("\n");
}

export function emitModel(spec: ModelSpec) {
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

function requestTypeName(spec: ApiSpec) {
  return `${spec.className}${upperFirst(spec.methodName)}Request`;
}

function toTypeScriptType(javaType: string): string {
  const normalized = javaType.trim();
  const listMatch = normalized.match(/^List<(.+)>$/);
  if (listMatch) {
    return `${toArrayElementType(listMatch[1])}[]`;
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
      return "Blob";
    default:
      return normalized;
  }
}

function toArrayElementType(javaType: string): string {
  const type = toTypeScriptType(javaType);
  return type.includes("|") ? `(${type})` : type;
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
