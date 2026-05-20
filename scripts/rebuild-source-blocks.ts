#!/usr/bin/env bun

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { extractBlocksFromHtml } from "@/src/lib/builder/html-to-blocks";

const [platform] = process.argv.slice(2);

if (!platform) {
  console.error("Usage: bun run rebuild:source-blocks <platform>");
  process.exit(1);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});

async function main(): Promise<void> {
  const baseDir = path.join(process.cwd(), "data", "sources", platform as string);
  const entries = await readdir(baseDir, { withFileTypes: true });
  const sourceDirs = entries
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => entry.name)
    .sort();

  let rebuilt = 0;
  let referencedBlocks = 0;
  let references = 0;

  for (const sourceDirName of sourceDirs) {
    const sourceDir = path.join(baseDir, sourceDirName);
    const source = JSON.parse(await readFile(path.join(sourceDir, "source.json"), "utf8"));
    const rawHtml = await readFile(path.join(sourceDir, "raw.html"), "utf8");
    const extracted = extractBlocksFromHtml({
      html: rawHtml,
      sourceId: source.id,
      sourceUrl: source.url,
      titleHint: source.title,
    });

    await Promise.all([
      writeFile(path.join(sourceDir, "cleaned.md"), extracted.cleanedMarkdown, "utf8"),
      writeFile(path.join(sourceDir, "blocks.json"), `${JSON.stringify(extracted.blocks, null, 2)}\n`, "utf8"),
    ]);

    rebuilt += 1;
    for (const block of extracted.blocks) {
      if (block.references && block.references.length > 0) {
        referencedBlocks += 1;
        references += block.references.length;
      }
    }
  }

  console.log(JSON.stringify({ platform, rebuilt, referencedBlocks, references }, null, 2));
}
