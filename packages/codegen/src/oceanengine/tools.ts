import { z } from "zod";

import { analyzeGoFile } from "./ast-analyzer";
import { generateModelFromGoFile } from "./model-codegen";
import { verifyPortedFile } from "./local-verify";
import type { WorkflowToolDefinition } from "../workflow-runtime/tools";

export function createOceanEngineWorkflowTools(): WorkflowToolDefinition[] {
  return [
    {
      name: "oceanengine_analyze_ast",
      description: "分析一个 OceanEngine Go SDK 源文件，返回 API、model 或 unknown 的 Go AST facts。",
      inputSchema: {
        goPath: z.string().min(1).describe("Go 源文件绝对路径。"),
      },
      run: input => analyzeGoFile(String(input.goPath)),
      alwaysLoad: true,
    },
    {
      name: "oceanengine_generate_model",
      description: "当且仅当源文件已确认是纯 model struct/enum 时，从 Go 文件确定性生成对应 TypeScript model 文件。",
      inputSchema: {
        goPath: z.string().min(1).describe("Go model 源文件绝对路径。"),
        tsPath: z.string().min(1).describe("要写入的 TypeScript model 文件绝对路径。"),
      },
      run: input => generateModelFromGoFile({ goPath: String(input.goPath), tsPath: String(input.tsPath) }),
      alwaysLoad: true,
    },
    {
      name: "oceanengine_verify_port",
      description: "对照 Go AST facts 校验已迁移的 TypeScript 文件，返回本地 API 合同检查结果。",
      inputSchema: {
        goPath: z.string().min(1).describe("Go 源文件绝对路径。"),
        tsPath: z.string().min(1).describe("已迁移 TypeScript 文件绝对路径。"),
      },
      run: input => verifyPortedFile({ goPath: String(input.goPath), tsPath: String(input.tsPath) }),
      alwaysLoad: true,
    },
  ];
}
