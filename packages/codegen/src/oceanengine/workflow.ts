import { readdir, readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseJavaApiSource, parseJavaModelSource } from "./java-parser";
import { emitApiClass, emitModelModule } from "./typescript-emitter";
import type { JavaApiSpec, JavaModelSpec } from "./java-parser";

export interface PortWorkflowOptions {
  javaSdkRoot: string;
  outputDir?: string;
  phase: "A" | "B";
  apiFiles?: string[];
  modelFiles?: string[];
  includeModelClosure?: boolean;
}

export interface PortWorkflowResult {
  phase: "A" | "B";
  apis: number;
  specialApis: Array<{ file: string; coverage: string }>;
  models: number;
  skipped: Array<{ file: string; reason: string }>;
}

export async function runPortWorkflow(options: PortWorkflowOptions): Promise<PortWorkflowResult> {
  const javaSdkRoot = resolve(options.javaSdkRoot);
  const outputDir = resolve(options.outputDir ?? defaultSdkOutputDir());
  const apiFiles = options.apiFiles ?? (await listJavaFiles(javaSdkRoot, "api"));
  const modelFiles = options.modelFiles ?? (await listJavaFiles(javaSdkRoot, "model"));
  const skipped: Array<{ file: string; reason: string }> = [];
  const specialApis: Array<{ file: string; coverage: string }> = [];
  const apiSpecs: JavaApiSpec[] = [];
  const modelSpecs: JavaModelSpec[] = [];

  await mkdir(outputDir, { recursive: true });
  await Promise.all([
    rm(join(outputDir, "apis"), { recursive: true, force: true }),
    rm(join(outputDir, "models"), { recursive: true, force: true }),
    rm(join(outputDir, "apis.ts"), { force: true }),
    rm(join(outputDir, "models.ts"), { force: true }),
    rm(join(outputDir, "manifest.json"), { force: true }),
  ]);
  await mkdir(join(outputDir, "apis"), { recursive: true });
  await mkdir(join(outputDir, "models"), { recursive: true });

  for (const file of apiFiles) {
    if (file === "CommonReqApi.java") {
      specialApis.push({ file: "api/CommonReqApi.java", coverage: "src/runtime/CommonReqApi.ts" });
      continue;
    }
    try {
      const source = await readJavaFile(javaSdkRoot, "api", file);
      apiSpecs.push(parseJavaApiSource(source, file));
    } catch (error) {
      skipped.push({ file: `api/${file}`, reason: error instanceof Error ? error.message : String(error) });
    }
  }

  for (const file of modelFiles) {
    await addModelSpec(javaSdkRoot, file, modelSpecs, skipped);
  }

  if (options.includeModelClosure) {
    await addModelClosure(javaSdkRoot, modelSpecs, skipped);
  }

  const result: PortWorkflowResult = {
    phase: options.phase,
    apis: apiSpecs.length,
    specialApis,
    models: modelSpecs.length,
    skipped,
  };

  await Promise.all(
    apiSpecs.map((spec) =>
      writeFile(
        join(outputDir, "apis", `${spec.className}.ts`),
        `${generatedHeader(options.phase)}\n${emitApiClass(spec, { runtimePrefix: "../runtime", modelsModule: "../models" })}\n`,
      ),
    ),
  );
  await Promise.all(
    modelSpecs.map((spec) =>
      writeFile(join(outputDir, "models", `${spec.name}.ts`), `${generatedHeader(options.phase)}\n${emitModelModule(spec)}\n`),
    ),
  );
  await writeFile(join(outputDir, "apis.ts"), `${generatedHeader(options.phase)}\n${emitBarrel(apiSpecs.map((spec) => `./apis/${spec.className}`))}`);
  await writeFile(
    join(outputDir, "models.ts"),
    `${generatedHeader(options.phase)}\n${emitBarrel(modelSpecs.map((spec) => `./models/${spec.name}`))}`,
  );
  await writeFile(join(outputDir, "manifest.json"), `${JSON.stringify(result, null, 2)}\n`);

  return result;
}

function defaultSdkOutputDir() {
  return resolve(dirname(fileURLToPath(import.meta.url)), "../../../oceanengine-ad-open-sdk/src");
}

async function listJavaFiles(javaSdkRoot: string, kind: "api" | "model") {
  const dir = join(javaSdkRoot, "src/main/java/com/bytedance/ads", kind);
  return (await readdir(dir)).filter((file) => file.endsWith(".java")).sort();
}

async function readJavaFile(javaSdkRoot: string, kind: "api" | "model", file: string) {
  return readFile(join(javaSdkRoot, "src/main/java/com/bytedance/ads", kind, file), "utf8");
}

async function addModelSpec(
  javaSdkRoot: string,
  file: string,
  modelSpecs: JavaModelSpec[],
  skipped: Array<{ file: string; reason: string }>,
) {
  if (modelSpecs.some((spec) => `${spec.name}.java` === file)) {
    return;
  }
  try {
    const source = await readJavaFile(javaSdkRoot, "model", file);
    modelSpecs.push(parseJavaModelSource(source, file));
  } catch (error) {
    skipped.push({ file: `model/${file}`, reason: error instanceof Error ? error.message : String(error) });
  }
}

async function addModelClosure(
  javaSdkRoot: string,
  modelSpecs: JavaModelSpec[],
  skipped: Array<{ file: string; reason: string }>,
) {
  const seenModels = new Set(modelSpecs.map((spec) => spec.name));
  for (let index = 0; index < modelSpecs.length; index += 1) {
    const spec = modelSpecs[index];
    if (spec.kind !== "interface") {
      continue;
    }
    for (const ref of spec.fields.flatMap((field) => extractModelRefs(field.javaType))) {
      if (seenModels.has(ref)) {
        continue;
      }
      seenModels.add(ref);
      await addModelSpec(javaSdkRoot, `${ref}.java`, modelSpecs, skipped);
    }
  }
}

function extractModelRefs(javaType: string): string[] {
  const normalized = javaType.trim();
  const listMatch = normalized.match(/^List<(.+)>$/);
  if (listMatch) {
    return extractModelRefs(listMatch[1]);
  }
  const mapMatch = normalized.match(/^Map<String,\s*(.+)>$/);
  if (mapMatch) {
    return extractModelRefs(mapMatch[1]);
  }
  if (normalized.startsWith("JsonNullable<") && normalized.endsWith(">")) {
    return extractModelRefs(normalized.slice("JsonNullable<".length, -1));
  }
  if (["String", "Integer", "Long", "Float", "Double", "BigDecimal", "Boolean", "Object", "File", "byte[]"].includes(normalized)) {
    return [];
  }
  return [normalized];
}

function generatedHeader(phase: "A" | "B") {
  return `// Generated from oceanengine/ad_open_sdk_java
// Phase: ${phase}
// Do not edit manually.
`;
}

function emitBarrel(modules: string[]) {
  return `${modules.map((modulePath) => `export * from "${modulePath}";`).join("\n")}\n`;
}
