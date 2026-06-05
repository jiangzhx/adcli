import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { createOceanEngineWorkflowTools } from "../../src/oceanengine/tools";
import { runWorkflowFile } from "../../src/workflow-runtime/run-workflow";
import type { AgentBackend, AgentRequest } from "../../src/workflow-runtime/types";

test("OceanEngine workflow uses the single porting guide", async () => {
  const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-oceanengine-workflow-"));
  const sourceRoot = path.join(tmp, "ad_open_sdk_go");
  const apiPath = path.join(sourceRoot, "api", "api_oauth2_advertiser_get.go");
  const codegenRoot = path.resolve(import.meta.dirname, "../..");
  const workflowPath = path.join(codegenRoot, "src", "oceanengine", "phase-a-port.workflow.js");
  const calls: AgentRequest[] = [];
  const backend: AgentBackend = {
    async run(request) {
      calls.push(request);
      if (request.label?.startsWith("schedule:")) {
        return {
          output: {
            route: "agent_port",
            reason: "API classification requires agent porting",
            confidence: "high",
            implementationToolNames: ["oceanengine_analyze_ast", "oceanengine_verify_port"],
          },
        };
      }
      if (request.label?.startsWith("verify:")) {
        return { output: { ok: true, issues: [] } };
      }
      return {
        output: {
          ts_path: path.join(sourceRoot, "models", "model_sample.ts"),
          confidence: "high",
          todos: 0,
          ts_loc: 1,
        },
      };
    },
  };
  const previousEnv = snapshotEnv([
    "ADCLI_CODEGEN_ROOT",
    "ADCLI_WORKFLOW_INPUT",
    "ADCLI_WORKFLOW_SOURCE_ROOT",
    "ADCLI_WORKFLOW_OUTPUT_ROOT",
    "ADCLI_WORKFLOW_INCLUDE",
    "ADCLI_WORKFLOW_SKIP_EXISTING",
    "ADCLI_WORKFLOW_VERIFY_MODE",
  ]);

  try {
    await mkdir(path.dirname(apiPath), { recursive: true });
    await writeFile(apiPath, sampleGoApi());
    process.env.ADCLI_CODEGEN_ROOT = codegenRoot;
    process.env.ADCLI_WORKFLOW_INPUT = apiPath;
    process.env.ADCLI_WORKFLOW_SOURCE_ROOT = sourceRoot;
    process.env.ADCLI_WORKFLOW_OUTPUT_ROOT = sourceRoot;
    process.env.ADCLI_WORKFLOW_INCLUDE = "api/*.go";
    process.env.ADCLI_WORKFLOW_SKIP_EXISTING = "0";
    process.env.ADCLI_WORKFLOW_VERIFY_MODE = "agent";

    const result = await runWorkflowFile(workflowPath, {
      agentBackend: backend,
      defaultConcurrency: 1,
      tools: createOceanEngineWorkflowTools(),
    });
    const schedulePrompt = calls.find(call => call.label === "schedule:api/api_oauth2_advertiser_get")?.prompt ?? "";
    const implementPrompt = calls.find(call => call.label === "impl:api/api_oauth2_advertiser_get")?.prompt ?? "";
    const implementCall = calls.find(call => call.label === "impl:api/api_oauth2_advertiser_get");

    assert.equal((result.value as { total: number }).total, 1);
    assert.match(schedulePrompt, /Phase-A 调度 agent/);
    assert.match(schedulePrompt, /"classification": "api"/);
    assert.doesNotMatch(schedulePrompt, /"ast":/);
    assert.match(implementPrompt, /本地 AST 分类结果：api/);
    assert.match(implementPrompt, /调度结果/);
    assert.match(implementPrompt, /PORTING\.md/);
    assert.doesNotMatch(implementPrompt, /PORTING_MODEL\.md/);
    assert.doesNotMatch(implementPrompt, /PORTING_API\.md/);
    assert.doesNotMatch(implementPrompt, /PORTING_RUNTIME\.md/);
    assert.deepEqual(implementCall?.toolNames, ["oceanengine_analyze_ast", "oceanengine_verify_port"]);
  } finally {
    restoreEnv(previousEnv);
    await rm(tmp, { force: true, recursive: true });
  }
});

