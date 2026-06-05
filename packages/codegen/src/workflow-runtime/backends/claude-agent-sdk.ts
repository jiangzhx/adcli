import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

import {
  createSdkMcpServer,
  query,
  tool,
  type Options,
  type SDKMessage,
  type SDKResultSuccess,
  type SettingSource,
} from "@anthropic-ai/claude-agent-sdk";

import type { AgentBackend, AgentRequest, AgentRunResult, AgentToolCall, AgentUsage } from "../types";
import type { WorkflowToolDefinition } from "../tools";

export interface ClaudeAgentSdkBackendOptions {
  cwd?: string;
  model?: string;
  permissionMode?: AgentRequest["permissionMode"];
  allowedTools?: string[];
  builtinTools?: string[];
  additionalDirectories?: string[];
  settingSources?: SettingSource[];
  traceMessagesPath?: string;
  debugFile?: string;
  includePartialMessages?: boolean;
}

export class ClaudeAgentSdkBackend implements AgentBackend {
  private readonly cwd?: string;
  private readonly model?: string;
  private readonly permissionMode?: AgentRequest["permissionMode"];
  private readonly allowedTools?: string[];
  private readonly builtinTools?: string[];
  private readonly additionalDirectories?: string[];
  private readonly settingSources?: SettingSource[];
  private readonly traceMessagesPath?: string;
  private readonly debugFile?: string;
  private readonly includePartialMessages?: boolean;

  constructor(options: ClaudeAgentSdkBackendOptions = {}) {
    this.cwd = options.cwd;
    this.model = options.model;
    this.permissionMode = options.permissionMode;
    this.allowedTools = options.allowedTools;
    this.builtinTools = options.builtinTools;
    this.additionalDirectories = options.additionalDirectories;
    this.settingSources = options.settingSources;
    this.traceMessagesPath = options.traceMessagesPath;
    this.debugFile = options.debugFile;
    this.includePartialMessages = options.includePartialMessages;
  }

  async run(request: AgentRequest): Promise<AgentRunResult> {
    const permissionMode = request.permissionMode ?? this.permissionMode ?? "acceptEdits";
    const allowedTools = mergeAllowedTools(
      request.allowedTools ?? this.allowedTools ?? parseAllowedTools(process.env.ADCLI_WORKFLOW_ALLOWED_TOOLS),
      request.tools,
    );
    const toolCalls: AgentToolCall[] = [];
    const mcpServers = createToolServers(request.tools, toolCalls);
    const options: Options = {
      cwd: request.cwd ?? this.cwd ?? process.cwd(),
      additionalDirectories: this.additionalDirectories,
      settingSources: this.settingSources,
      model: request.model ?? this.model,
      permissionMode,
      allowedTools,
      tools: this.builtinTools ?? { type: "preset", preset: "claude_code" },
      mcpServers,
      outputFormat: request.schema
        ? {
            type: "json_schema",
            schema: request.schema as Record<string, unknown>,
          }
        : undefined,
      maxTurns: request.maxTurns,
      debug: this.debugFile !== undefined,
      debugFile: this.debugFile,
      includePartialMessages: this.includePartialMessages,
      persistSession: false,
      allowDangerouslySkipPermissions: permissionMode === "bypassPermissions",
      env: {
        ...process.env,
        CLAUDE_AGENT_SDK_CLIENT_APP: "adcli-codegen-workflow/0.1",
      },
    };
    const trace = this.traceMessagesPath ? new JsonlTraceWriter(this.traceMessagesPath, request) : undefined;
    await trace?.write({
      type: "agent-request",
      label: request.label,
      phase: request.phase,
      prompt: request.prompt,
      options: {
        cwd: options.cwd,
        model: options.model,
        permissionMode: options.permissionMode,
        allowedTools: options.allowedTools,
        builtinTools: this.builtinTools,
        additionalDirectories: this.additionalDirectories,
        settingSources: this.settingSources,
        toolNames: request.toolNames,
        tools: request.tools?.map(workflowTool => workflowTool.name),
        hasOutputFormat: options.outputFormat !== undefined,
        maxTurns: options.maxTurns,
      },
    });

    let lastAssistantText = "";
    try {
      for await (const message of query({ prompt: request.prompt, options })) {
        await trace?.write({
          type: "sdk-message",
          label: request.label,
          phase: request.phase,
          message,
        });
        if (message.type === "assistant") {
          lastAssistantText = extractAssistantText(message);
        }
        if (message.type === "result") {
          if (message.subtype !== "success") {
            await trace?.write({
              type: "agent-result",
              label: request.label,
              phase: request.phase,
              resultSubtype: message.subtype,
              error: message.errors.join("\n") || "Claude Agent SDK query failed",
              toolCalls,
            });
            throw new Error(message.errors.join("\n") || "Claude Agent SDK query failed");
          }
          const output = message.structured_output !== undefined ? message.structured_output : parseMaybeJson(message.result);
          const usage = normalizeUsage(message);
          await trace?.write({
            type: "agent-result",
            label: request.label,
            phase: request.phase,
            output,
            usage,
            toolCalls,
          });
          return {
            output,
            usage,
            toolCalls,
          };
        }
      }
    } catch (error) {
      await trace?.write({
        type: "agent-error",
        label: request.label,
        phase: request.phase,
        error: serializeError(error),
        toolCalls,
      });
      throw error;
    }

    const output = parseMaybeJson(lastAssistantText);
    await trace?.write({
      type: "agent-result",
      label: request.label,
      phase: request.phase,
      output,
      toolCalls,
    });
    return { output, toolCalls };
  }
}

