#!/usr/bin/env bun

import { discoverCollection, readCollectionRecipe, writeCollectionManifest } from "@/src/lib/builder/discover";

const recipePath = process.argv[2];

if (!recipePath) {
  console.error("Usage: bun run discover:sources <collection-recipe.json>");
  process.exit(1);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});

async function main(): Promise<void> {
  const recipe = await readCollectionRecipe(recipePath as string);
  const manifest = await discoverCollection(recipe);
  const targetDir = await writeCollectionManifest(process.cwd(), manifest);

  console.log(`Discovered collection ${manifest.id}`);
  console.log(`Documents: ${manifest.items.length}`);
  console.log(`Output: ${targetDir}`);
}