test("OceanEngine workflow tells the agent when a file is a model", async () => {
  const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-oceanengine-model-workflow-"));
  const sourceRoot = path.join(tmp, "ad_open_sdk_go");
  const goPath = path.join(sourceRoot, "models", "model_oauth2_access_token_request.go");
  const tsPath = path.join(sourceRoot, "models", "model_oauth2_access_token_request.ts");
  const codegenRoot = path.resolve(import.meta.dirname, "../..");
  const workflowPath = path.join(codegenRoot, "src", "oceanengine", "phase-a-port.workflow.js");
  const calls: AgentRequest[] = [];
  const backend: AgentBackend = {
    async run(request) {
      calls.push(request);
      return {
        output: {
          route: "local_model_codegen",
          reason: "Model classification allows local generation",
          confidence: "high",
          implementationToolNames: [],
        },
      };
    },
  };
  const previousEnv = snapshotEnv([
    "ADCLI_CODEGEN_ROOT",
    "ADCLI_WORKFLOW_INPUT",
    "ADCLI_WORKFLOW_SOURCE_ROOT",
    "ADCLI_WORKFLOW_OUTPUT_ROOT",
    "ADCLI_WORKFLOW_INCLUDE",
    "ADCLI_WORKFLOW_SKIP_EXISTING",
    "ADCLI_WORKFLOW_VERIFY_MODE",
  ]);

  try {
    await mkdir(path.dirname(goPath), { recursive: true });
    await writeFile(
      goPath,
      `package models

type Oauth2AccessTokenRequest struct {
  AppId *int64 \`json:"app_id,omitempty"\`
  AuthCode string \`json:"auth_code"\`
}
`,
    );
    process.env.ADCLI_CODEGEN_ROOT = codegenRoot;
    process.env.ADCLI_WORKFLOW_INPUT = goPath;
    process.env.ADCLI_WORKFLOW_SOURCE_ROOT = sourceRoot;
    process.env.ADCLI_WORKFLOW_OUTPUT_ROOT = sourceRoot;
    process.env.ADCLI_WORKFLOW_INCLUDE = "models/*.go";
    process.env.ADCLI_WORKFLOW_SKIP_EXISTING = "0";
    process.env.ADCLI_WORKFLOW_VERIFY_MODE = "local";

    const result = await runWorkflowFile(workflowPath, {
      agentBackend: backend,
      defaultConcurrency: 1,
      tools: createOceanEngineWorkflowTools(),
    });
    const value = result.value as { clean: number; results: Array<{ status: string; ts: string }> };
    const prompt = calls[0]?.prompt ?? "";

    assert.equal(value.clean, 1);
    assert.equal(value.results[0].status, "clean");
    assert.equal(value.results[0].ts, tsPath);
    assert.equal(calls.length, 1);
    assert.equal(calls[0]?.label, "schedule:models/model_oauth2_access_token_request");
    assert.match(prompt, /Phase-A 调度 agent/);
    assert.match(prompt, /"classification": "model"/);
    assert.doesNotMatch(prompt, /"ast":/);
    assert.match(prompt, /local_model_codegen/);
    assert.doesNotMatch(prompt, /由你自己判断它是 API、model、runtime\/helper/);
    assert.doesNotMatch(prompt, /先用 Bash 调用 AST analyzer/);
    assert.doesNotMatch(prompt, /bun run analyze:oceanengine/);
    assert.doesNotMatch(prompt, /PORTING\.md/);
    assert.equal(calls[0]?.toolNames, undefined);
    assert.equal(calls[0]?.tools, undefined);
    assert.equal(calls[0]?.allowedTools, undefined);
  } finally {
    restoreEnv(previousEnv);
    await rm(tmp, { force: true, recursive: true });
  }
});

