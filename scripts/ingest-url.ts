#!/usr/bin/env bun

import { readFile } from "node:fs/promises";
import path from "node:path";

import { ingestSource } from "@/src/lib/builder/ingest";
import {
  buildSourceRecipeFromUrl,
  formatIngestUrlSummary,
  parseIngestUrlArgs,
} from "@/src/lib/builder/ingest-url";
import type { SourceMetadata } from "@/src/lib/builder/artifacts";

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});

async function main(): Promise<void> {
  const args = parseIngestUrlArgs(process.argv.slice(2));
  const recipe = buildSourceRecipeFromUrl(args);
  const result = await ingestSource({
    recipe,
    rootDir: process.cwd(),
  });

  const source = JSON.parse(
    await readFile(path.join(result.targetDir, "source.json"), "utf8"),
  ) as SourceMetadata;
  const cleaned = (await readFile(path.join(result.targetDir, "cleaned.md"), "utf8")).trim();

  if (source.title === "Untitled Source") {
    throw new Error("failed to extract source title from page");
  }
  if (result.blockCount === 0 || cleaned.length === 0) {
    throw new Error("failed to extract usable page content");
  }

  console.log(formatIngestUrlSummary({
    sourceId: result.sourceId,
    sourceUrl: recipe.url,
    title: source.title,
    blockCount: result.blockCount,
    cleanedLength: cleaned.length,
    targetDir: result.targetDir,
  }));
}
