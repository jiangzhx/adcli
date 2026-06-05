import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { ClaudeAgentSdkBackend } from "./backends/claude-agent-sdk";
import { createWorkflowContext, writeEventsJsonl } from "./dsl";
import { loadWorkflowEnvFile } from "./env";
import { summarizeWorkflowUsage } from "./usage";
import type { RunWorkflowOptions, RunWorkflowResult } from "./types";
import type { WorkflowToolDefinition } from "./tools";

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
    console.error("用法：bun src/workflow-runtime/run-workflow.ts <workflow-file> [--backend mock|claude-sdk] [--env-file .env]");
    process.exitCode = 1;
    return;
  }

  const explicitEnvFile = readFlag("--env-file") ?? process.env.ADCLI_WORKFLOW_ENV_FILE;
  const envPath = path.resolve(process.cwd(), explicitEnvFile ?? ".env");
  const envResult = await loadWorkflowEnvFile(envPath);
  if (!envResult.missing) {
    console.log(`环境文件：${envResult.path}（加载 ${envResult.loaded.length} 项，覆盖 ${envResult.overwritten.length} 项）`);
  } else if (explicitEnvFile) {
    console.warn(`环境文件不存在：${envResult.path}`);
  }

  const backend = readFlag("--backend") ?? process.env.ADCLI_WORKFLOW_BACKEND ?? "mock";
  const runDir = path.join("/tmp/adcli-workflow-runs", createRunId());
  const eventsPath = path.join(runDir, "events.jsonl");
  const usagePath = path.join(runDir, "usage.json");
  const traceMessagesPath = readBooleanEnv("ADCLI_WORKFLOW_TRACE_SDK")
    ? readEnvPath("ADCLI_WORKFLOW_SDK_MESSAGES_FILE", path.join(runDir, "sdk-messages.jsonl"))
    : undefined;
  const debugFile = readBooleanEnv("ADCLI_WORKFLOW_SDK_DEBUG")
    ? readEnvPath("ADCLI_WORKFLOW_SDK_DEBUG_FILE", path.join(runDir, "claude-debug.log"))
    : undefined;
  const additionalDirectories = readEnvPathList("ADCLI_WORKFLOW_ADDITIONAL_DIRECTORIES");
  const builtinTools = readEnvList("ADCLI_WORKFLOW_BUILTIN_TOOLS");
  const settingSources = readSettingSourcesEnv("ADCLI_WORKFLOW_SETTING_SOURCES");
  await mkdir(runDir, { recursive: true });
  if (debugFile) {
    await mkdir(path.dirname(debugFile), { recursive: true });
  }
  const result = await runWorkflowFile(workflowPath, {
    agentBackend:
      backend === "claude-sdk"
        ? new ClaudeAgentSdkBackend({
            cwd: process.cwd(),
            additionalDirectories,
            builtinTools,
            settingSources,
            traceMessagesPath,
            debugFile,
            includePartialMessages: traceMessagesPath ? readBooleanEnv("ADCLI_WORKFLOW_SDK_INCLUDE_PARTIAL") : undefined,
          })
        : undefined,
    tools: await loadWorkflowTools(workflowPath),
  });
  const usage = summarizeWorkflowUsage(result.events);
  await writeEventsJsonl(result.events, eventsPath);
  await writeFile(usagePath, `${JSON.stringify(usage, null, 2)}\n`);
  console.log(`\nworkflow 结果：${JSON.stringify(summarizeValue(result.value), null, 2)}`);
  console.log(`事件文件：${eventsPath}`);
  console.log(`用量文件：${usagePath}`);
  if (traceMessagesPath) {
    console.log(`SDK message 文件：${traceMessagesPath}`);
  }
  if (debugFile) {
    console.log(`Claude debug 文件：${debugFile}`);
  }
  if (usage.total.calls > 0) {
    console.log(
      `用量汇总：calls=${usage.total.calls} tokens=${usage.total.totalTokens} cost=${formatUsd(usage.total.totalCostUsd)}`,
    );
  }
}

async function loadWorkflowTools(workflowPath: string): Promise<WorkflowToolDefinition[]> {
  const normalized = workflowPath.split(path.sep).join("/");
  if (normalized.includes("/oceanengine/") || normalized.includes("src/oceanengine/")) {
    const { createOceanEngineWorkflowTools } = await import("../oceanengine/tools");
    return createOceanEngineWorkflowTools();
  }
  return [];
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

function readBooleanEnv(name: string): boolean {
  const value = process.env[name];
  if (!value) {
    return false;
  }
  return ["1", "true", "yes", "on"].includes(value.trim().toLowerCase());
}

function readEnvPath(name: string, defaultPath: string): string {
  const value = process.env[name]?.trim();
  return value ? path.resolve(process.cwd(), value) : defaultPath;
}

function readEnvList(name: string): string[] | undefined {
  const value = process.env[name];
  if (!value) {
    return undefined;
  }
  const items = value
    .split(",")
    .map(item => item.trim())
    .filter(Boolean);
  return items.length > 0 ? items : undefined;
}

function readEnvPathList(name: string): string[] | undefined {
  const items = readEnvList(name);
  if (!items) {
    return undefined;
  }
  return [...new Set(items.map(item => path.resolve(process.cwd(), item)))];
}

function readSettingSourcesEnv(name: string): Array<"user" | "project" | "local"> | undefined {
  const value = process.env[name]?.trim();
  if (!value) {
    return undefined;
  }
  if (value === "none" || value === "[]") {
    return [];
  }
  const allowed = new Set(["user", "project", "local"]);
  return value
    .split(",")
    .map(item => item.trim())
    .filter((item): item is "user" | "project" | "local" => allowed.has(item));
}

const entryPath = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (entryPath === fileURLToPath(import.meta.url)) {
  await main();
}