test("OceanEngine workflow uses local verify and only calls Fix when AST checks fail", async () => {
  const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-oceanengine-local-verify-"));
  const sourceRoot = path.join(tmp, "ad_open_sdk_go");
  const goPath = path.join(sourceRoot, "api", "api_oauth2_advertiser_get.go");
  const tsPath = path.join(sourceRoot, "api", "api_oauth2_advertiser_get.ts");
  const codegenRoot = path.resolve(import.meta.dirname, "../..");
  const workflowPath = path.join(codegenRoot, "src", "oceanengine", "phase-a-port.workflow.js");
  const calls: AgentRequest[] = [];
  const backend: AgentBackend = {
    async run(request) {
      calls.push(request);
      if (request.label?.startsWith("schedule:")) {
        return {
          output: {
            route: "agent_port",
            reason: "API classification requires agent porting",
            confidence: "high",
            implementationToolNames: ["oceanengine_analyze_ast", "oceanengine_verify_port"],
          },
        };
      }
      if (request.label?.startsWith("verify:")) {
        throw new Error("启用本地校验时不应运行 AI 校验");
      }
      if (request.label?.startsWith("fix:")) {
        await writeFile(tsPath, faithfulTsApi());
        return { output: { applied: 3, remaining: 0, note: "已修复本地校验问题" } };
      }
      await writeFile(tsPath, driftingTsApi());
      return {
        output: {
          ts_path: tsPath,
          confidence: "high",
          todos: 0,
          ts_loc: 22,
        },
      };
    },
  };
  const previousEnv = snapshotEnv([
    "ADCLI_CODEGEN_ROOT",
    "ADCLI_WORKFLOW_INPUT",
    "ADCLI_WORKFLOW_SOURCE_ROOT",
    "ADCLI_WORKFLOW_OUTPUT_ROOT",
    "ADCLI_WORKFLOW_INCLUDE",
    "ADCLI_WORKFLOW_SKIP_EXISTING",
    "ADCLI_WORKFLOW_VERIFY_MODE",
  ]);

  try {
    await mkdir(path.dirname(goPath), { recursive: true });
    await writeFile(goPath, sampleGoApi());
    process.env.ADCLI_CODEGEN_ROOT = codegenRoot;
    process.env.ADCLI_WORKFLOW_INPUT = goPath;
    process.env.ADCLI_WORKFLOW_SOURCE_ROOT = sourceRoot;
    process.env.ADCLI_WORKFLOW_OUTPUT_ROOT = sourceRoot;
    process.env.ADCLI_WORKFLOW_INCLUDE = "api/*.go";
    process.env.ADCLI_WORKFLOW_SKIP_EXISTING = "0";
    process.env.ADCLI_WORKFLOW_VERIFY_MODE = "local";

    const result = await runWorkflowFile(workflowPath, {
      agentBackend: backend,
      defaultConcurrency: 1,
      tools: createOceanEngineWorkflowTools(),
    });
    const value = result.value as { fixed: number; clean: number; results: Array<{ status: string; remaining: number }> };

    assert.equal(value.clean, 0);
    assert.equal(value.fixed, 1);
    assert.equal(value.results[0].status, "fixed");
    assert.equal(value.results[0].remaining, 0);
    assert.deepEqual(calls.map(call => call.label), [
      "schedule:api/api_oauth2_advertiser_get",
      "impl:api/api_oauth2_advertiser_get",
      "fix:api/api_oauth2_advertiser_get",
    ]);
  } finally {
    restoreEnv(previousEnv);
    await rm(tmp, { force: true, recursive: true });
  }
});

