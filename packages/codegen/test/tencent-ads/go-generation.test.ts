import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { mkdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";
import { generateFromGoSdk } from "../../src/tencent-ads/generate-from-go-sdk";

describe("tencent ads go generation workflow", () => {
  test("emits runtime configuration from Go config packages", async () => {
    const root = mkdtempSync(join(tmpdir(), "tencent-ads-go-sdk-"));
    const outDir = mkdtempSync(join(tmpdir(), "tencent-ads-node-sdk-"));
    try {
      await mkdir(join(root, "pkg/api/v3"), { recursive: true });
      await mkdir(join(root, "pkg/config/v3"), { recursive: true });
      await mkdir(join(root, "pkg/model/v3"), { recursive: true });
      writeFileSync(join(root, "pkg/api/api_campaigns.go"), goApiSource("Campaigns", "/campaigns/get"));
      writeFileSync(join(root, "pkg/api/v3/api_adgroups.go"), goApiSource("Adgroups", "/adgroups/get"));
      writeFileSync(join(root, "pkg/config/configuration.go"), goConfigSource("https://sandbox-api.e.qq.com/v1.3"));
      writeFileSync(join(root, "pkg/config/v3/configuration.go"), goConfigSource("https://api.e.qq.com/v3.0"));
      writeFileSync(join(root, "pkg/model/model_api_error_struct.go"), goModelSource("ApiErrorStruct"));
      writeFileSync(join(root, "pkg/model/model_campaigns_get_response_data.go"), goModelSource("CampaignsGetResponseData"));
      writeFileSync(join(root, "pkg/model/v3/model_adgroups_get_response.go"), goV3ResponseSource("AdgroupsGetResponse"));
      writeFileSync(join(root, "pkg/model/v3/model_adgroups_get_response_data.go"), goModelSource("AdgroupsGetResponseData"));

      const result = await generateFromGoSdk({ goSdkRoot: root, outputDir: outDir });

      expect(result.configurations.v1.basePath).toBe("https://sandbox-api.e.qq.com/v1.3");
      expect(result.configurations.v3.basePath).toBe("https://api.e.qq.com/v3.0");
      expect(readFileSync(join(outDir, "config", "configuration.ts"), "utf8")).toContain(
        'basePath = "https://sandbox-api.e.qq.com/v1.3"',
      );
      expect(readFileSync(join(outDir, "config", "v3", "configuration.ts"), "utf8")).toContain(
        'basePath = "https://api.e.qq.com/v3.0"',
      );
      expect(readFileSync(join(outDir, "api", "client.ts"), "utf8")).toContain(
        "Generated from tencentad/marketing-api-go-sdk pkg/api/client.go",
      );
      expect(readFileSync(join(outDir, "api", "v3", "client.ts"), "utf8")).toContain(
        "Generated from tencentad/marketing-api-go-sdk pkg/api/v3/client.go",
      );
      expect(existsSync(join(outDir, "runtime"))).toBe(false);
      const index = readFileSync(join(outDir, "index.ts"), "utf8");
      expect(index).toContain('export * from "./api/index";');
      expect(index).not.toContain("CommonReqApi");
      const campaignsApi = readFileSync(join(outDir, "api", "api_campaigns.ts"), "utf8");
      expect(campaignsApi).toContain('import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";');
      expect(campaignsApi).toContain('from "../model/index";');
      expect(readFileSync(join(outDir, "api", "v3", "api_adgroups.ts"), "utf8")).toContain(
        'import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";',
      );
      expect(readFileSync(join(outDir, "api", "index.ts"), "utf8")).toContain('export * from "./api_campaigns";');
      expect(readFileSync(join(outDir, "api", "v3", "index.ts"), "utf8")).toContain('export * from "./api_adgroups";');
      expect(readFileSync(join(outDir, "model", "index.ts"), "utf8")).toContain('export * from "./model_campaigns_get_response_data";');
      expect(readFileSync(join(outDir, "model", "v3", "index.ts"), "utf8")).toContain('export * from "./model_adgroups_get_response_data";');
      expect(readFileSync(join(outDir, "model", "v3", "index.ts"), "utf8")).toContain('export type { ApiErrorStruct } from "../index";');
      const manifest = JSON.parse(readFileSync(join(outDir, "manifest.json"), "utf8")) as Record<string, unknown>;
      expect(manifest.configurations).toEqual(result.configurations);
    } finally {
      await rm(root, { recursive: true, force: true });
      await rm(outDir, { recursive: true, force: true });
    }
  });
});

function goConfigSource(basePath: string) {
  return `
package config

type Configuration struct {
  BasePath string
  DefaultHeader map[string]string
  UserAgent string
}

func NewConfiguration() *Configuration {
  cfg := &Configuration{
    BasePath: ${JSON.stringify(basePath)},
    DefaultHeader: make(map[string]string),
    UserAgent: "Tencent Ads Marketing API SDK",
  }
  return cfg
}
`;
}

function goApiSource(serviceName: string, path: string) {
  return `
package api

type ${serviceName}ApiService service

func (a *${serviceName}ApiService) Get(ctx context.Context, accountId int64) (${serviceName}GetResponseData, http.Header, error) {
  localVarHttpMethod := strings.ToUpper("Get")
  localVarPath := a.client.Cfg.BasePath + ${JSON.stringify(path)}
  localVarQueryParams := url.Values{}
  localVarQueryParams.Add("account_id", parameterToString(accountId, ""))
  localVarHttpContentTypes := []string{"text/plain"}
  localVarHttpHeaderAccepts := []string{"application/json"}
}
`;
}

function goModelSource(name: string) {
  return `
package model

type ${name} struct {
  List []string \`json:"list,omitempty"\`
}
`;
}

function goV3ResponseSource(name: string) {
  return `
package model

import (
  "github.com/tencentad/marketing-api-go-sdk/pkg/model"
)

type ${name} struct {
  Errors *[]model.ApiErrorStruct \`json:"errors,omitempty"\`
  Data *AdgroupsGetResponseData \`json:"data,omitempty"\`
}
`;
}
