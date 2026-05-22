import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseGoApiSource, parseGoModelSource } from "./go-parser";
import { emitApiFile, emitModelModule } from "./typescript-emitter";
import type { ApiSpec, ModelSpec } from "./spec";

export interface GoPortWorkflowOptions {
  goSdkRoot: string;
  outputDir?: string;
  apiFiles?: string[];
  modelFiles?: string[];
}

export interface GoPortWorkflowResult {
  source: "go";
  sourceModule: "github.com/tencentad/marketing-api-go-sdk";
  sourceVersion: string;
  apis: number;
  models: number;
  skipped: Array<{ file: string; reason: string }>;
}

export async function runGoPortWorkflow(options: GoPortWorkflowOptions): Promise<GoPortWorkflowResult> {
  const goSdkRoot = resolve(options.goSdkRoot);
  const outputDir = resolve(options.outputDir ?? defaultSdkOutputDir());
  const apiFiles = options.apiFiles ?? (await listGoFiles(goSdkRoot, "pkg/api"));
  const modelFiles = options.modelFiles ?? (await listGoFiles(goSdkRoot, "pkg/model"));
  const sourceVersion = await readGoSdkVersion(goSdkRoot);
  const skipped: Array<{ file: string; reason: string }> = [];
  const apiSpecsByFile = new Map<string, ApiSpec[]>();
  const modelSpecsByName = new Map<string, ModelSpec>();

  await prepareOutputDir(outputDir);

  for (const file of apiFiles) {
    try {
      const namespace = file.startsWith("v3/") ? "V3" : "";
      apiSpecsByFile.set(file, parseGoApiSource(await readGoFile(goSdkRoot, "pkg/api", file), file, namespace));
    } catch (error) {
      skipped.push({ file: `pkg/api/${file}`, reason: error instanceof Error ? error.message : String(error) });
    }
  }

  for (const file of modelFiles) {
    try {
      const spec = parseGoModelSource(await readGoFile(goSdkRoot, "pkg/model", file), file);
      modelSpecsByName.set(spec.name, spec);
    } catch (error) {
      skipped.push({ file: `pkg/model/${file}`, reason: error instanceof Error ? error.message : String(error) });
    }
  }

  const apiSpecs = [...apiSpecsByFile.values()].flat();
  const modelSpecs = [...modelSpecsByName.values()];
  const result: GoPortWorkflowResult = {
    source: "go",
    sourceModule: "github.com/tencentad/marketing-api-go-sdk",
    sourceVersion,
    apis: apiSpecs.length,
    models: modelSpecs.length,
    skipped,
  };

  await Promise.all(
    [...apiSpecsByFile.entries()].map(([file, specs]) =>
      writeFile(
        join(outputDir, "apis", `${apiModuleName(file)}.ts`),
        `${generatedHeader()}\n${emitApiFile(specs, {
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
  await writeFile(join(outputDir, "apis.ts"), `${generatedHeader()}\n${emitBarrel([...apiSpecsByFile.keys()].map((file) => `./apis/${apiModuleName(file)}`))}`);
  await writeFile(join(outputDir, "models.ts"), `${generatedHeader()}\n${emitBarrel(modelSpecs.map((spec) => `./models/${spec.name}`))}`);
  await writeFile(join(outputDir, "runtime", "sdk-version.ts"), emitSdkVersion(sourceVersion));
  await writeFile(join(outputDir, "manifest.json"), `${JSON.stringify(result, null, 2)}\n`);

  return result;
}

function defaultSdkOutputDir() {
  return resolve(dirname(fileURLToPath(import.meta.url)), "../../../tencent-ads-marketing-api-sdk/src");
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

async function listGoFiles(goSdkRoot: string, root: "pkg/api" | "pkg/model") {
  const topLevel = (await readdir(join(goSdkRoot, root))).filter((file) => file.endsWith(".go")).sort();
  const v3Root = join(goSdkRoot, root, "v3");
  const v3 = (await readdir(v3Root).catch(() => []))
    .filter((file) => file.endsWith(".go"))
    .map((file) => `v3/${file}`)
    .sort();
  return [...topLevel, ...v3];
}

async function readGoFile(goSdkRoot: string, root: "pkg/api" | "pkg/model", file: string) {
  return readFile(join(goSdkRoot, root, file), "utf8");
}

async function readGoSdkVersion(goSdkRoot: string) {
  const tags = await readFile(join(goSdkRoot, ".git", "packed-refs"), "utf8").catch(() => "");
  const head = await readFile(join(goSdkRoot, ".git", "HEAD"), "utf8").catch(() => "");
  const headSha = head.trim();
  const tag = tags
    .split("\n")
    .map((line) => line.trim().split(" "))
    .find(([sha, ref]) => sha === headSha && ref?.startsWith("refs/tags/v"))?.[1]
    ?.replace("refs/tags/v", "");
  return tag ?? "1.7.84";
}

function apiModuleName(file: string) {
  const prefix = file.startsWith("v3/") ? "V3" : "";
  const base = file.replace(/^v3\//, "").replace(/^api_/, "").replace(/\.go$/, "");
  return `${prefix}${base
    .split("_")
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("")}Api`;
}

function generatedHeader() {
  return `// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
`;
}

function emitBarrel(modules: string[]) {
  return `${modules.map((modulePath) => `export * from "${modulePath}";`).join("\n")}\n`;
}

function emitSdkVersion(version: string) {
  return `${generatedHeader()}\nexport const SDK_VERSION = ${JSON.stringify(version)};\n`;
}
