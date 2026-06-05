import type { ZodRawShape } from "zod";

export interface WorkflowToolDefinition {
  name: string;
  description: string;
  inputSchema: ZodRawShape;
  run(input: Record<string, unknown>): Promise<unknown> | unknown;
  alwaysLoad?: boolean;
}

export function resolveWorkflowTools(
  toolNames: string[] | undefined,
  availableTools: WorkflowToolDefinition[] = [],
): WorkflowToolDefinition[] | undefined {
  if (!toolNames || toolNames.length === 0) {
    return undefined;
  }
  const toolsByName = new Map(availableTools.map(tool => [tool.name, tool]));
  return toolNames.map(name => {
    const tool = toolsByName.get(name);
    if (!tool) {
      throw new Error(`未注册 workflow tool：${name}`);
    }
    return tool;
  });
}
