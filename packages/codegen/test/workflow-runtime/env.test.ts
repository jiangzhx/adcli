import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { loadWorkflowEnvFile, parseEnvContent } from "../../src/workflow-runtime/env";

test("parseEnvContent parses common .env syntax", () => {
  assert.deepEqual(
    parseEnvContent(`
# comment
ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_MODEL=deepseek-v4-pro[1m]
ANTHROPIC_AUTH_TOKEN="sk-test # not a comment"
CLAUDE_CODE_SUBAGENT_MODEL='deepseek-v4-flash'
CLAUDE_CODE_EFFORT_LEVEL=max # comment
`),
    {
      ANTHROPIC_BASE_URL: "https://api.deepseek.com/anthropic",
      ANTHROPIC_MODEL: "deepseek-v4-pro[1m]",
      ANTHROPIC_AUTH_TOKEN: "sk-test # not a comment",
      CLAUDE_CODE_SUBAGENT_MODEL: "deepseek-v4-flash",
      CLAUDE_CODE_EFFORT_LEVEL: "max",
    },
  );
});

test("loadWorkflowEnvFile overrides existing environment by default", async () => {
  const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-workflow-env-"));
  const envPath = path.join(tmp, ".env");
  const env: NodeJS.ProcessEnv = {
    ANTHROPIC_MODEL: "shell-model",
  };

  try {
    await writeFile(
      envPath,
      `
ANTHROPIC_MODEL=deepseek-v4-pro[1m]
ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-v4-flash
`,
    );

    const result = await loadWorkflowEnvFile(envPath, { env });

    assert.deepEqual(result.loaded, ["ANTHROPIC_MODEL", "ANTHROPIC_DEFAULT_HAIKU_MODEL"]);
    assert.deepEqual(result.overwritten, ["ANTHROPIC_MODEL"]);
    assert.equal(env.ANTHROPIC_MODEL, "deepseek-v4-pro[1m]");
    assert.equal(env.ANTHROPIC_DEFAULT_HAIKU_MODEL, "deepseek-v4-flash");
  } finally {
    await rm(tmp, { force: true, recursive: true });
  }
});
