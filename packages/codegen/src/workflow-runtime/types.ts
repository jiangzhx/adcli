export type WorkflowEventType = "phase" | "log" | "agent:start" | "agent:end" | "agent:error";

export interface WorkflowEvent {
  type: WorkflowEventType;
  timestamp: string;
  phase?: string;
  label?: string;
  message?: string;
  data?: unknown;
  usage?: AgentUsage;
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
}

export interface AgentRequest {
  prompt: string;
  label?: string;
  phase?: string;
  cwd?: string;
  schema?: unknown;
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
  onEvent?: (event: WorkflowEvent) => void;
}

export interface RunWorkflowResult {
  value: unknown;
  events: WorkflowEvent[];
}
