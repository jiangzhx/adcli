import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { runWorkflowFile } from "../../src/workflow-runtime/run-workflow";
import type { AgentBackend, AgentRequest } from "../../src/workflow-runtime/types";

test("OceanEngine workflow uses the single porting guide", async () => {
  const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-oceanengine-workflow-"));
  const sourceRoot = path.join(tmp, "ad_open_sdk_go");
  const modelPath = path.join(sourceRoot, "models", "model_sample.go");
  const codegenRoot = path.resolve(import.meta.dirname, "../..");
  const workflowPath = path.join(codegenRoot, "src", "oceanengine", "phase-a-port.workflow.js");
  const calls: AgentRequest[] = [];
  const backend: AgentBackend = {
    async run(request) {
      calls.push(request);
      if (request.label?.startsWith("verify:")) {
        return { output: { ok: true, issues: [] } };
      }
      return {
        output: {
          ts_path: path.join(sourceRoot, "models", "model_sample.ts"),
          confidence: "high",
          todos: 0,
          ts_loc: 1,
        },
      };
    },
  };
  const previousEnv = snapshotEnv([
    "ADCLI_CODEGEN_ROOT",
    "ADCLI_WORKFLOW_INPUT",
    "ADCLI_WORKFLOW_SOURCE_ROOT",
    "ADCLI_WORKFLOW_OUTPUT_ROOT",
    "ADCLI_WORKFLOW_INCLUDE",
    "ADCLI_WORKFLOW_SKIP_EXISTING",
  ]);

  try {
    await mkdir(path.dirname(modelPath), { recursive: true });
    await writeFile(modelPath, "package models\n\ntype Sample struct {}\n");
    process.env.ADCLI_CODEGEN_ROOT = codegenRoot;
    process.env.ADCLI_WORKFLOW_INPUT = modelPath;
    process.env.ADCLI_WORKFLOW_SOURCE_ROOT = sourceRoot;
    process.env.ADCLI_WORKFLOW_OUTPUT_ROOT = sourceRoot;
    process.env.ADCLI_WORKFLOW_INCLUDE = "models/*.go";
    process.env.ADCLI_WORKFLOW_SKIP_EXISTING = "0";

    const result = await runWorkflowFile(workflowPath, { agentBackend: backend, defaultConcurrency: 1 });
    const implementPrompt = calls.find(call => call.label === "impl:models/model_sample")?.prompt ?? "";

    assert.equal((result.value as { total: number }).total, 1);
    assert.match(implementPrompt, /PORTING\.md/);
    assert.doesNotMatch(implementPrompt, /PORTING_MODEL\.md/);
    assert.doesNotMatch(implementPrompt, /PORTING_API\.md/);
    assert.doesNotMatch(implementPrompt, /PORTING_RUNTIME\.md/);
  } finally {
    restoreEnv(previousEnv);
    await rm(tmp, { force: true, recursive: true });
  }
});

function snapshotEnv(keys: string[]): Record<string, string | undefined> {
  return Object.fromEntries(keys.map(key => [key, process.env[key]]));
}

function restoreEnv(snapshot: Record<string, string | undefined>): void {
  for (const [key, value] of Object.entries(snapshot)) {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
}
