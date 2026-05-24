import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

import type { DiscoverInputsOptions, DiscoverInputsResult, PortInputEntry } from "./types";

export async function discoverInputs(options: DiscoverInputsOptions): Promise<DiscoverInputsResult> {
  const include = options.include?.length ? options.include : ["**/*"];
  const outputExtension = normalizeExtension(options.outputExtension ?? ".ts");
  const inputStat = await stat(options.input);
  const sourceRoot = options.sourceRoot
    ? path.resolve(options.sourceRoot)
    : inputStat.isDirectory()
      ? path.resolve(options.input)
      : path.dirname(path.resolve(options.input));
  const sourcePaths = inputStat.isDirectory()
    ? await listFiles(options.input)
    : [options.input];

  const discovered = (
    await Promise.all(
      sourcePaths
        .filter(filePath => matchesAny(path.relative(sourceRoot, filePath), include))
        .map(filePath => toEntry(filePath, sourceRoot, options.outputRoot, outputExtension)),
    )
  ).sort((left, right) => left.sourcePath.localeCompare(right.sourcePath));

  const queued: PortInputEntry[] = [];
  const skipped: PortInputEntry[] = [];
  for (const entry of discovered) {
    if (!options.overwrite && options.skipExisting !== false && (await exists(entry.outPath))) {
      skipped.push(entry);
    } else {
      queued.push(entry);
    }
  }

  return { discovered, queued, skipped };
}

async function listFiles(root: string): Promise<string[]> {
  const entries = await readdir(root, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async entry => {
      const fullPath = path.join(root, entry.name);
      if (entry.isDirectory()) {
        return listFiles(fullPath);
      }
      if (entry.isFile()) {
        return [fullPath];
      }
      return [];
    }),
  );
  return files.flat();
}

async function toEntry(sourcePath: string, sourceRoot: string, outputRoot: string, outputExtension: string): Promise<PortInputEntry> {
  const relativePath = path.relative(sourceRoot, sourcePath);
  return {
    sourcePath,
    outPath: path.join(outputRoot, replaceExtension(relativePath, outputExtension)),
    relativePath,
    loc: await countLines(sourcePath),
  };
}

async function countLines(filePath: string): Promise<number> {
  const source = await readFile(filePath, "utf8");
  if (source.length === 0) {
    return 0;
  }
  return source.endsWith("\n") ? source.split("\n").length - 1 : source.split("\n").length;
}

function replaceExtension(filePath: string, outputExtension: string): string {
  const parsed = path.parse(filePath);
  return path.join(parsed.dir, `${parsed.name}${outputExtension}`);
}

function normalizeExtension(extension: string): string {
  return extension.startsWith(".") ? extension : `.${extension}`;
}

function matchesAny(relativePath: string, patterns: string[]): boolean {
  const normalized = toPosixPath(relativePath);
  return patterns.some(pattern => matchesPattern(normalized, pattern));
}

function matchesPattern(relativePath: string, pattern: string): boolean {
  const normalizedPattern = toPosixPath(pattern);
  if (normalizedPattern.startsWith("**/*")) {
    return relativePath.endsWith(normalizedPattern.slice(4));
  }
  if (!normalizedPattern.includes("*")) {
    return relativePath === normalizedPattern || relativePath.endsWith(`/${normalizedPattern}`);
  }
  return wildcardToRegExp(normalizedPattern).test(relativePath);
}

function wildcardToRegExp(pattern: string): RegExp {
  const escaped = pattern
    .replace(/[.+^${}()|[\]\\]/g, "\\$&")
    .replace(/\*\*/g, ".*")
    .replace(/\*/g, "[^/]*");
  return new RegExp(`^${escaped}$`);
}

function toPosixPath(filePath: string): string {
  return filePath.split(path.sep).join("/");
}

async function exists(filePath: string): Promise<boolean> {
  try {
    await stat(filePath);
    return true;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return false;
    }
    throw error;
  }
}
