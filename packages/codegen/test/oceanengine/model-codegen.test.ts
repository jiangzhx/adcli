import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { describe, expect, test } from "bun:test";

import { analyzeGoFile } from "../../src/oceanengine/ast-analyzer";
import { generateModelFromGoFile } from "../../src/oceanengine/model-codegen";

describe("OceanEngine model codegen", () => {
  test("extracts model facts from Go AST and emits TypeScript with the TS printer", async () => {
    const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-model-codegen-"));
    const goPath = path.join(tmp, "models", "model_oauth2_access_token_request.go");
    const tsPath = path.join(tmp, "models", "model_oauth2_access_token_request.ts");

    try {
      await mkdir(path.dirname(goPath), { recursive: true });
      await writeFile(
        goPath,
        `package models

type Oauth2AccessTokenRequest struct {
  AppId *int64 \`json:"app_id,omitempty"\`
  AuthCode string \`json:"auth_code"\`
  Tags []*ReportCustomConfigGetV30DataTopics \`json:"tags,omitempty"\`
  Metadata map[string]interface{} \`json:"metadata,omitempty"\`
  DeliverEnd *NullableTime \`json:"deliver_end,omitempty"\`
}
`,
      );

      const facts = await analyzeGoFile(goPath);
      expect(facts.kind).toBe("model");
      if (facts.kind !== "model") {
        throw new Error("expected model facts");
      }
      expect(facts.model.kind).toBe("interface");
      if (facts.model.kind !== "interface") {
        throw new Error("expected interface model facts");
      }
      expect(facts.model.fields).toEqual([
        { jsonName: "app_id", goName: "AppId", goType: "*int64", required: false },
        { jsonName: "auth_code", goName: "AuthCode", goType: "string", required: true },
        { jsonName: "tags", goName: "Tags", goType: "[]*ReportCustomConfigGetV30DataTopics", required: false },
        { jsonName: "metadata", goName: "Metadata", goType: "map[string]interface{}", required: false },
        { jsonName: "deliver_end", goName: "DeliverEnd", goType: "*NullableTime", required: false },
      ]);

      const result = await generateModelFromGoFile({ goPath, tsPath });
      const tsSource = await readFile(tsPath, "utf8");

      expect(result).toEqual({
        tsPath,
        modelName: "Oauth2AccessTokenRequest",
        modelKind: "interface",
        tsLoc: 8,
      });
      expect(tsSource).toContain('import type { ReportCustomConfigGetV30DataTopics } from "../models/index";');
      expect(tsSource).toContain("export interface Oauth2AccessTokenRequest");
      expect(tsSource).toContain("app_id?: number | string;");
      expect(tsSource).toContain("auth_code: string;");
      expect(tsSource).toContain("tags?: ReportCustomConfigGetV30DataTopics[];");
      expect(tsSource).toContain("metadata?: Record<string, unknown>;");
      expect(tsSource).toContain("deliver_end?: string | null;");
    } finally {
      await rm(tmp, { force: true, recursive: true });
    }
  });

  test("emits const-object enums deterministically", async () => {
    const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-model-codegen-"));
    const goPath = path.join(tmp, "models", "model_report_custom_config_get_v3_0_data_topics.go");
    const tsPath = path.join(tmp, "models", "model_report_custom_config_get_v3_0_data_topics.ts");

    try {
      await mkdir(path.dirname(goPath), { recursive: true });
      await writeFile(
        goPath,
        `package models

type ReportCustomConfigGetV30DataTopics string

const (
  BASIC_DATA_ReportCustomConfigGetV30DataTopics ReportCustomConfigGetV30DataTopics = "BASIC_DATA"
  CREATIVE_DATA_ReportCustomConfigGetV30DataTopics ReportCustomConfigGetV30DataTopics = "CREATIVE_DATA"
)
`,
      );

      const result = await generateModelFromGoFile({ goPath, tsPath });
      const tsSource = await readFile(tsPath, "utf8");

      expect(result.modelKind).toBe("enum");
      expect(tsSource).toContain("export const ReportCustomConfigGetV30DataTopics = {");
      expect(tsSource).toContain('BASIC_DATA: "BASIC_DATA"');
      expect(tsSource).toContain("} as const;");
      expect(tsSource).toContain(
        "export type ReportCustomConfigGetV30DataTopics = (typeof ReportCustomConfigGetV30DataTopics)[keyof typeof ReportCustomConfigGetV30DataTopics];",
      );
    } finally {
      await rm(tmp, { force: true, recursive: true });
    }
  });
});
