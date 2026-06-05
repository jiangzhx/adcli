import assert from "node:assert/strict";
import test from "node:test";

import { summarizeWorkflowUsage } from "../../src/workflow-runtime/usage";
import type { WorkflowEvent } from "../../src/workflow-runtime/types";

test("summarizeWorkflowUsage aggregates agent usage by phase, label, and file", () => {
  const events: WorkflowEvent[] = [
    {
      type: "agent:end",
      timestamp: "2026-05-24T00:00:00.000Z",
      phase: "实现",
      label: "impl:api_project.go",
      usage: {
        inputTokens: 100,
        outputTokens: 40,
        cacheReadInputTokens: 10,
        totalTokens: 150,
        totalCostUsd: 0.01,
        durationMs: 1000,
        durationApiMs: 700,
        numTurns: 1,
      },
      toolCalls: [
        {
          name: "oceanengine_analyze_ast",
          ok: true,
          durationMs: 12,
        },
      ],
    },
    {
      type: "agent:end",
      timestamp: "2026-05-24T00:00:01.000Z",
      phase: "校验",
      label: "verify:api_project.go",
      usage: {
        inputTokens: 80,
        outputTokens: 20,
        totalCostUsd: 0.005,
        durationMs: 500,
        durationApiMs: 300,
        numTurns: 1,
      },
      toolCalls: [
        {
          name: "oceanengine_verify_port",
          ok: false,
          durationMs: 8,
          error: "校验失败",
        },
      ],
    },
  ];

  const summary = summarizeWorkflowUsage(events);

  assert.deepEqual(summary.total, {
    calls: 2,
    inputTokens: 180,
    outputTokens: 60,
    cacheCreationInputTokens: 0,
    cacheReadInputTokens: 10,
    totalTokens: 250,
    totalCostUsd: 0.015,
    durationMs: 1500,
    durationApiMs: 1000,
    numTurns: 2,
  });
  assert.equal(summary.byPhase["实现"]?.calls, 1);
  assert.equal(summary.byLabel["verify:api_project.go"]?.inputTokens, 80);
  assert.equal(summary.byFile["api_project.go"]?.calls, 2);
  assert.deepEqual(summary.toolCalls.total, {
    calls: 2,
    failed: 1,
    durationMs: 20,
  });
  assert.deepEqual(summary.toolCalls.byTool.oceanengine_analyze_ast, {
    calls: 1,
    failed: 0,
    durationMs: 12,
  });
});
