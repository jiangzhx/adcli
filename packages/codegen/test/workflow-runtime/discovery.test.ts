import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { discoverInputs } from "../../src/workflow-runtime/discovery";

test("discoverInputs scans a source directory and skips existing TypeScript outputs", async () => {
  const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-workflow-discovery-"));
  const input = path.join(tmp, "go");
  const outputRoot = path.join(tmp, "out");

  try {
    await mkdir(path.join(input, "nested"), { recursive: true });
    await mkdir(path.join(outputRoot, "nested"), { recursive: true });
    await writeFile(path.join(input, "api_project.go"), "package api\n");
    await writeFile(path.join(input, "nested", "api_promotion.go"), "package api\n");
    await writeFile(path.join(outputRoot, "nested", "api_promotion.ts"), "export {}\n");

    const result = await discoverInputs({
      input,
      outputRoot,
      include: ["**/*.go"],
      outputExtension: ".ts",
      skipExisting: true,
    });

    assert.deepEqual(
      result.queued.map(entry => path.relative(tmp, entry.sourcePath)),
      ["go/api_project.go"],
    );
    assert.deepEqual(
      result.skipped.map(entry => path.relative(tmp, entry.outPath)),
      ["out/nested/api_promotion.ts"],
    );
    assert.equal(result.discovered.length, 2);
    assert.equal(path.relative(tmp, result.queued[0]!.outPath), "out/api_project.ts");
    assert.equal(result.queued[0]!.loc, 1);
  } finally {
    await rm(tmp, { force: true, recursive: true });
  }
});

test("discoverInputs accepts a single source file for focused testing", async () => {
  const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-workflow-discovery-"));
  const input = path.join(tmp, "go", "api_oauth2_advertiser.go");
  const outputRoot = path.join(tmp, "out");

  try {
    await mkdir(path.dirname(input), { recursive: true });
    await writeFile(input, "package api\n");

    const result = await discoverInputs({
      input,
      outputRoot,
      include: ["**/*.go"],
      outputExtension: "ts",
      skipExisting: true,
    });

    assert.equal(result.discovered.length, 1);
    assert.equal(result.skipped.length, 0);
    assert.equal(path.relative(tmp, result.queued[0]!.outPath), "out/api_oauth2_advertiser.ts");
  } finally {
    await rm(tmp, { force: true, recursive: true });
  }
});

test("discoverInputs preserves repository-relative paths for focused single-file testing", async () => {
  const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-workflow-discovery-"));
  const sourceRoot = path.join(tmp, "go");
  const input = path.join(sourceRoot, "api", "client.go");
  const outputRoot = path.join(tmp, "out");

  try {
    await mkdir(path.dirname(input), { recursive: true });
    await writeFile(input, "package api\n");

    const result = await discoverInputs({
      input,
      sourceRoot,
      outputRoot,
      include: ["api/*.go"],
      outputExtension: ".ts",
      skipExisting: true,
    });

    assert.equal(result.discovered.length, 1);
    assert.equal(result.queued[0]!.relativePath, path.join("api", "client.go"));
    assert.equal(path.relative(tmp, result.queued[0]!.outPath), path.join("out", "api", "client.ts"));
  } finally {
    await rm(tmp, { force: true, recursive: true });
  }
});
