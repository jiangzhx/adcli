import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import type { SourceArtifacts } from "./artifacts";
import { parseSourceRecipe, type SourceRecipe } from "./recipe";

export async function readSourceRecipe(recipePath: string): Promise<SourceRecipe> {
  const raw = await readFile(recipePath, "utf8");
  return parseSourceRecipe(JSON.parse(raw));
}

export async function writeSourceArtifacts(
  rootDir: string,
  artifacts: SourceArtifacts,
): Promise<string> {
  const targetDir = path.join(
    rootDir,
    "data",
    "sources",
    artifacts.source.platform,
    artifacts.source.id,
  );

  await mkdir(targetDir, { recursive: true });
  await Promise.all([
    writeJson(path.join(targetDir, "source.json"), artifacts.source),
    writeFile(path.join(targetDir, "raw.html"), artifacts.rawHtml, "utf8"),
    writeFile(path.join(targetDir, "cleaned.md"), artifacts.cleanedMarkdown, "utf8"),
    writeJson(path.join(targetDir, "blocks.json"), artifacts.blocks),
  ]);

  return targetDir;
}

async function writeJson(filePath: string, value: unknown): Promise<void> {
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}