test("OceanEngine workflow stops when scheduling does not return structured output", async () => {
  const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-oceanengine-invalid-schedule-"));
  const sourceRoot = path.join(tmp, "ad_open_sdk_go");
  const goPath = path.join(sourceRoot, "models", "model_oauth2_access_token_request.go");
  const codegenRoot = path.resolve(import.meta.dirname, "../..");
  const workflowPath = path.join(codegenRoot, "src", "oceanengine", "phase-a-port.workflow.js");
  const calls: AgentRequest[] = [];
  const backend: AgentBackend = {
    async run(request) {
      calls.push(request);
      if (request.label?.startsWith("impl:") || request.label?.startsWith("verify:") || request.label?.startsWith("fix:")) {
        throw new Error("调度失败后不应进入实现、校验或修复");
      }
      return {
        output: "Failed to authenticate. API Error: 401 Authentication Fails",
      };
    },
  };
  const previousEnv = snapshotEnv([
    "ADCLI_CODEGEN_ROOT",
    "ADCLI_WORKFLOW_INPUT",
    "ADCLI_WORKFLOW_SOURCE_ROOT",
    "ADCLI_WORKFLOW_OUTPUT_ROOT",
    "ADCLI_WORKFLOW_INCLUDE",
    "ADCLI_WORKFLOW_SKIP_EXISTING",
    "ADCLI_WORKFLOW_VERIFY_MODE",
  ]);

  try {
    await mkdir(path.dirname(goPath), { recursive: true });
    await writeFile(
      goPath,
      `package models

type Oauth2AccessTokenRequest struct {
  AppId *int64 \`json:"app_id,omitempty"\`
}
`,
    );
    process.env.ADCLI_CODEGEN_ROOT = codegenRoot;
    process.env.ADCLI_WORKFLOW_INPUT = goPath;
    process.env.ADCLI_WORKFLOW_SOURCE_ROOT = sourceRoot;
    process.env.ADCLI_WORKFLOW_OUTPUT_ROOT = sourceRoot;
    process.env.ADCLI_WORKFLOW_INCLUDE = "models/*.go";
    process.env.ADCLI_WORKFLOW_SKIP_EXISTING = "0";
    process.env.ADCLI_WORKFLOW_VERIFY_MODE = "local";

    const result = await runWorkflowFile(workflowPath, {
      agentBackend: backend,
      defaultConcurrency: 1,
      tools: createOceanEngineWorkflowTools(),
    });
    const value = result.value as { clean: number; fixed: number; failed: string[]; results: Array<{ status: string }> };

    assert.equal(value.clean, 0);
    assert.equal(value.fixed, 0);
    assert.deepEqual(value.failed, [goPath]);
    assert.equal(value.results[0].status, "schedule-failed");
    assert.deepEqual(calls.map(call => call.label), ["schedule:models/model_oauth2_access_token_request"]);
  } finally {
    restoreEnv(previousEnv);
    await rm(tmp, { force: true, recursive: true });
  }
});

test("OceanEngine workflow does not verify invalid implementation output", async () => {
  const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-oceanengine-invalid-impl-"));
  const sourceRoot = path.join(tmp, "ad_open_sdk_go");
  const goPath = path.join(sourceRoot, "api", "api_oauth2_advertiser_get.go");
  const codegenRoot = path.resolve(import.meta.dirname, "../..");
  const workflowPath = path.join(codegenRoot, "src", "oceanengine", "phase-a-port.workflow.js");
  const calls: AgentRequest[] = [];
  const backend: AgentBackend = {
    async run(request) {
      calls.push(request);
      if (request.label?.startsWith("schedule:")) {
        return {
          output: {
            route: "agent_port",
            reason: "API classification requires agent porting",
            confidence: "high",
            implementationToolNames: ["oceanengine_analyze_ast", "oceanengine_verify_port"],
          },
        };
      }
      if (request.label?.startsWith("verify:") || request.label?.startsWith("fix:")) {
        throw new Error("无效实现结果不应进入校验或修复");
      }
      return {
        output: "Failed to authenticate. API Error: 401 Authentication Fails",
      };
    },
  };
  const previousEnv = snapshotEnv([
    "ADCLI_CODEGEN_ROOT",
    "ADCLI_WORKFLOW_INPUT",
    "ADCLI_WORKFLOW_SOURCE_ROOT",
    "ADCLI_WORKFLOW_OUTPUT_ROOT",
    "ADCLI_WORKFLOW_INCLUDE",
    "ADCLI_WORKFLOW_SKIP_EXISTING",
    "ADCLI_WORKFLOW_VERIFY_MODE",
  ]);

  try {
    await mkdir(path.dirname(goPath), { recursive: true });
    await writeFile(goPath, sampleGoApi());
    process.env.ADCLI_CODEGEN_ROOT = codegenRoot;
    process.env.ADCLI_WORKFLOW_INPUT = goPath;
    process.env.ADCLI_WORKFLOW_SOURCE_ROOT = sourceRoot;
    process.env.ADCLI_WORKFLOW_OUTPUT_ROOT = sourceRoot;
    process.env.ADCLI_WORKFLOW_INCLUDE = "api/*.go";
    process.env.ADCLI_WORKFLOW_SKIP_EXISTING = "0";
    process.env.ADCLI_WORKFLOW_VERIFY_MODE = "local";

    const result = await runWorkflowFile(workflowPath, {
      agentBackend: backend,
      defaultConcurrency: 1,
      tools: createOceanEngineWorkflowTools(),
    });
    const value = result.value as { clean: number; fixed: number; failed: string[]; results: Array<{ status: string }> };

    assert.equal(value.clean, 0);
    assert.equal(value.fixed, 0);
    assert.deepEqual(value.failed, [goPath]);
    assert.equal(value.results[0].status, "impl-failed");
    assert.deepEqual(calls.map(call => call.label), [
      "schedule:api/api_oauth2_advertiser_get",
      "impl:api/api_oauth2_advertiser_get",
    ]);
  } finally {
    restoreEnv(previousEnv);
    await rm(tmp, { force: true, recursive: true });
  }
});

