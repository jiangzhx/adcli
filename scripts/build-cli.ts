#!/usr/bin/env bun

import { spawn } from "node:child_process";
import { chmod, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const outdir = path.join(rootDir, "dist");
const outfile = path.join(outdir, "cli.js");

await mkdir(outdir, { recursive: true });

await run("bun", [
  "build",
  path.join(rootDir, "src", "cli.ts"),
  "--target=node",
  "--format=esm",
  "--outfile",
  outfile,
]);

const bundled = await readFile(outfile, "utf8");
const normalized = bundled.replace(/^#!.*\n/, "");
await writeFile(outfile, `#!/usr/bin/env node\n${normalized}`, "utf8");
await chmod(outfile, 0o755);

console.log(`Built ${path.relative(rootDir, outfile)}`);

async function run(command: string, args: string[]): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    const child = spawn(command, args, { stdio: "inherit" });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${command} ${args.join(" ")} exited with ${code}`));
    });
  });
}
