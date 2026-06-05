import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { discoverInputs } from "./discovery";
import { EchoAgentBackend } from "./backends/mock";
import { resolveWorkflowTools } from "./tools";
import type { AgentBackend, AgentRequest, RunWorkflowOptions, WorkflowEvent } from "./types";

export interface WorkflowGlobals {
  agent: (prompt: string, options?: Omit<AgentRequest, "prompt">) => Promise<unknown>;
  pipeline: <T, R>(items: T[], ...steps: Array<(value: unknown, item: T) => Promise<R> | R>) => Promise<R[]>;
  parallel: <T>(tasks: Array<() => Promise<T> | T>, options?: { concurrency?: number }) => Promise<T[]>;
  phase: (name: string) => void;
  log: (message: string, data?: unknown) => void;
  discoverInputs: typeof discoverInputs;
}

export interface WorkflowContext {
  globals: WorkflowGlobals;
  events: WorkflowEvent[];
  currentPhase: () => string | undefined;
}

export function createWorkflowContext(options: RunWorkflowOptions = {}): WorkflowContext {
  const events: WorkflowEvent[] = [];
  const agentBackend = options.agentBackend ?? new EchoAgentBackend();
  const defaultConcurrency = options.defaultConcurrency ?? 3;
  let activePhase: string | undefined;

  function emit(event: Omit<WorkflowEvent, "timestamp">): void {
    const fullEvent: WorkflowEvent = {
      timestamp: new Date().toISOString(),
      ...event,
    };
    events.push(fullEvent);
    options.onEvent?.(fullEvent);
    printEvent(fullEvent);
  }

  const globals: WorkflowGlobals = {
    async agent(prompt, agentOptions = {}) {
      const phase = agentOptions.phase ?? activePhase;
      const tools = agentOptions.tools ?? resolveWorkflowTools(agentOptions.toolNames, options.tools);
      const request: AgentRequest = {
        ...agentOptions,
        prompt,
        phase,
        tools,
      };
      emit({ type: "agent:start", phase, label: request.label, data: { prompt } });
      try {
        const result = await agentBackend.run(request);
        emit({ type: "agent:end", phase, label: request.label, data: result.output, usage: result.usage, toolCalls: result.toolCalls });
        return result.output;
      } catch (error) {
        emit({
          type: "agent:error",
          phase,
          label: request.label,
          message: error instanceof Error ? error.message : String(error),
        });
        throw error;
      }
    },

    async pipeline(items, ...steps) {
      const tasks = items.map(item => async () => {
        let previous: unknown;
        for (let index = 0; index < steps.length; index += 1) {
          const step = steps[index]!;
          previous = index === 0 ? await step(item, item) : await step(previous, item);
        }
        return previous as Awaited<ReturnType<(typeof steps)[number]>>;
      });
      return globals.parallel(tasks, { concurrency: defaultConcurrency });
    },

    async parallel(tasks, parallelOptions = {}) {
      return runWithConcurrency(tasks, parallelOptions.concurrency ?? defaultConcurrency);
    },

    phase(name) {
      activePhase = name;
      emit({ type: "phase", phase: name, message: name });
    },

    log(message, data) {
      emit({ type: "log", phase: activePhase, message, data });
    },

    discoverInputs,
  };

  return {
    globals,
    events,
    currentPhase: () => activePhase,
  };
}

export async function writeEventsJsonl(events: WorkflowEvent[], filePath: string): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  const content = events.map(event => JSON.stringify(event)).join("\n");
  await writeFile(filePath, content ? `${content}\n` : "");
}

async function runWithConcurrency<T>(tasks: Array<() => Promise<T> | T>, concurrency: number): Promise<T[]> {
  const limit = Math.max(1, concurrency);
  const results: T[] = new Array(tasks.length);
  let nextIndex = 0;

  async function worker(): Promise<void> {
    while (nextIndex < tasks.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await tasks[index]!();
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, tasks.length) }, worker));
  return results;
}

function printEvent(event: WorkflowEvent): void {
  const verboseAgents = process.env.ADCLI_WORKFLOW_VERBOSE === "1";
  if (event.type === "phase") {
    console.log(`\n== ${event.phase ?? event.message ?? "阶段"} ==`);
    return;
  }
  if (event.type === "log") {
    console.log(event.data === undefined ? event.message : `${event.message} ${JSON.stringify(event.data)}`);
    return;
  }
  if (event.type === "agent:start") {
    if (verboseAgents) {
      console.log(`agent:开始 ${event.label ?? "（未命名）"}`);
    }
    return;
  }
  if (event.type === "agent:end") {
    if (verboseAgents) {
      console.log(`agent:结束 ${event.label ?? "（未命名）"}`);
      if (event.toolCalls?.length) {
        console.log(`agent:工具调用 ${event.toolCalls.map(toolCall => `${toolCall.name}:${toolCall.ok ? "ok" : "failed"}`).join(", ")}`);
      }
    }
    return;
  }
  if (event.type === "agent:error") {
    console.error(`agent:错误 ${event.label ?? "（未命名）"} ${event.message ?? ""}`);
  }
}
