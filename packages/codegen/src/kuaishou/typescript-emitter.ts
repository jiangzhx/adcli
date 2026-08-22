import type { KuaishouApiFileSpec, KuaishouApiSpec, KuaishouEnumSpec, KuaishouModelFileSpec, KuaishouModelStructSpec } from "./spec";
import { collectReferencedTypes, resolveTypeImport, type KuaishouTypeRegistry } from "./type-registry";

export function emitModelFile(spec: KuaishouModelFileSpec, options: { typeRegistry?: KuaishouTypeRegistry } = {}): string {
  const needsId = spec.structs.some((model) => collectTypes(model).has("KuaishouId"));
  const needsPageInfo = spec.structs.some((model) => collectTypes(model).has("PageInfo"));
  const needsMatchType = spec.structs.some((model) => collectTypes(model).has("MatchType"));
  const requestKinds = new Set(spec.structs.map((model) => model.requestKind).filter((kind) => kind !== "none"));
  const imports: string[] = [];
  if (requestKinds.size > 0) {
    const names = [...requestKinds].flatMap((kind) => (kind === "get" ? ["GetRequest"] : kind === "upload" ? ["UploadRequest", "UploadField"] : ["PostRequest"]));
    if (spec.structs.some((model) => model.fields.some((field) => field.tsType === "UploadField"))) {
      names.push("UploadField");
    }
    imports.push(`import type { ${[...new Set(names)].join(", ")} } from "${modelRuntimeImport(spec.relativePath)}";`);
  }
  const needsMarshal = spec.structs.some(
    (model) =>
      model.requestKind === "post" ||
      (model.requestKind === "get" && model.fields.some((field) => field.tsType.endsWith("[]"))),
  );
  const needsQuery = spec.structs.some((model) => model.requestKind === "get");
  if (needsId || needsPageInfo || needsMatchType || needsMarshal || needsQuery) {
    const typeNames = [needsId ? "KuaishouId" : null, needsPageInfo ? "PageInfo" : null, needsMatchType ? "MatchType" : null].filter(Boolean);
    const valueNames = [needsMarshal ? "jsonMarshal" : null, needsQuery ? "encodeQuery" : null].filter(Boolean);
    const from = modelRuntimeImport(spec.relativePath, "types");
    if (typeNames.length > 0) {
      imports.push(`import type { ${typeNames.join(", ")} } from "${from}";`);
    }
    if (valueNames.length > 0) {
      imports.push(`import { ${valueNames.join(", ")} } from "${from}";`);
    }
  }
  imports.push(...emitModelTypeImports(spec, options.typeRegistry));

  const body = [
    ...(spec.enums ?? []).map((item) => emitEnum(item)),
    ...spec.structs.map((model) => emitModelStruct(model)),
  ].join("\n\n");
  return `${generatedHeader(spec.relativePath)}${imports.join("\n")}${imports.length ? "\n\n" : ""}${body}\n`;
}

export function emitApiFile(spec: KuaishouApiFileSpec): string {
  const modelImport = spec.modelImport ? apiModelImport(spec.relativePath, spec.modelImport) : undefined;
  const importedTypes = unique(
    spec.functions.flatMap((fn) => [fn.requestType, fn.requestInitType, ...collectReferencedTypes(fn.responseType)]).filter(isIdentifierType),
  );
  const needsId = spec.functions.some(
    (fn) => collectReferencedTypes(fn.responseType).includes("KuaishouId") || fn.params.some((param) => collectReferencedTypes(param.tsType).includes("KuaishouId") || param.tsType === "KuaishouId"),
  );
  const imports = [
    `import type { SDKClient } from "${apiCoreImport(spec.relativePath)}";`,
    needsId ? `import type { KuaishouId } from "${apiModelRuntimeImport(spec.relativePath)}";` : "",
    modelImport && importedTypes.length > 0 ? `import { ${importedTypes.join(", ")} } from "${modelImport}";` : "",
  ].filter(Boolean);

  const functions = spec.functions.map((fn) => emitApiFunction(fn)).join("\n\n");
  return `${generatedHeader(spec.relativePath)}${imports.join("\n")}\n\n${functions}\n`;
}

