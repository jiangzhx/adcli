#!/usr/bin/env bun

import { ingestSource } from "@/src/lib/builder/ingest";
import { readSourceRecipe } from "@/src/lib/builder/store";

const recipePath = process.argv[2];

if (!recipePath) {
  console.error("Usage: bun run ingest:source <recipe.json>");
  process.exit(1);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});

async function main(): Promise<void> {
  const recipe = await readSourceRecipe(recipePath as string);
  const result = await ingestSource({
    recipe,
    rootDir: process.cwd(),
  });

  console.log(`Ingested ${result.sourceId}`);
  console.log(`Blocks: ${result.blockCount}`);
  console.log(`Output: ${result.targetDir}`);
}
