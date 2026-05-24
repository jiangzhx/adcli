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
}

export function summarizeWorkflowUsage(events: WorkflowEvent[]): WorkflowUsageSummary {
  const summary: WorkflowUsageSummary = {
    total: emptyTotals(),
    byPhase: {},
    byLabel: {},
    byFile: {},
  };

  for (const event of events) {
    if (event.type !== "agent:end" || !event.usage) {
      continue;
    }

    addUsage(summary.total, event.usage);

    const phase = event.phase ?? "(no phase)";
    addUsage(bucket(summary.byPhase, phase), event.usage);

    const label = event.label ?? "(unlabeled)";
    addUsage(bucket(summary.byLabel, label), event.usage);
    addUsage(bucket(summary.byFile, fileKeyFromLabel(label)), event.usage);
  }

  return summary;
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