export function emitBarrel(modulePaths: string[]): string {
  return `${modulePaths.map((path) => `export * from "${path}";`).join("\n")}\n`;
}

function emitModelStruct(model: KuaishouModelStructSpec): string {
  if (model.requestKind === "none") {
    return emitInterface(model.name, model);
  }
  const initName = `${model.name}Init`;
  const requestInterface = model.requestKind === "get" ? "GetRequest" : model.requestKind === "upload" ? "UploadRequest" : "PostRequest";
  return `${emitInterface(initName, model)}

export class ${model.name} implements ${requestInterface}, ${initName} {
${model.fields.map((field) => `  ${field.jsonName}?: ${field.tsType};`).join("\n")}

  constructor(init: ${initName} = {}) {
${model.fields.map((field) => `    this.${field.jsonName} = init.${field.jsonName};`).join("\n")}
  }

  path() {
    return ${JSON.stringify(model.url ?? "")};
  }

  encode() {
${emitEncode(model)}
  }
}`;
}

function emitEnum(spec: KuaishouEnumSpec): string {
  const members = spec.members.map((member) => `  ${member.tsName}: ${JSON.stringify(member.value)},`).join("\n");
  return `export const ${spec.name} = {
${members}
} as const;

export type ${spec.name} = (typeof ${spec.name})[keyof typeof ${spec.name}];`;
}

function emitModelTypeImports(spec: KuaishouModelFileSpec, registry?: KuaishouTypeRegistry): string[] {
  if (!registry) {
    return [];
  }
  const localNames = new Set([
    ...spec.structs.map((model) => model.name),
    ...(spec.enums ?? []).map((item) => item.name),
  ]);
  const bySpecifier = new Map<string, Set<string>>();
  for (const model of spec.structs) {
    for (const typeName of collectTypes(model)) {
      if (localNames.has(typeName)) {
        continue;
      }
      const specifier = resolveTypeImport(typeName, spec.relativePath, registry);
      if (!specifier) {
        continue;
      }
      const names = bySpecifier.get(specifier) ?? new Set();
      names.add(typeName);
      bySpecifier.set(specifier, names);
    }
  }
  return [...bySpecifier.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([specifier, names]) => `import type { ${[...names].sort().join(", ")} } from "${specifier}";`);
}

function emitInterface(name: string, model: KuaishouModelStructSpec): string {
  if (model.fields.length === 0) {
    return `export interface ${name} {}`;
  }
  return `export interface ${name} {
${model.fields.map((field) => `  ${field.jsonName}?: ${field.tsType};`).join("\n")}
}`;
}

function emitEncode(model: KuaishouModelStructSpec): string {
  if (model.requestKind === "upload") {
    return `    const fields: UploadField[] = [];
    for (const [key, value] of Object.entries(this)) {
      if (value == null || typeof value === "function") {
        continue;
      }
      if (typeof value === "object" && "value" in value) {
        const file = value as UploadField;
        fields.push({ key, value: file.value, reader: file.reader });
        continue;
      }
      fields.push({ key, value: String(value) });
    }
    return fields;`;
  }
  const objectLiteral = `{
${model.fields.map((field) => `      ${field.jsonName}: this.${field.jsonName},`).join("\n")}
    }`;
  if (model.requestKind === "get") {
    const queryFields = model.fields
      .map((field) => {
        if (field.tsType.endsWith("[]")) {
          return `      ${field.jsonName}: this.${field.jsonName}?.length ? new TextDecoder().decode(jsonMarshal(this.${field.jsonName})) : undefined,`;
        }
        return `      ${field.jsonName}: this.${field.jsonName} == null ? undefined : String(this.${field.jsonName}),`;
      })
      .join("\n");
    return `    return encodeQuery({\n${queryFields}\n    });`;
  }
  return `    return jsonMarshal(${objectLiteral});`;
}

