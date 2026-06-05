import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { createOceanEngineWorkflowTools } from "../../src/oceanengine/tools";

test("OceanEngine workflow tools expose AST analyze, model generate, and port verify", async () => {
  const names = createOceanEngineWorkflowTools().map(tool => tool.name).sort();

  assert.deepEqual(names, [
    "oceanengine_analyze_ast",
    "oceanengine_generate_model",
    "oceanengine_verify_port",
  ]);
});

test("oceanengine_analyze_ast returns Go AST facts through the ordinary tool interface", async () => {
  const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-oceanengine-tools-"));
  const goPath = path.join(tmp, "api_oauth2_advertiser_get.go");

  try {
    await writeFile(
      goPath,
      `package api

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
  localVarHTTPMethod := http.MethodGet
  localBasePath := a.client.Cfg.GetBasePath()
  localVarPath := localBasePath + "/open_api/oauth2/advertiser/get/"
  localVarQueryParams := url.Values{}
  if r.accessToken != nil {
    parameterAddToHeaderOrQuery(localVarQueryParams, "access_token", r.accessToken)
  }
  return localVarReturnValue, localVarHTTPResponse, nil
}
`,
    );

    const analyzeTool = createOceanEngineWorkflowTools().find(tool => tool.name === "oceanengine_analyze_ast");
    assert.ok(analyzeTool);
    const result = await analyzeTool.run({ goPath }) as { kind: string; httpMethod: string; path: string };

    assert.equal(result.kind, "api");
    assert.equal(result.httpMethod, "GET");
    assert.equal(result.path, "/open_api/oauth2/advertiser/get/");
  } finally {
    await rm(tmp, { force: true, recursive: true });
  }
});
