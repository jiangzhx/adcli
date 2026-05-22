import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseGoApiSource, parseGoModelSource } from "./go-parser";
import { emitApiClass, emitModelModule } from "./typescript-emitter";
import type { ApiSpec, ModelSpec } from "./spec";

export interface GoPortWorkflowOptions {
  goSdkRoot: string;
  outputDir?: string;
  apiFiles?: string[];
  modelFiles?: string[];
}

export interface GoPortWorkflowResult {
  source: "go";
  sourceVersion: string;
  apis: number;
  models: number;
  skipped: Array<{ file: string; reason: string }>;
}

export async function runGoPortWorkflow(options: GoPortWorkflowOptions): Promise<GoPortWorkflowResult> {
  const goSdkRoot = resolve(options.goSdkRoot);
  const outputDir = resolve(options.outputDir ?? defaultSdkOutputDir());
  const apiFiles = options.apiFiles ?? (await listGoFiles(goSdkRoot, "api"));
  const modelFiles = options.modelFiles ?? (await listGoFiles(goSdkRoot, "models"));
  const sourceVersion = await readGoSdkVersion(goSdkRoot);
  const skipped: Array<{ file: string; reason: string }> = [];
  const apiSpecs: ApiSpec[] = [];
  const modelSpecs: ModelSpec[] = [];

  await prepareOutputDir(outputDir);

  for (const file of apiFiles) {
    try {
      apiSpecs.push(parseGoApiSource(await readGoFile(goSdkRoot, "api", file), file));
    } catch (error) {
      skipped.push({ file: `api/${file}`, reason: error instanceof Error ? error.message : String(error) });
    }
  }

  for (const file of modelFiles) {
    try {
      modelSpecs.push(parseGoModelSource(await readGoFile(goSdkRoot, "models", file), file));
    } catch (error) {
      skipped.push({ file: `models/${file}`, reason: error instanceof Error ? error.message : String(error) });
    }
  }

  const result: GoPortWorkflowResult = {
    source: "go",
    sourceVersion,
    apis: apiSpecs.length,
    models: modelSpecs.length,
    skipped,
  };

  await Promise.all(
    apiSpecs.map((spec) =>
      writeFile(
        join(outputDir, "apis", `${spec.className}.ts`),
        `${generatedHeader()}\n${emitApiClass(spec, {
          runtimePrefix: "../runtime",
          modelsModule: "../models",
        })}\n`,
      ),
    ),
  );
  await Promise.all(
    modelSpecs.map((spec) =>
      writeFile(join(outputDir, "models", `${spec.name}.ts`), `${generatedHeader()}\n${emitModelModule(spec)}\n`),
    ),
  );
  await writeFile(join(outputDir, "apis.ts"), `${generatedHeader()}\n${emitBarrel(apiSpecs.map((spec) => `./apis/${spec.className}`))}`);
  await writeFile(join(outputDir, "models.ts"), `${generatedHeader()}\n${emitBarrel(modelSpecs.map((spec) => `./models/${spec.name}`))}`);
  await writeFile(join(outputDir, "runtime", "sdk-version.ts"), emitSdkVersion(sourceVersion));
  await writeFile(join(outputDir, "manifest.json"), `${JSON.stringify(result, null, 2)}\n`);

  return result;
}

function defaultSdkOutputDir() {
  return resolve(dirname(fileURLToPath(import.meta.url)), "../../../oceanengine-ad-open-sdk/src");
}

async function prepareOutputDir(outputDir: string) {
  await mkdir(outputDir, { recursive: true });
  await Promise.all([
    rm(join(outputDir, "apis"), { recursive: true, force: true }),
    rm(join(outputDir, "models"), { recursive: true, force: true }),
    rm(join(outputDir, "apis.ts"), { force: true }),
    rm(join(outputDir, "models.ts"), { force: true }),
    rm(join(outputDir, "manifest.json"), { force: true }),
    rm(join(outputDir, "runtime", "sdk-version.ts"), { force: true }),
  ]);
  await mkdir(join(outputDir, "apis"), { recursive: true });
  await mkdir(join(outputDir, "models"), { recursive: true });
  await mkdir(join(outputDir, "runtime"), { recursive: true });
}

async function listGoFiles(goSdkRoot: string, kind: "api" | "models") {
  return (await readdir(join(goSdkRoot, kind))).filter((file) => file.endsWith(".go")).sort();
}

async function readGoFile(goSdkRoot: string, kind: "api" | "models", file: string) {
  return readFile(join(goSdkRoot, kind, file), "utf8");
}

async function readGoSdkVersion(goSdkRoot: string) {
  const source = await readFile(join(goSdkRoot, "config", "configuration.go"), "utf8");
  const match = source.match(/const\s+Version\s*=\s*"([^"]+)"/);
  if (!match) {
    throw new Error("Unable to parse Go SDK Version from config/configuration.go");
  }
  return match[1];
}

function generatedHeader() {
  return `// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.
`;
}

function emitBarrel(modules: string[]) {
  return `${modules.map((modulePath) => `export * from "${modulePath}";`).join("\n")}\n`;
}

function emitSdkVersion(version: string) {
  return `${generatedHeader()}\nexport const SDK_VERSION = ${JSON.stringify(version)};\n`;
}
