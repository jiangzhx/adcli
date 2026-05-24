import { query, type Options, type SDKMessage, type SDKResultSuccess } from "@anthropic-ai/claude-agent-sdk";

import type { AgentBackend, AgentRequest, AgentRunResult, AgentUsage } from "../types";

export interface ClaudeAgentSdkBackendOptions {
  cwd?: string;
  model?: string;
  permissionMode?: AgentRequest["permissionMode"];
  allowedTools?: string[];
}

export class ClaudeAgentSdkBackend implements AgentBackend {
  private readonly cwd?: string;
  private readonly model?: string;
  private readonly permissionMode?: AgentRequest["permissionMode"];
  private readonly allowedTools?: string[];

  constructor(options: ClaudeAgentSdkBackendOptions = {}) {
    this.cwd = options.cwd;
    this.model = options.model;
    this.permissionMode = options.permissionMode;
    this.allowedTools = options.allowedTools;
  }

  async run(request: AgentRequest): Promise<AgentRunResult> {
    const permissionMode = request.permissionMode ?? this.permissionMode ?? "acceptEdits";
    const options: Options = {
      cwd: request.cwd ?? this.cwd ?? process.cwd(),
      model: request.model ?? this.model,
      permissionMode,
      allowedTools: request.allowedTools ?? this.allowedTools ?? ["Read", "Write", "Edit", "Glob", "Grep"],
      tools: { type: "preset", preset: "claude_code" },
      outputFormat: request.schema
        ? {
            type: "json_schema",
            schema: request.schema as Record<string, unknown>,
          }
        : undefined,
      maxTurns: request.maxTurns,
      persistSession: false,
      allowDangerouslySkipPermissions: permissionMode === "bypassPermissions",
      env: {
        ...process.env,
        CLAUDE_AGENT_SDK_CLIENT_APP: "adcli-codegen-workflow/0.1",
      },
    };

    let lastAssistantText = "";
    for await (const message of query({ prompt: request.prompt, options })) {
      if (message.type === "assistant") {
        lastAssistantText = extractAssistantText(message);
      }
      if (message.type === "result") {
        if (message.subtype !== "success") {
          throw new Error(message.errors.join("\n") || "Claude Agent SDK query failed");
        }
        return {
          output: message.structured_output !== undefined ? message.structured_output : parseMaybeJson(message.result),
          usage: normalizeUsage(message),
        };
      }
    }

    return { output: parseMaybeJson(lastAssistantText) };
  }
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
