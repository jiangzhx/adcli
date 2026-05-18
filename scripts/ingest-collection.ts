#!/usr/bin/env tsx

import { ingestCollection, readCollectionManifest } from "@/src/lib/builder/collection-ingest";

const args = process.argv.slice(2);
const manifestPath = args[0];

if (!manifestPath) {
  console.error("Usage: pnpm ingest:collection <manifest.json> [--limit N] [--concurrency N] [--source-id ID] [--changed-only]");
  process.exit(1);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});

async function main(): Promise<void> {
  const manifest = await readCollectionManifest(manifestPath as string);
  const result = await ingestCollection(manifest, {
    rootDir: process.cwd(),
    limit: numberOption("--limit"),
    maxConcurrency: numberOption("--concurrency"),
    sourceIds: stringOptions("--source-id"),
    changedOnly: booleanOption("--changed-only"),
  });

  console.log(`Collection: ${manifest.id}`);
  console.log(`Requested: ${result.requested}`);
  console.log(`Succeeded: ${result.succeeded}`);
  console.log(`Changed: ${result.changed}`);
  console.log(`Unchanged: ${result.unchanged}`);
  console.log(`Failed: ${result.failed.length}`);

  for (const failure of result.failed) {
    console.log(`- ${failure.source_id}: ${failure.error}`);
  }

  if (result.failed.length > 0) {
    process.exitCode = 1;
  }
}

function numberOption(name: string): number | undefined {
  const index = args.indexOf(name);
  if (index === -1) {
    return undefined;
  }

  const value = args[index + 1];
  if (!value || !/^[0-9]+$/.test(value)) {
    throw new Error(`${name} must be followed by a positive integer`);
  }

  return Number(value);
}

function stringOptions(name: string): string[] | undefined {
  const values: string[] = [];
  for (let index = 0; index < args.length; index += 1) {
    if (args[index] === name && args[index + 1]) {
      values.push(args[index + 1] as string);
    }
  }

  return values.length > 0 ? values : undefined;
}

function booleanOption(name: string): boolean {
  return args.includes(name);
}