function snapshotEnv(keys: string[]): Record<string, string | undefined> {
  return Object.fromEntries(keys.map(key => [key, process.env[key]]));
}

function restoreEnv(snapshot: Record<string, string | undefined>): void {
  for (const [key, value] of Object.entries(snapshot)) {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
}

function sampleGoApi() {
  return `package api

import (
  "context"
  "net/http"
  "net/url"
)

type Oauth2AdvertiserGetApiService service

type ApiOpenApiOauth2AdvertiserGetGetRequest struct {
  ctx context.Context
  ApiService *Oauth2AdvertiserGetApiService
  accessToken *string
}

func (a *Oauth2AdvertiserGetApiService) getExecute(r *ApiOpenApiOauth2AdvertiserGetGetRequest) (*Oauth2AdvertiserGetResponse, *http.Response, error) {
  var (
    localVarHTTPMethod = http.MethodGet
  )
  localBasePath := a.client.Cfg.GetBasePath()
  localVarPath := localBasePath + "/open_api/oauth2/advertiser/get/"
  localVarQueryParams := url.Values{}
  if r.accessToken != nil {
    parameterAddToHeaderOrQuery(localVarQueryParams, "access_token", r.accessToken)
  }
  localVarHTTPContentTypes := []string{}
  return localVarReturnValue, localVarHTTPResponse, nil
}
`;
}

function driftingTsApi() {
  return `import { ApiClient, type ApiResponse } from "./client";
import type { Oauth2AdvertiserGetResponse } from "../models/index";

export interface Oauth2AdvertiserGetApiOpenApiOauth2AdvertiserGetGetRequest {
  accessToken?: string;
}

export class Oauth2AdvertiserGetApi {
  constructor(private apiClient = new ApiClient()) {}

  async openApiOauth2AdvertiserGetGetWithHttpInfo(
    request: Oauth2AdvertiserGetApiOpenApiOauth2AdvertiserGetGetRequest,
  ): Promise<ApiResponse<Oauth2AdvertiserGetResponse>> {
    return this.apiClient.requestWithHttpInfo<Oauth2AdvertiserGetResponse>({
      method: "POST",
      path: "/wrong/",
      queryParams: [{ name: "token", value: request.accessToken }],
    });
  }
}
`;
}

function faithfulTsApi() {
  return `import { ApiClient, type ApiResponse } from "./client";
import type { Oauth2AdvertiserGetResponse } from "../models/index";

export interface Oauth2AdvertiserGetApiOpenApiOauth2AdvertiserGetGetRequest {
  accessToken?: string;
}

export class Oauth2AdvertiserGetApi {
  constructor(private apiClient = new ApiClient()) {}

  async openApiOauth2AdvertiserGetGetWithHttpInfo(
    request: Oauth2AdvertiserGetApiOpenApiOauth2AdvertiserGetGetRequest,
  ): Promise<ApiResponse<Oauth2AdvertiserGetResponse>> {
    const queryParams = [];
    if (request.accessToken != null) {
      queryParams.push({ name: "access_token", value: request.accessToken });
    }
    return this.apiClient.requestWithHttpInfo<Oauth2AdvertiserGetResponse>({
      method: "GET",
      path: "/open_api/oauth2/advertiser/get/",
      queryParams,
    });
  }
}
`;
}
