import type { ApiSpec, ModelSpec } from "./spec";

export interface ApiEmitOptions {
  clientModule?: string;
  configurationModules?: {
    v1: string;
    v3: string;
  };
  modelsModule?: string;
}

export interface ModelEmitOptions {
  modelsModule?: string;
}

export function emitApiFile(specs: ApiSpec[], options: ApiEmitOptions = {}) {
  return `${emitApiHeader(specs, options)}

${specs.map((spec) => emitRequestInterface(spec)).join("\n")}

${emitApiClassBody(specs)}
`;
}

export function emitModelModule(spec: ModelSpec, options: ModelEmitOptions = {}) {
  const modelsModule = options.modelsModule ?? "../model/index";
  const modelImports = extractModelImports(spec);
  const importLine = modelImports.length > 0 ? `import type { ${modelImports.join(", ")} } from "${modelsModule}";\n\n` : "";
  return `${importLine}${emitModel(spec)}`;
}

function emitApiHeader(specs: ApiSpec[], options: ApiEmitOptions = {}) {
  const clientModule = options.clientModule ?? "./client";
  const configurationModules = options.configurationModules ?? {
    v1: "../config/configuration",
    v3: "../config/v3/configuration",
  };
  const modelsModule = options.modelsModule ?? "./model/index";
  const modelImports = [
    ...new Set(specs.flatMap((spec) => [...extractModelTypes(spec.responseType), ...spec.params.flatMap((param) => extractModelTypes(param.javaType))])),
  ].sort();
  const modelImportLine = modelImports.length > 0 ? `\nimport type { ${modelImports.join(", ")} } from "${modelsModule}";` : "";
  const configurationImports = emitConfigurationImports(specs, configurationModules);

  return `import { ApiClient, ApiException, type ApiResponse } from "${clientModule}";${modelImportLine}${configurationImports}`;
}

function emitRequestInterface(spec: ApiSpec) {
  const requestType = requestTypeName(spec);
  const fields = spec.params
    .map((param) => `  ${param.name}${param.required ? "" : "?"}: ${toTypeScriptType(param.javaType)};`)
    .join("\n");

  return `export interface ${requestType} {
${fields}
}
`;
}

function emitApiClassBody(specs: ApiSpec[]) {
  const className = specs[0]?.className ?? "Api";
  return `export class ${className} {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

${specs.map((spec) => emitApiMethod(spec)).join("\n")}
}
`;
}

function emitApiMethod(spec: ApiSpec) {
  const responseType = toTypeScriptType(spec.responseType);
  const requestType = requestTypeName(spec);
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
  const formParams = emitNamedRequestObject("formParams", spec.formParams);
  const fileParams = emitNamedRequestObject("files", spec.fileParams);
  const basePath = spec.basePath ? `      basePath: ${configurationExpression(spec.basePath)}.basePath,\n` : "";
  const contentType = spec.contentTypes[0] ? `,\n      contentType: "${spec.contentTypes[0]}"` : "";
  const body = spec.bodyParam ? `,\n      body: ${spec.bodyParam}` : "";

  return `  async ${spec.methodName}(request: ${requestType}): Promise<${responseType}> {
    const response = await this.${spec.methodName}WithHttpInfo(request);
    return response.data;
  }

  async ${spec.methodName}WithHttpInfo(request: ${requestType}): Promise<ApiResponse<${responseType}>> {
${checks}
    return this.apiClient.requestWithHttpInfo<${responseType}>({
      method: "${spec.httpMethod}",
${basePath.trimEnd()}
      path: "${spec.path}",
      queryParams: [
${queryParams}
      ]${contentType}${formParams}${fileParams}${body}
    });
  }
`;
}

function emitNamedRequestObject(name: "formParams" | "files", params: Array<{ name: string; source: string }>) {
  if (params.length === 0) {
    return "";
  }
  const fields = params.map((param) => `        ${toPropertyKey(param.name)}: ${param.source}`).join(",\n");
  return `,\n      ${name}: {\n${fields}\n      }`;
}

function emitConfigurationImports(specs: ApiSpec[], configurationModules: { v1: string; v3: string }) {
  const imports = [
    ...new Set(
      specs.flatMap((spec) => {
        const config = configurationImport(spec.basePath, configurationModules);
        return config ? [config] : [];
      }),
    ),
  ].sort();
  return imports.length > 0 ? `\n${imports.join("\n")}` : "";
}

function configurationImport(basePath: string | undefined, configurationModules: { v1: string; v3: string }) {
  switch (basePath) {
    case "https://sandbox-api.e.qq.com/v1.3":
      return `import { DefaultConfiguration as TencentAdsV13Configuration } from "${configurationModules.v1}";`;
    case "https://api.e.qq.com/v3.0":
      return `import { DefaultConfiguration as TencentAdsV30Configuration } from "${configurationModules.v3}";`;
    default:
      return undefined;
  }
}

function configurationExpression(basePath: string) {
  switch (basePath) {
    case "https://sandbox-api.e.qq.com/v1.3":
      return "TencentAdsV13Configuration";
    case "https://api.e.qq.com/v3.0":
      return "TencentAdsV30Configuration";
    default:
      return `{ basePath: ${JSON.stringify(basePath)} }`;
  }
}

export function emitModel(spec: ModelSpec) {
  if (spec.kind === "alias") {
    return `export type ${spec.name} = ${toTypeScriptType(spec.javaType)};
`;
  }

  if (spec.kind === "enum") {
    const values = spec.values.map((value) => `  ${toPropertyKey(value.key)}: ${JSON.stringify(value.value)},`).join("\n");
    return `export const ${spec.name} = {
${values}
} as const;

export type ${spec.name} = typeof ${spec.name}[keyof typeof ${spec.name}];
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

function extractModelImports(spec: ModelSpec) {
  if (spec.kind !== "interface") {
    if (spec.kind === "alias") {
      return extractModelTypes(spec.javaType).filter((modelName) => modelName !== spec.name).sort();
    }
    return [];
  }
  return [
    ...new Set(spec.fields.flatMap((field) => extractModelTypes(field.javaType)).filter((modelName) => modelName !== spec.name)),
  ].sort();
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
    return `${toTypeScriptType(listMatch[1])}[]`;
  }
  const mapMatch = normalized.match(/^Map<String,\s*(.+)>$/);
  if (mapMatch) {
    return `Record<string, ${toTypeScriptType(mapMatch[1])}>`;
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
  if (["String", "Integer", "Long", "LongString", "Float", "Double", "Boolean", "Object", "File", "byte[]"].includes(normalized)) {
    return [];
  }
  return [normalized];
}
