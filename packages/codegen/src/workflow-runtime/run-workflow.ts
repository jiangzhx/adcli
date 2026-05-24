import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { ClaudeAgentSdkBackend } from "./backends/claude-agent-sdk";
import { createWorkflowContext, writeEventsJsonl } from "./dsl";
import { loadWorkflowEnvFile } from "./env";
import { summarizeWorkflowUsage } from "./usage";
import type { RunWorkflowOptions, RunWorkflowResult } from "./types";

const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor as new (
  ...args: string[]
) => (...values: unknown[]) => Promise<unknown>;

export async function runWorkflowFile(workflowPath: string, options: RunWorkflowOptions = {}): Promise<RunWorkflowResult> {
  const absoluteWorkflowPath = path.resolve(options.cwd ?? process.cwd(), workflowPath);
  const source = await readFile(absoluteWorkflowPath, "utf8");
  const context = createWorkflowContext(options);
  const globals = context.globals;
  const transformedSource = transformWorkflowSource(source);
  const names = Object.keys(globals);
  const values = Object.values(globals);
  const run = new AsyncFunction(...names, transformedSource);
  const value = await run(...values);

  return {
    value,
    events: context.events,
  };
}

async function main(): Promise<void> {
  const workflowPath = process.argv[2];
  if (!workflowPath) {
    console.error("Usage: bun src/workflow-runtime/run-workflow.ts <workflow-file> [--backend mock|claude-sdk] [--env-file .env]");
    process.exitCode = 1;
    return;
  }

  const explicitEnvFile = readFlag("--env-file") ?? process.env.ADCLI_WORKFLOW_ENV_FILE;
  const envPath = path.resolve(process.cwd(), explicitEnvFile ?? ".env");
  const envResult = await loadWorkflowEnvFile(envPath);
  if (!envResult.missing) {
    console.log(`env: ${envResult.path} (${envResult.loaded.length} loaded, ${envResult.overwritten.length} overwritten)`);
  } else if (explicitEnvFile) {
    console.warn(`env: ${envResult.path} not found`);
  }

  const backend = readFlag("--backend") ?? process.env.ADCLI_WORKFLOW_BACKEND ?? "mock";
  const result = await runWorkflowFile(workflowPath, {
    agentBackend: backend === "claude-sdk" ? new ClaudeAgentSdkBackend({ cwd: process.cwd() }) : undefined,
  });
  const runDir = path.join("/tmp/adcli-workflow-runs", createRunId());
  const eventsPath = path.join(runDir, "events.jsonl");
  const usagePath = path.join(runDir, "usage.json");
  const usage = summarizeWorkflowUsage(result.events);
  await mkdir(runDir, { recursive: true });
  await writeEventsJsonl(result.events, eventsPath);
  await writeFile(usagePath, `${JSON.stringify(usage, null, 2)}\n`);
  console.log(`\nworkflow result: ${JSON.stringify(summarizeValue(result.value), null, 2)}`);
  console.log(`events: ${eventsPath}`);
  console.log(`usage: ${usagePath}`);
  if (usage.total.calls > 0) {
    console.log(
      `usage total: calls=${usage.total.calls} tokens=${usage.total.totalTokens} cost=${formatUsd(usage.total.totalCostUsd)}`,
    );
  }
}

function transformWorkflowSource(source: string): string {
  return source
    .replace(/^\s*export\s+const\s+meta\s*=/m, "const meta =")
    .replace(/^\s*export\s+default\s+/m, "return ");
}

function createRunId(): string {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

function summarizeValue(value: unknown): unknown {
  if (!isObject(value)) {
    return value;
  }
  const summary: Record<string, unknown> = { ...value };
  for (const [key, child] of Object.entries(summary)) {
    if (Array.isArray(child)) {
      summary[key] = {
        count: child.length,
        first: child[0],
      };
    }
  }
  return summary;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function formatUsd(value: number): string {
  return `$${value.toFixed(value >= 1 ? 2 : 6)}`;
}

function readFlag(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  if (index === -1) {
    return undefined;
  }
  return process.argv[index + 1];
}

const entryPath = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (entryPath === fileURLToPath(import.meta.url)) {
  await main();
}
