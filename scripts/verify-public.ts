#!/usr/bin/env tsx

import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

async function exists(filePath: string): Promise<boolean> {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main(): Promise<void> {
  const publicRoot = path.join(process.cwd(), "public");
  const llmsPath = path.join(publicRoot, "llms.txt");
  const fullPath = path.join(publicRoot, "llms-full.txt");

  for (const filePath of [llmsPath, fullPath]) {
    if (!(await exists(filePath))) {
      throw new Error(`missing public artifact: ${path.relative(process.cwd(), filePath)}`);
    }
  }

  const llms = await readFile(llmsPath, "utf8");
  const full = await readFile(fullPath, "utf8");
  const platforms = (await readdir(publicRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));

  for (const platform of platforms) {
    const manifestPath = path.join(publicRoot, platform, "manifest.json");
    if (!(await exists(manifestPath))) {
      continue;
    }

    if (!llms.includes(`## ${platform}`)) {
      throw new Error(`public/llms.txt is missing platform section: ${platform}`);
    }

    if (!full.includes(`## ${platform}`)) {
      throw new Error(`public/llms-full.txt is missing platform section: ${platform}`);
    }

    const manifest = JSON.parse(await readFile(manifestPath, "utf8")) as {
      documents?: Array<{ public_path?: string }>;
    };

    for (const document of manifest.documents ?? []) {
      if (!document.public_path) {
        throw new Error(`manifest ${platform} has a document without public_path`);
      }

      const markdownPath = path.join(publicRoot, document.public_path);
      if (!(await exists(markdownPath))) {
        throw new Error(`missing public markdown: ${document.public_path}`);
      }
    }
  }

  console.log(JSON.stringify({ platforms }, null, 2));
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
