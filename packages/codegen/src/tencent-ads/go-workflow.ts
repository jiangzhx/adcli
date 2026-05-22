import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseGoApiSource, parseGoModelSource } from "./go-parser";
import { emitIndexFile, emitRuntimeFiles } from "./runtime-emitter";
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
  configurations: {
    v1: RuntimeConfigurationSpec;
    v3: RuntimeConfigurationSpec;
  };
  apis: number;
  models: number;
  skipped: Array<{ file: string; reason: string }>;
}

interface RuntimeConfigurationSpec {
  basePath: string;
  userAgent: string;
}

export async function runGoPortWorkflow(options: GoPortWorkflowOptions): Promise<GoPortWorkflowResult> {
  const goSdkRoot = resolve(options.goSdkRoot);
  const outputDir = resolve(options.outputDir ?? defaultSdkOutputDir());
  const apiFiles = options.apiFiles ?? (await listGoFiles(goSdkRoot, "pkg/api"));
  const modelFiles = options.modelFiles ?? (await listGoFiles(goSdkRoot, "pkg/model"));
  const sourceVersion = await readGoSdkVersion(goSdkRoot);
  const configurations = {
    v1: parseGoConfiguration(await readFile(join(goSdkRoot, "pkg/config/configuration.go"), "utf8")),
    v3: parseGoConfiguration(await readFile(join(goSdkRoot, "pkg/config/v3/configuration.go"), "utf8")),
  };
  const skipped: Array<{ file: string; reason: string }> = [];
  const apiSpecsByFile = new Map<string, ApiSpec[]>();
  const modelSpecsByFile = new Map<string, ModelSpec>();

  await prepareOutputDir(outputDir);

  for (const file of apiFiles) {
    try {
      const basePath = file.startsWith("v3/") ? configurations.v3.basePath : configurations.v1.basePath;
      apiSpecsByFile.set(
        file,
        parseGoApiSource(await readGoFile(goSdkRoot, "pkg/api", file), file, "").map((spec) => ({ ...spec, basePath })),
      );
    } catch (error) {
      skipped.push({ file: `pkg/api/${file}`, reason: error instanceof Error ? error.message : String(error) });
    }
  }

  for (const file of modelFiles) {
    try {
      const spec = parseGoModelSource(await readGoFile(goSdkRoot, "pkg/model", file), file);
      modelSpecsByFile.set(file, spec);
    } catch (error) {
      skipped.push({ file: `pkg/model/${file}`, reason: error instanceof Error ? error.message : String(error) });
    }
  }

  const apiSpecs = [...apiSpecsByFile.values()].flat();
  const modelSpecs = [...modelSpecsByFile.values()];
  const result: GoPortWorkflowResult = {
    source: "go",
    sourceModule: "github.com/tencentad/marketing-api-go-sdk",
    sourceVersion,
    configurations,
    apis: apiSpecs.length,
    models: modelSpecs.length,
    skipped,
  };

  await Promise.all(
    [...apiSpecsByFile.entries()].map(([file, specs]) =>
      writeFile(
        join(outputDir, "api", ...sourceModulePath(file)),
        `${generatedHeader(`pkg/api/${file}`)}\n${emitApiFile(specs, {
          clientModule: "./client",
          configurationModules: file.startsWith("v3/")
            ? { v1: "../../config/configuration", v3: "../../config/v3/configuration" }
            : { v1: "../config/configuration", v3: "../config/v3/configuration" },
          modelsModule: file.startsWith("v3/") ? "../../model/v3/index" : "../model/index",
        })}\n`,
      ),
    ),
  );
  await Promise.all(
    [...modelSpecsByFile.entries()].map(([file, spec]) =>
      writeFile(
        join(outputDir, "model", ...sourceModulePath(file)),
        `${generatedHeader(`pkg/model/${file}`)}\n${emitModelModule(spec, { modelsModule: file.startsWith("v3/") ? "../v3/index" : "../model/index" })}\n`,
      ),
    ),
  );
  const v1ApiFiles = [...apiSpecsByFile.keys()].filter((file) => !file.startsWith("v3/"));
  const v3ApiFiles = [...apiSpecsByFile.keys()].filter((file) => file.startsWith("v3/"));
  const v1ModelFiles = [...modelSpecsByFile.entries()].filter(([file]) => !file.startsWith("v3/"));
  const v3ModelFiles = [...modelSpecsByFile.entries()].filter(([file]) => file.startsWith("v3/"));
  const v1ModelNames = new Set(v1ModelFiles.map(([, spec]) => spec.name));
  const v3ModelNames = new Set(v3ModelFiles.map(([, spec]) => spec.name));
  const v3ExternalModelNames = [
    ...new Set(
      v3ModelFiles
        .flatMap(([, spec]) => collectModelTypeNames(spec))
        .filter((name) => !v3ModelNames.has(name) && v1ModelNames.has(name)),
    ),
  ].sort();
  await writeFile(join(outputDir, "api", "index.ts"), `${generatedHeader("pkg/api")}\n${emitBarrel(["./client", ...v1ApiFiles.map((file) => `./${moduleBaseName(file)}`)])}`);
  await writeFile(join(outputDir, "api", "v3", "index.ts"), `${generatedHeader("pkg/api/v3")}\n${emitBarrel(["./client", ...v3ApiFiles.map((file) => `./${moduleBaseName(file)}`)])}`);
  await writeFile(join(outputDir, "model", "index.ts"), `${generatedHeader("pkg/model")}\n${emitBarrel(v1ModelFiles.map(([file]) => `./${moduleBaseName(file)}`))}`);
  await writeFile(
    join(outputDir, "model", "v3", "index.ts"),
    `${generatedHeader("pkg/model/v3")}\n${emitBarrel(v3ModelFiles.map(([file]) => `./${moduleBaseName(file)}`))}${emitTypeReExports(v3ExternalModelNames, "../index")}`,
  );
  await Promise.all(
    Object.entries(emitRuntimeFiles({ sourceVersion, configurations })).map(async ([file, source]) => {
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
  return resolve(dirname(fileURLToPath(import.meta.url)), "../../../tencent-ads-marketing-api-sdk/src");
}

async function prepareOutputDir(outputDir: string) {
  await mkdir(outputDir, { recursive: true });
  await Promise.all([
    rm(join(outputDir, "apis"), { recursive: true, force: true }),
    rm(join(outputDir, "models"), { recursive: true, force: true }),
    rm(join(outputDir, "api"), { recursive: true, force: true }),
    rm(join(outputDir, "model"), { recursive: true, force: true }),
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
  await mkdir(join(outputDir, "api", "v3"), { recursive: true });
  await mkdir(join(outputDir, "model"), { recursive: true });
  await mkdir(join(outputDir, "model", "v3"), { recursive: true });
  await mkdir(join(outputDir, "config"), { recursive: true });
  await mkdir(join(outputDir, "config", "v3"), { recursive: true });
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

function sourceModulePath(file: string) {
  const moduleName = `${moduleBaseName(file)}.ts`;
  return file.startsWith("v3/") ? ["v3", moduleName] : [moduleName];
}

function moduleBaseName(file: string) {
  return file.replace(/^v3\//, "").replace(/\.go$/, "");
}

function generatedHeader(sourcePath: string) {
  return `// Generated from tencentad/marketing-api-go-sdk ${sourcePath}
// Do not edit manually.
`;
}

function parseGoConfiguration(source: string): RuntimeConfigurationSpec {
  return {
    basePath: extractGoStringLiteral(source, "BasePath"),
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

function emitBarrel(modules: string[]) {
  return `${modules.map((modulePath) => `export * from "${modulePath}";`).join("\n")}\n`;
}

function emitTypeReExports(names: string[], modulePath: string) {
  if (names.length === 0) {
    return "";
  }
  return `${names.map((name) => `export type { ${name} } from "${modulePath}";`).join("\n")}\n`;
}

function collectModelTypeNames(spec: ModelSpec): string[] {
  if (spec.kind === "enum") {
    return [];
  }
  if (spec.kind === "alias") {
    return extractModelTypeNames(spec.javaType);
  }
  return spec.fields.flatMap((field) => extractModelTypeNames(field.javaType));
}

function extractModelTypeNames(javaType: string): string[] {
  const normalized = javaType.trim();
  const listMatch = normalized.match(/^List<(.+)>$/);
  if (listMatch) {
    return extractModelTypeNames(listMatch[1]);
  }
  const mapMatch = normalized.match(/^Map<String,\s*(.+)>$/);
  if (mapMatch) {
    return extractModelTypeNames(mapMatch[1]);
  }
  if (["String", "Integer", "Long", "LongString", "Float", "Double", "Boolean", "Object", "File", "byte[]"].includes(normalized)) {
    return [];
  }
  return [normalized];
}