function emitApiFunction(fn: KuaishouApiSpec): string {
  const args = [
    "client: SDKClient",
    ...fn.params.map((param) => `${param.tsName}: ${param.tsType}`),
    fn.kind === "url" ? "" : "signal?: AbortSignal",
  ].filter(Boolean).join(", ");
  const requestSetup = emitRequestSetup(fn);
  const call = emitClientCall(fn);
  const body = [requestSetup, call].filter(Boolean).join("\n");
  const signature = fn.kind === "url"
    ? `export function ${fn.tsName}(${args}): ${fn.responseType}`
    : `export async function ${fn.tsName}(${args}): Promise<${fn.responseType}>`;

  return `${signature} {
${body}
}

export { ${fn.tsName} as ${fn.functionName} };`;
}

function emitRequestSetup(fn: KuaishouApiSpec): string {
  if (fn.buildsRequest) {
    const fields = fn.buildsRequest.fields
      .map((field) => {
        if (field.source === "appId") {
          return `    ${field.jsonName}: client.AppID(),`;
        }
        if (field.source === "secret") {
          return `    ${field.jsonName}: client.Secret(),`;
        }
        return `    ${field.jsonName}: ${field.paramName},`;
      })
      .join("\n");
    return `  const req = new ${fn.buildsRequest.type}({\n${fields}\n  });`;
  }
  if (fn.requestType && fn.params.some((param) => param.role === "request")) {
    return `  const request = req instanceof ${fn.requestType} ? req : new ${fn.requestType}(req);`;
  }
  return "";
}

function emitClientCall(fn: KuaishouApiSpec): string {
  const requestName = fn.buildsRequest ? "req" : "request";
  const accessToken = fn.params.find((param) => param.role === "accessToken")?.tsName ?? '""';
  if (fn.kind === "url") {
    return `  request.app_id = client.AppID();\n  return \`\${client.oauthUrl}/\${request.path()}?\${request.encode()}\`;`;
  }
  if (fn.kind === "getBytes") {
    return `  return client.getBytes(${accessToken}, ${requestName}, signal);`;
  }
  const method = fn.kind === "get" ? "get" : fn.kind === "upload" ? "upload" : fn.kind === "getOnBody" ? "getOnBody" : "post";
  const options = fn.successCodes?.length ? `, { successCodes: [${fn.successCodes.join(", ")}] }` : "";
  if (fn.unwrap === "void") {
    return `  await client.${method}<unknown>(${accessToken}, ${requestName}, signal${options});`;
  }
  if (fn.unwrap === "field") {
    return `  const resp = await client.${method}<{ ${fn.extractField}?: ${fn.responseType} }>(${accessToken}, ${requestName}, signal${options});\n  return resp.${fn.extractField} ?? ${unwrapFallback(fn.responseType)};`;
  }
  return `  return client.${method}<${fn.responseType}>(${accessToken}, ${requestName}, signal${options});`;
}

function generatedHeader(relativePath: string) {
  return `// Generated from github.com/bububa/kwai-marketing-api/${relativePath}\n// Do not edit manually.\n\n`;
}

function collectTypes(model: KuaishouModelStructSpec) {
  const types = new Set<string>();
  for (const field of model.fields) {
    for (const name of collectReferencedTypes(field.tsType)) {
      types.add(name);
    }
  }
  return types;
}

function modelRuntimeImport(relativePath: string, file = "request") {
  const depth = Math.max(relativePath.split("/").length - 2, 1);
  return `${"../".repeat(depth)}${file}`;
}

function apiCoreImport(relativePath: string) {
  const depth = relativePath.split("/").length - 1;
  return `${"../".repeat(depth)}core/index`;
}

function apiModelRuntimeImport(relativePath: string) {
  const depth = relativePath.split("/").length - 1;
  return `${"../".repeat(depth)}model/index`;
}

function apiModelImport(relativePath: string, modelImport: string) {
  const depth = relativePath.split("/").length - 1;
  return `${"../".repeat(depth)}model/${modelImport}/index`;
}

function unwrapFallback(responseType: string) {
  if (responseType.endsWith("[]")) {
    return "[]";
  }
  if (responseType === "string") {
    return '""';
  }
  return "0";
}

function isIdentifierType(value: string | undefined): value is string {
  return value != null && /^[A-Z][A-Za-z0-9]*$/.test(value) && value !== "KuaishouId" && value !== "Uint8Array";
}

function unique(values: string[]) {
  return [...new Set(values)];
}
