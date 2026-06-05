import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { runWorkflowFile } from "../../src/workflow-runtime/run-workflow";
import type { WorkflowToolDefinition } from "../../src/workflow-runtime/tools";
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

phase("实现");
const results = await pipeline(
  ["ProjectListV30Api", "PromotionListV30Api"],
  name => agent("迁移 " + name, { label: "impl:" + name }),
  (impl, name) => agent("校验 " + impl.label + " / " + name, { label: "verify:" + name, phase: "校验" })
);
log("完成", { count: results.length });

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
        ["实现", "impl:ProjectListV30Api", "迁移 ProjectListV30Api"],
        ["校验", "verify:ProjectListV30Api", "校验 impl:ProjectListV30Api / ProjectListV30Api"],
        ["实现", "impl:PromotionListV30Api", "迁移 PromotionListV30Api"],
        ["校验", "verify:PromotionListV30Api", "校验 impl:PromotionListV30Api / PromotionListV30Api"],
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
const result = await agent("迁移 api_project.go", { label: "impl:api_project.go", phase: "实现" });
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

test("runWorkflowFile resolves ordinary workflow tools for agent requests", async () => {
  const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-workflow-tools-"));
  const workflowPath = path.join(tmp, "phase-a-port.workflow.js");
  const calls: AgentRequest[] = [];
  const tools: WorkflowToolDefinition[] = [
    {
      name: "demo_echo",
      description: "回显输入。",
      inputSchema: {},
      async run(input) {
        return input;
      },
    },
  ];
  const backend: AgentBackend = {
    async run(request) {
      calls.push(request);
      return { output: { ok: true } };
    },
  };

  try {
    await writeFile(
      workflowPath,
      `
await agent("调用 demo_echo 工具", { label: "impl:demo", toolNames: ["demo_echo"] });
return { ok: true };
`,
    );

    await runWorkflowFile(workflowPath, {
      agentBackend: backend,
      tools,
    });

    assert.deepEqual(calls[0]?.toolNames, ["demo_echo"]);
    assert.equal(calls[0]?.tools?.[0]?.name, "demo_echo");
    assert.equal(calls[0]?.tools?.[0]?.description, "回显输入。");
  } finally {
    await rm(tmp, { force: true, recursive: true });
  }
});

test("runWorkflowFile records tool calls returned by an agent backend", async () => {
  const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-workflow-tool-calls-"));
  const workflowPath = path.join(tmp, "phase-a-port.workflow.js");
  const backend: AgentBackend = {
    async run() {
      return {
        output: { ok: true },
        toolCalls: [
          {
            name: "oceanengine_analyze_ast",
            ok: true,
            durationMs: 12,
          },
        ],
      };
    },
  };

  try {
    await writeFile(
      workflowPath,
      `
await agent("调用工具", { label: "impl:model" });
return { ok: true };
`,
    );

    const result = await runWorkflowFile(workflowPath, { agentBackend: backend });
    const endEvent = result.events.find(event => event.type === "agent:end");

    assert.deepEqual(endEvent?.toolCalls, [
      {
        name: "oceanengine_analyze_ast",
        ok: true,
        durationMs: 12,
      },
    ]);
  } finally {
    await rm(tmp, { force: true, recursive: true });
  }
});
