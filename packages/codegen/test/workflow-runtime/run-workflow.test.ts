import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { runWorkflowFile } from "../../src/workflow-runtime/run-workflow";
import type { AgentBackend, AgentRequest } from "../../src/workflow-runtime/types";

test("runWorkflowFile injects Bun-style workflow globals", async () => {
  const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-workflow-run-"));
  const workflowPath = path.join(tmp, "phase-a-port.workflow.js");
  const calls: AgentRequest[] = [];
  const backend: AgentBackend = {
    async run(request) {
      calls.push(request);
      return { output: { ok: true, label: request.label, prompt: request.prompt } };
    },
  };

  try {
    await writeFile(
      workflowPath,
      `
export const meta = { name: "test-workflow" };

phase("Implement");
const results = await pipeline(
  ["ProjectListV30Api", "PromotionListV30Api"],
  name => agent("port " + name, { label: "impl:" + name }),
  (impl, name) => agent("verify " + impl.label + " for " + name, { label: "verify:" + name, phase: "Verify" })
);
log("done", { count: results.length });

return { total: results.length, labels: results.map(result => result.label) };
`,
    );

    const result = await runWorkflowFile(workflowPath, {
      agentBackend: backend,
      defaultConcurrency: 1,
    });

    assert.deepEqual(result.value, {
      total: 2,
      labels: ["verify:ProjectListV30Api", "verify:PromotionListV30Api"],
    });
    assert.deepEqual(
      calls.map(call => [call.phase, call.label, call.prompt]),
      [
        ["Implement", "impl:ProjectListV30Api", "port ProjectListV30Api"],
        ["Verify", "verify:ProjectListV30Api", "verify impl:ProjectListV30Api for ProjectListV30Api"],
        ["Implement", "impl:PromotionListV30Api", "port PromotionListV30Api"],
        ["Verify", "verify:PromotionListV30Api", "verify impl:PromotionListV30Api for PromotionListV30Api"],
      ],
    );
    assert.deepEqual(
      result.events.map(event => event.type),
      ["phase", "agent:start", "agent:end", "agent:start", "agent:end", "agent:start", "agent:end", "agent:start", "agent:end", "log"],
    );
  } finally {
    await rm(tmp, { force: true, recursive: true });
  }
});

test("runWorkflowFile records agent usage while returning only agent output to the workflow", async () => {
  const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-workflow-usage-"));
  const workflowPath = path.join(tmp, "phase-a-port.workflow.js");
  const backend: AgentBackend = {
    async run(request) {
      return {
        output: { ok: true, label: request.label },
        usage: {
          inputTokens: 120,
          outputTokens: 40,
          cacheReadInputTokens: 10,
          totalTokens: 170,
          totalCostUsd: 0.0123,
          durationMs: 900,
          durationApiMs: 650,
          numTurns: 1,
        },
      };
    },
  };

  try {
    await writeFile(
      workflowPath,
      `
const result = await agent("port api_project.go", { label: "impl:api_project.go", phase: "Implement" });
return { label: result.label };
`,
    );

    const result = await runWorkflowFile(workflowPath, { agentBackend: backend });
    const endEvent = result.events.find(event => event.type === "agent:end");

    assert.deepEqual(result.value, { label: "impl:api_project.go" });
    assert.deepEqual(endEvent?.data, { ok: true, label: "impl:api_project.go" });
    assert.deepEqual(endEvent?.usage, {
      inputTokens: 120,
      outputTokens: 40,
      cacheReadInputTokens: 10,
      totalTokens: 170,
      totalCostUsd: 0.0123,
      durationMs: 900,
      durationApiMs: 650,
      numTurns: 1,
    });
  } finally {
    await rm(tmp, { force: true, recursive: true });
  }
});
