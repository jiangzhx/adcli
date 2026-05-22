import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const packageRoot = new URL("..", import.meta.url).pathname;
const distDir = join(packageRoot, "dist");

await rm(distDir, { recursive: true, force: true });

const result = spawnSync("tsc", ["-p", "tsconfig.build.json"], {
  cwd: packageRoot,
  stdio: "inherit",
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

await rewriteJavaScriptImports(distDir);

async function rewriteJavaScriptImports(dir: string) {
  const entries = await readdir(dir, { withFileTypes: true });
  await Promise.all(
    entries.map(async (entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) {
        await rewriteJavaScriptImports(path);
        return;
      }
      if (!entry.isFile() || !entry.name.endsWith(".js")) {
        return;
      }
      const source = await readFile(path, "utf8");
      const rewritten = source.replace(
        /\b(from\s+["'])(\.\.?\/[^"']+)(["'])|(\bimport\s*\(\s*["'])(\.\.?\/[^"']+)(["']\s*\))/g,
        (match, fromPrefix, fromSpecifier, fromSuffix, importPrefix, importSpecifier, importSuffix) => {
          if (fromSpecifier) {
            return `${fromPrefix}${withJavaScriptExtension(fromSpecifier)}${fromSuffix}`;
          }
          return `${importPrefix}${withJavaScriptExtension(importSpecifier)}${importSuffix}`;
        },
      );
      if (rewritten !== source) {
        await writeFile(path, rewritten);
      }
    }),
  );
}

function withJavaScriptExtension(specifier: string) {
  if (specifier.endsWith(".js") || specifier.endsWith(".json")) {
    return specifier;
  }
  return `${specifier}.js`;
}
