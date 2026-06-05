import type { WorkflowToolDefinition } from "./tools";

export type WorkflowEventType = "phase" | "log" | "agent:start" | "agent:end" | "agent:error";

export interface WorkflowEvent {
  type: WorkflowEventType;
  timestamp: string;
  phase?: string;
  label?: string;
  message?: string;
  data?: unknown;
  usage?: AgentUsage;
  toolCalls?: AgentToolCall[];
}

export interface AgentToolCall {
  name: string;
  ok: boolean;
  durationMs?: number;
  error?: string;
}

export interface AgentUsage {
  inputTokens?: number;
  outputTokens?: number;
  cacheCreationInputTokens?: number;
  cacheReadInputTokens?: number;
  totalTokens?: number;
  totalCostUsd?: number;
  durationMs?: number;
  durationApiMs?: number;
  numTurns?: number;
  modelUsage?: unknown;
  rawUsage?: unknown;
}

export interface AgentRunResult {
  output: unknown;
  usage?: AgentUsage;
  toolCalls?: AgentToolCall[];
}

export interface AgentRequest {
  prompt: string;
  label?: string;
  phase?: string;
  cwd?: string;
  schema?: unknown;
  toolNames?: string[];
  tools?: WorkflowToolDefinition[];
  allowedTools?: string[];
  permissionMode?: "acceptEdits" | "auto" | "bypassPermissions" | "default" | "dontAsk" | "plan";
  model?: string;
  maxTurns?: number;
}

export interface AgentBackend {
  run(request: AgentRequest): Promise<AgentRunResult>;
}

export interface PortInputEntry {
  sourcePath: string;
  outPath: string;
  relativePath: string;
  loc: number;
}

export interface DiscoverInputsOptions {
  input: string;
  sourceRoot?: string;
  outputRoot: string;
  include?: string[];
  outputExtension?: string;
  skipExisting?: boolean;
  overwrite?: boolean;
}

export interface DiscoverInputsResult {
  discovered: PortInputEntry[];
  queued: PortInputEntry[];
  skipped: PortInputEntry[];
}

export interface RunWorkflowOptions {
  agentBackend?: AgentBackend;
  cwd?: string;
  defaultConcurrency?: number;
  tools?: WorkflowToolDefinition[];
  onEvent?: (event: WorkflowEvent) => void;
}

export interface RunWorkflowResult {
  value: unknown;
  events: WorkflowEvent[];
}
