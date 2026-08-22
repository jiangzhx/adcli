import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

import { parseGoApiSource, parseGoModelSource } from "./go-parser";
import { emitApiFile, emitBarrel, emitModelFile } from "./typescript-emitter";
import type { KuaishouApiFileSpec, KuaishouModelFileSpec, KuaishouModelStructSpec } from "./spec";
import { buildTypeRegistry } from "./type-registry";

const RUNTIME_MODEL_FILES = new Set(["request.go", "response.go", "types.go", "doc.go"]);

export interface KuaishouGoPortWorkflowOptions {
  goSdkRoot: string;
  outputDir: string;
}

export interface KuaishouGoPortWorkflowResult {
  source: "go";
  sourceModule: "github.com/bububa/kwai-marketing-api";
  sourceVersion: string;
  apis: number;
  models: number;
  skipped: Array<{ file: string; reason: string }>;
}

export async function runGoPortWorkflow(options: KuaishouGoPortWorkflowOptions): Promise<KuaishouGoPortWorkflowResult> {
  const goSdkRoot = resolve(options.goSdkRoot);
  if (!options.outputDir) {
    throw new Error("outputDir is required; pass the sibling SDK checkout src directory");
  }
  const outputDir = resolve(options.outputDir);
  const modelFiles = await listGoFiles(goSdkRoot, "model");
  const apiFiles = await listGoFiles(goSdkRoot, "api");
  const skipped: Array<{ file: string; reason: string }> = [];
  const modelSpecs: KuaishouModelFileSpec[] = [];
  const apiSpecs: KuaishouApiFileSpec[] = [];
  const modelsByPackage = new Map<string, KuaishouModelStructSpec[]>();

  await prepareGeneratedDirs(outputDir);

  for (const file of modelFiles) {
    if (RUNTIME_MODEL_FILES.has(file.split("/").at(-1) ?? "")) {
      continue;
    }
    try {
      const spec = parseGoModelSource(await readFile(join(goSdkRoot, "model", file), "utf8"), `model/${file}`);
      modelSpecs.push(spec);
      const packageKey = dirname(file) === "." ? spec.packageName : dirname(file);
      modelsByPackage.set(packageKey, [...(modelsByPackage.get(packageKey) ?? []), ...spec.structs]);
    } catch (error) {
      skipped.push({ file: `model/${file}`, reason: error instanceof Error ? error.message : String(error) });
    }
  }

  for (const file of apiFiles) {
    if (file.endsWith("doc.go") || file.endsWith("_test.go")) {
      continue;
    }
    try {
      const source = await readFile(join(goSdkRoot, "api", file), "utf8");
      const modelImport = source.match(/github.com\/bububa\/kwai-marketing-api\/model\/([\w./]+)/)?.[1];
      const relatedModels = modelImport ? (modelsByPackage.get(modelImport) ?? []) : [];
      const spec = parseGoApiSource(source, `api/${file}`, relatedModels);
      apiSpecs.push(spec);
    } catch (error) {
      skipped.push({ file: `api/${file}`, reason: error instanceof Error ? error.message : String(error) });
    }
  }

  const typeRegistry = buildTypeRegistry(modelSpecs);
  await Promise.all(
    modelSpecs.map(async (spec) => {
      const target = join(outputDir, spec.relativePath.replace(/\.go$/, ".ts"));
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, emitModelFile(spec, { typeRegistry }));
    }),
  );
  await Promise.all(
    apiSpecs.map(async (spec) => {
      const target = join(outputDir, spec.relativePath.replace(/\.go$/, ".ts"));
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, emitApiFile(spec));
    }),
  );
  await writeBarrels(outputDir, "model", modelSpecs.map((spec) => spec.relativePath.replace(/^model\//, "").replace(/\.go$/, "")));
  await writeBarrels(outputDir, "api", apiSpecs.map((spec) => spec.relativePath.replace(/^api\//, "").replace(/\.go$/, "")));

  const result: KuaishouGoPortWorkflowResult = {
    source: "go",
    sourceModule: "github.com/bububa/kwai-marketing-api",
    sourceVersion: await readGoSdkVersion(goSdkRoot),
    apis: apiSpecs.reduce((sum, spec) => sum + spec.functions.length, 0),
    models: modelSpecs.reduce((sum, spec) => sum + spec.structs.length, 0),
    skipped,
  };
  await writeFile(join(outputDir, "manifest.json"), `${JSON.stringify(result, null, 2)}\n`);
  return result;
}

async function prepareGeneratedDirs(outputDir: string) {
  await rm(join(outputDir, "api"), { recursive: true, force: true });
  const modelDir = join(outputDir, "model");
  const entries = await readdir(modelDir, { withFileTypes: true }).catch(() => []);
  await Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => rm(join(modelDir, entry.name), { recursive: true, force: true })),
  );
}

async function writeBarrels(outputDir: string, root: "api" | "model", files: string[]) {
  const byDir = new Map<string, string[]>();
  for (const file of files) {
    const dir = dirname(file);
    const base = `./${file.split("/").at(-1)}`;
    byDir.set(dir, [...(byDir.get(dir) ?? []), base]);
  }
  for (const [dir, modules] of byDir) {
    if (root === "model" && dir === ".") {
      continue;
    }
    const target = join(outputDir, root, dir === "." ? "index.ts" : join(dir, "index.ts"));
    await mkdir(dirname(target), { recursive: true });
    const childDirs = [...byDir.keys()].filter((child) => child !== dir && (dir === "." ? !child.includes("/") : child.startsWith(`${dir}/`) && child.slice(dir.length + 1).split("/").length === 1));
    const exports = [...modules.sort(), ...childDirs.map((child) => `./${child.split("/").at(-1)}`)];
    await writeFile(target, emitBarrel([...new Set(exports)]));
  }
}

async function listGoFiles(goSdkRoot: string, root: "api" | "model"): Promise<string[]> {
  const files: string[] = [];
  async function walk(dir: string, prefix: string) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const next = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        await walk(join(dir, entry.name), next);
        continue;
      }
      if (entry.name.endsWith(".go")) {
        files.push(next);
      }
    }
  }
  await walk(join(goSdkRoot, root), "");
  return files.sort();
}

async function readGoSdkVersion(goSdkRoot: string) {
  const head = await readFile(join(goSdkRoot, ".git", "HEAD"), "utf8").catch(() => "");
  if (head.startsWith("ref: refs/tags/")) {
    return head.replace("ref: refs/tags/", "").trim().replace(/^v/, "");
  }
  const packed = await readFile(join(goSdkRoot, ".git", "packed-refs"), "utf8").catch(() => "");
  const tag = packed
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.includes("refs/tags/v"))
    ?.split("refs/tags/v")[1];
  return tag ?? "1.10.1";
}

