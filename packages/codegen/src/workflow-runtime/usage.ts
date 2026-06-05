import type { AgentUsage, WorkflowEvent } from "./types";

export interface UsageTotals {
  calls: number;
  inputTokens: number;
  outputTokens: number;
  cacheCreationInputTokens: number;
  cacheReadInputTokens: number;
  totalTokens: number;
  totalCostUsd: number;
  durationMs: number;
  durationApiMs: number;
  numTurns: number;
}

export interface WorkflowUsageSummary {
  total: UsageTotals;
  byPhase: Record<string, UsageTotals>;
  byLabel: Record<string, UsageTotals>;
  byFile: Record<string, UsageTotals>;
  toolCalls: ToolCallSummary;
}

export interface ToolCallTotals {
  calls: number;
  failed: number;
  durationMs: number;
}

export interface ToolCallSummary {
  total: ToolCallTotals;
  byTool: Record<string, ToolCallTotals>;
  byLabel: Record<string, ToolCallTotals>;
}

export function summarizeWorkflowUsage(events: WorkflowEvent[]): WorkflowUsageSummary {
  const summary: WorkflowUsageSummary = {
    total: emptyTotals(),
    byPhase: {},
    byLabel: {},
    byFile: {},
    toolCalls: {
      total: emptyToolCallTotals(),
      byTool: {},
      byLabel: {},
    },
  };

  for (const event of events) {
    if (event.type !== "agent:end") {
      continue;
    }

    const phase = event.phase ?? "(no phase)";
    const label = event.label ?? "(unlabeled)";

    if (event.usage) {
      addUsage(summary.total, event.usage);
      addUsage(bucket(summary.byPhase, phase), event.usage);
      addUsage(bucket(summary.byLabel, label), event.usage);
      addUsage(bucket(summary.byFile, fileKeyFromLabel(label)), event.usage);
    }

    for (const toolCall of event.toolCalls ?? []) {
      addToolCall(summary.toolCalls.total, toolCall);
      addToolCall(toolCallBucket(summary.toolCalls.byTool, toolCall.name), toolCall);
      addToolCall(toolCallBucket(summary.toolCalls.byLabel, label), toolCall);
    }
  }

  return summary;
}

function emptyToolCallTotals(): ToolCallTotals {
  return {
    calls: 0,
    failed: 0,
    durationMs: 0,
  };
}

function emptyTotals(): UsageTotals {
  return {
    calls: 0,
    inputTokens: 0,
    outputTokens: 0,
    cacheCreationInputTokens: 0,
    cacheReadInputTokens: 0,
    totalTokens: 0,
    totalCostUsd: 0,
    durationMs: 0,
    durationApiMs: 0,
    numTurns: 0,
  };
}

function bucket(collection: Record<string, UsageTotals>, key: string): UsageTotals {
  collection[key] ??= emptyTotals();
  return collection[key]!;
}

function addUsage(total: UsageTotals, usage: AgentUsage): void {
  total.calls += 1;
  total.inputTokens += usage.inputTokens ?? 0;
  total.outputTokens += usage.outputTokens ?? 0;
  total.cacheCreationInputTokens += usage.cacheCreationInputTokens ?? 0;
  total.cacheReadInputTokens += usage.cacheReadInputTokens ?? 0;
  total.totalTokens += usage.totalTokens ?? inferredTotalTokens(usage);
  total.totalCostUsd += usage.totalCostUsd ?? 0;
  total.durationMs += usage.durationMs ?? 0;
  total.durationApiMs += usage.durationApiMs ?? 0;
  total.numTurns += usage.numTurns ?? 0;
}

function toolCallBucket(collection: Record<string, ToolCallTotals>, key: string): ToolCallTotals {
  collection[key] ??= emptyToolCallTotals();
  return collection[key]!;
}

function addToolCall(total: ToolCallTotals, toolCall: { ok: boolean; durationMs?: number }): void {
  total.calls += 1;
  if (!toolCall.ok) {
    total.failed += 1;
  }
  total.durationMs += toolCall.durationMs ?? 0;
}

function inferredTotalTokens(usage: AgentUsage): number {
  return (
    (usage.inputTokens ?? 0) +
    (usage.outputTokens ?? 0) +
    (usage.cacheCreationInputTokens ?? 0) +
    (usage.cacheReadInputTokens ?? 0)
  );
}

function fileKeyFromLabel(label: string): string {
  const separator = label.indexOf(":");
  return separator === -1 ? label : label.slice(separator + 1);
}