class JsonlTraceWriter {
  private initialized = false;

  constructor(
    private readonly filePath: string,
    private readonly request: AgentRequest,
  ) {}

  async write(record: Record<string, unknown>): Promise<void> {
    if (!this.initialized) {
      await mkdir(path.dirname(this.filePath), { recursive: true });
      this.initialized = true;
    }
    const payload = {
      timestamp: new Date().toISOString(),
      agentLabel: this.request.label,
      agentPhase: this.request.phase,
      ...record,
    };
    await appendFile(this.filePath, `${safeJsonStringify(payload)}\n`);
  }
}

function mergeAllowedTools(baseTools: string[] | undefined, workflowTools: WorkflowToolDefinition[] | undefined): string[] | undefined {
  const workflowAllowedTools = workflowTools?.map(definition => `mcp__adcli_workflow_tools__${definition.name}`) ?? [];
  if (!baseTools && workflowAllowedTools.length === 0) {
    return undefined;
  }
  return [...new Set([...(baseTools ?? []), ...workflowAllowedTools])];
}

function createToolServers(tools: WorkflowToolDefinition[] | undefined, toolCalls: AgentToolCall[]): Options["mcpServers"] {
  if (!tools || tools.length === 0) {
    return undefined;
  }
  return {
    adcli_workflow_tools: createSdkMcpServer({
      name: "adcli-workflow-tools",
      version: "0.1.0",
      instructions: "这些是 adcli workflow 注册的普通本地工具。按任务需要调用，不要把工具调用结果当成唯一判断依据。",
      alwaysLoad: true,
      tools: tools.map(definition =>
        tool(
          definition.name,
          definition.description,
          definition.inputSchema,
          async args => {
            const startedAt = Date.now();
            try {
              const value = await definition.run(args as Record<string, unknown>);
              toolCalls.push({
                name: definition.name,
                ok: true,
                durationMs: Date.now() - startedAt,
              });
              return toToolResult(value);
            } catch (error) {
              toolCalls.push({
                name: definition.name,
                ok: false,
                durationMs: Date.now() - startedAt,
                error: error instanceof Error ? error.message : String(error),
              });
              throw error;
            }
          },
          { alwaysLoad: definition.alwaysLoad ?? true },
        ),
      ),
    }),
  };
}

function toToolResult(value: unknown) {
  return {
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(value, null, 2),
      },
    ],
  };
}

function parseAllowedTools(value: string | undefined): string[] | undefined {
  if (!value) {
    return undefined;
  }
  const tools = value
    .split(",")
    .map(tool => tool.trim())
    .filter(Boolean);
  return tools.length > 0 ? tools : undefined;
}

function extractAssistantText(message: Extract<SDKMessage, { type: "assistant" }>): string {
  return message.message.content
    .map(block => (block.type === "text" ? block.text : ""))
    .filter(Boolean)
    .join("\n");
}

function parseMaybeJson(value: string): unknown {
  if (!value) {
    return value;
  }
  try {
    return JSON.parse(value) as unknown;
  } catch {
    return value;
  }
}

function safeJsonStringify(value: unknown): string {
  const seen = new WeakSet<object>();
  return JSON.stringify(value, (_key, child) => {
    if (typeof child === "bigint") {
      return child.toString();
    }
    if (child instanceof Error) {
      return serializeError(child);
    }
    if (typeof child === "object" && child !== null) {
      if (seen.has(child)) {
        return "[Circular]";
      }
      seen.add(child);
    }
    return child;
  });
}

function serializeError(error: unknown): Record<string, unknown> {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  }
  return {
    message: String(error),
  };
}

function normalizeUsage(message: SDKResultSuccess): AgentUsage {
  const rawUsage = message.usage as Record<string, unknown>;
  const inputTokens = readNumber(rawUsage, "input_tokens", "inputTokens");
  const outputTokens = readNumber(rawUsage, "output_tokens", "outputTokens");
  const cacheCreationInputTokens = readNumber(
    rawUsage,
    "cache_creation_input_tokens",
    "cacheCreationInputTokens",
  );
  const cacheReadInputTokens = readNumber(rawUsage, "cache_read_input_tokens", "cacheReadInputTokens");
  const totalTokens = sumDefined(inputTokens, outputTokens, cacheCreationInputTokens, cacheReadInputTokens);

  return omitUndefined({
    inputTokens,
    outputTokens,
    cacheCreationInputTokens,
    cacheReadInputTokens,
    totalTokens,
    totalCostUsd: finiteNumber(message.total_cost_usd),
    durationMs: finiteNumber(message.duration_ms),
    durationApiMs: finiteNumber(message.duration_api_ms),
    numTurns: finiteNumber(message.num_turns),
    modelUsage: message.modelUsage,
    rawUsage: message.usage,
  });
}

function readNumber(source: Record<string, unknown>, ...keys: string[]): number | undefined {
  for (const key of keys) {
    const value = finiteNumber(source[key]);
    if (value !== undefined) {
      return value;
    }
  }
  return undefined;
}

function finiteNumber(value: unknown): number | undefined {
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

function sumDefined(...values: Array<number | undefined>): number | undefined {
  let total = 0;
  let found = false;
  for (const value of values) {
    if (value !== undefined) {
      total += value;
      found = true;
    }
  }
  return found ? total : undefined;
}

function omitUndefined<T extends Record<string, unknown>>(value: T): T {
  for (const key of Object.keys(value)) {
    if (value[key] === undefined) {
      delete value[key];
    }
  }
  return value;
}
