import type { AgentBackend, AgentRequest, AgentRunResult } from "../types";

export class EchoAgentBackend implements AgentBackend {
  async run(request: AgentRequest): Promise<AgentRunResult> {
    return {
      output: {
        ok: true,
        label: request.label,
        prompt: request.prompt,
      },
    };
  }
}
