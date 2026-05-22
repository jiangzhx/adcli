import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseGoApiSource, parseGoModelSource } from "./go-parser";
import { emitIndexFile, emitRuntimeFiles } from "./runtime-emitter";
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
  sourceModule: "github.com/oceanengine/ad_open_sdk_go";
  sourceVersion: string;
  configuration: RuntimeConfigurationSpec;
  apis: number;
  models: number;
  skipped: Array<{ file: string; reason: string }>;
}

interface RuntimeConfigurationSpec {
  host: string;
  scheme: string;
  userAgent: string;
}

export async function runGoPortWorkflow(options: GoPortWorkflowOptions): Promise<GoPortWorkflowResult> {
  const goSdkRoot = resolve(options.goSdkRoot);
  const outputDir = resolve(options.outputDir ?? defaultSdkOutputDir());
  const apiFiles = options.apiFiles ?? (await listGoFiles(goSdkRoot, "api"));
  const modelFiles = options.modelFiles ?? (await listGoFiles(goSdkRoot, "models"));
  const configurationSource = await readFile(join(goSdkRoot, "config", "configuration.go"), "utf8");
  const sourceVersion = readGoSdkVersion(configurationSource);
  const configuration = parseGoConfiguration(configurationSource);
  const skipped: Array<{ file: string; reason: string }> = [];
  const apiSpecsByFile = new Map<string, ApiSpec>();
  const modelSpecsByFile = new Map<string, ModelSpec>();

  await prepareOutputDir(outputDir);

  for (const file of apiFiles) {
    try {
      apiSpecsByFile.set(file, parseGoApiSource(await readGoFile(goSdkRoot, "api", file), file));
    } catch (error) {
      skipped.push({ file: `api/${file}`, reason: error instanceof Error ? error.message : String(error) });
    }
  }

  for (const file of modelFiles) {
    try {
      modelSpecsByFile.set(file, parseGoModelSource(await readGoFile(goSdkRoot, "models", file), file));
    } catch (error) {
      skipped.push({ file: `models/${file}`, reason: error instanceof Error ? error.message : String(error) });
    }
  }

  const apiSpecs = [...apiSpecsByFile.values()];
  const modelSpecs = [...modelSpecsByFile.values()];
  const result: GoPortWorkflowResult = {
    source: "go",
    sourceModule: "github.com/oceanengine/ad_open_sdk_go",
    sourceVersion,
    configuration,
    apis: apiSpecs.length,
    models: modelSpecs.length,
    skipped,
  };

  await Promise.all(
    [...apiSpecsByFile.entries()].map(([file, spec]) =>
      writeFile(
        join(outputDir, "api", `${moduleBaseName(file)}.ts`),
        `${generatedHeader(`api/${file}`)}\n${emitApiClass(spec, {
          clientModule: "./client",
          modelsModule: "../models/index",
        })}\n`,
      ),
    ),
  );
  await Promise.all(
    [...modelSpecsByFile.entries()].map(([file, spec]) =>
      writeFile(
        join(outputDir, "models", `${moduleBaseName(file)}.ts`),
        `${generatedHeader(`models/${file}`)}\n${emitModelModule(spec, { modelsModule: "../models/index" })}\n`,
      ),
    ),
  );
  await writeFile(
    join(outputDir, "api", "index.ts"),
    `${generatedHeader("api")}\n${emitBarrel(["./client", "./api_common", ...[...apiSpecsByFile.keys()].map((file) => `./${moduleBaseName(file)}`)])}`,
  );
  await writeFile(
    join(outputDir, "models", "index.ts"),
    `${generatedHeader("models")}\n${emitBarrel([...modelSpecsByFile.keys()].map((file) => `./${moduleBaseName(file)}`))}`,
  );
  await Promise.all(
    Object.entries(emitRuntimeFiles({ sourceVersion, configuration })).map(async ([file, source]) => {
      const target = join(outputDir, file);
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, source);
    }),
  );
  await writeFile(join(outputDir, "index.ts"), emitIndexFile());
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
    rm(join(outputDir, "api"), { recursive: true, force: true }),
    rm(join(outputDir, "config"), { recursive: true, force: true }),
    rm(join(outputDir, "apis.ts"), { force: true }),
    rm(join(outputDir, "models.ts"), { force: true }),
    rm(join(outputDir, "api.ts"), { force: true }),
    rm(join(outputDir, "model.ts"), { force: true }),
    rm(join(outputDir, "index.ts"), { force: true }),
    rm(join(outputDir, "manifest.json"), { force: true }),
    rm(join(outputDir, "runtime"), { recursive: true, force: true }),
  ]);
  await mkdir(join(outputDir, "api"), { recursive: true });
  await mkdir(join(outputDir, "models"), { recursive: true });
  await mkdir(join(outputDir, "config"), { recursive: true });
}

async function listGoFiles(goSdkRoot: string, kind: "api" | "models") {
  return (await readdir(join(goSdkRoot, kind))).filter((file) => shouldParseGoFile(kind, file)).sort();
}

async function readGoFile(goSdkRoot: string, kind: "api" | "models", file: string) {
  return readFile(join(goSdkRoot, kind, file), "utf8");
}

function readGoSdkVersion(source: string) {
  const match = source.match(/const\s+Version\s*=\s*"([^"]+)"/);
  if (!match) {
    throw new Error("Unable to parse Go SDK Version from config/configuration.go");
  }
  return match[1];
}

function parseGoConfiguration(source: string): RuntimeConfigurationSpec {
  return {
    host: extractGoStringLiteral(source, "Host"),
    scheme: extractGoStringLiteral(source, "Scheme"),
    userAgent: extractGoStringLiteral(source, "UserAgent"),
  };
}

function extractGoStringLiteral(source: string, fieldName: string) {
  const match = source.match(new RegExp(`${fieldName}:\\s+"([^"]+)"`));
  if (!match) {
    throw new Error(`Unable to parse ${fieldName} from Go configuration`);
  }
  return match[1];
}

function shouldParseGoFile(kind: "api" | "models", file: string) {
  if (!file.endsWith(".go")) {
    return false;
  }
  if (kind === "api") {
    return file.startsWith("api_") && file !== "api_common.go";
  }
  return true;
}

function moduleBaseName(file: string) {
  return file.replace(/\.go$/, "");
}

function generatedHeader(sourcePath: string) {
  return `// Generated from oceanengine/ad_open_sdk_go ${sourcePath}
// Do not edit manually.
`;
}

function emitBarrel(modules: string[]) {
  return `${modules.map((modulePath) => `export * from "${modulePath}";`).join("\n")}\n`;
}
