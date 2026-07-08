#!/usr/bin/env bun

import { discoverCollections, readCollectionRecipes, writeCollectionManifest } from "@/src/lib/builder/discover";

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
  const recipes = await readCollectionRecipes(recipePath as string);
  const manifests = await discoverCollections(recipes);

  for (const manifest of manifests) {
    const targetDir = await writeCollectionManifest(process.cwd(), manifest);

    console.log(`Discovered platform ${manifest.platform}`);
    console.log(`Sources: ${manifest.sources.length}`);
    console.log(`Documents: ${manifest.items.length}`);
    console.log(`Output: ${targetDir}`);
  }
}
