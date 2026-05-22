import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { mkdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";
import { generateFromGoSdk } from "../../src/oceanengine/generate-from-go-sdk";

describe("go generation workflow", () => {
  test("scans Go api and model directories and emits request object APIs", async () => {
    const root = mkdtempSync(join(tmpdir(), "oceanengine-go-sdk-"));
    const outDir = mkdtempSync(join(tmpdir(), "oceanengine-node-sdk-go-"));
    try {
      await mkdir(join(root, "api"), { recursive: true });
      await mkdir(join(root, "config"), { recursive: true });
      await mkdir(join(root, "models"), { recursive: true });
      writeFileSync(join(root, "api/api_report_custom_config_get_v30.go"), goApiSource());
      writeFileSync(join(root, "config/configuration.go"), goConfigSource());
      writeFileSync(join(root, "models/model_report_custom_config_get_v3_0_response.go"), goModelSource("ReportCustomConfigGetV30Response"));
      writeFileSync(join(root, "models/model_report_custom_config_get_v3_0_data_topics.go"), goEnumSource());

      const result = await generateFromGoSdk({ goSdkRoot: root, outputDir: outDir });

      expect(result.source).toBe("go");
      expect(result.apis).toBe(1);
      expect(result.models).toBe(2);
      expect(result.skipped).toEqual([]);
      expect(readFileSync(join(outDir, "api", "index.ts"), "utf8")).toContain('export * from "./api_report_custom_config_get_v30";');
      expect(readFileSync(join(outDir, "api", "client.ts"), "utf8")).toContain(
        "Generated from oceanengine/ad_open_sdk_go api/client.go",
      );
      expect(readFileSync(join(outDir, "api", "api_common.ts"), "utf8")).toContain(
        "Generated from oceanengine/ad_open_sdk_go api/api_common.go",
      );
      expect(readFileSync(join(outDir, "config", "configuration.ts"), "utf8")).toContain('host = "api.oceanengine.com"');
      const apiOutput = readFileSync(join(outDir, "api", "api_report_custom_config_get_v30.ts"), "utf8");
      expect(apiOutput).toContain("Generated from oceanengine/ad_open_sdk_go api/api_report_custom_config_get_v30.go");
      expect(apiOutput).toContain("export interface ReportCustomConfigGetV30ApiOpenApiV30ReportCustomConfigGetGetRequest");
      expect(apiOutput).toContain("page?: number;");
      expect(apiOutput).toContain("async openApiV30ReportCustomConfigGetGet(request:");
      expect(readFileSync(join(outDir, "models", "index.ts"), "utf8")).toContain(
        'export * from "./model_report_custom_config_get_v3_0_data_topics";',
      );
      expect(readFileSync(join(outDir, "index.ts"), "utf8")).toContain('export * from "./api/index";');
      const manifest = JSON.parse(readFileSync(join(outDir, "manifest.json"), "utf8")) as Record<string, unknown>;
      expect(manifest.source).toBe("go");
      expect(manifest.sourceVersion).toBe("1.1.87");
      expect("goSdkRoot" in manifest).toBe(false);
      expect(existsSync(join(outDir, "runtime"))).toBe(false);
      expect(existsSync(join(outDir, "apis.ts"))).toBe(false);
      expect(readFileSync(join(outDir, "api", "api_report_custom_config_get_v30.ts"), "utf8")).not.toContain(root);
    } finally {
      await rm(root, { recursive: true, force: true });
      await rm(outDir, { recursive: true, force: true });
    }
  });
});

function goConfigSource() {
  return `
package config

const Version = "1.1.87"

type Configuration struct {
  Host string
  Scheme string
  UserAgent string
}

func NewConfiguration() *Configuration {
  cfg := &Configuration{
    UserAgent: "Bytedance Ads Openapi SDK",
    Host: "api.oceanengine.com",
    Scheme: "https",
  }
  return cfg
}
`;
}

function goApiSource() {
  return `
package api

type ReportCustomConfigGetV30ApiService service

type ApiOpenApiV30ReportCustomConfigGetGetRequest struct {
	ctx          context.Context
	ApiService   *ReportCustomConfigGetV30ApiService
	advertiserId *int64
	dataTopics   *[]*ReportCustomConfigGetV30DataTopics
	page          *int32
}

func (a *ReportCustomConfigGetV30ApiService) getExecute(r *ApiOpenApiV30ReportCustomConfigGetGetRequest) (*ReportCustomConfigGetV30Response, *http.Response, error) {
	localVarHTTPMethod := http.MethodGet
	localBasePath := a.client.Cfg.GetBasePath()
	localVarPath := localBasePath + "/open_api/v3.0/report/custom/config/get/"
	localVarQueryParams := url.Values{}
	if r.advertiserId == nil {
		return localVarReturnValue, nil, ReportError("advertiserId is required and must be specified")
	}
	parameterAddToHeaderOrQuery(localVarQueryParams, "advertiser_id", r.advertiserId)
	parameterAddToHeaderOrQuery(localVarQueryParams, "data_topics", r.dataTopics)
	parameterAddToHeaderOrQuery(localVarQueryParams, "page", r.page)
	localVarHTTPContentTypes := []string{}
	return localVarReturnValue, localVarHTTPResponse, nil
}`;
}

function goModelSource(name: string) {
  return `
package models

type ${name} struct {
	Code *int64 \`json:"code,omitempty"\`
	Message string \`json:"message"\`
}`;
}

function goEnumSource() {
  return `
package models

type ReportCustomConfigGetV30DataTopics string

const (
	BASIC_DATA_ReportCustomConfigGetV30DataTopics ReportCustomConfigGetV30DataTopics = "BASIC_DATA"
)`;
}
