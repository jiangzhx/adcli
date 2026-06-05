import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { describe, expect, test } from "bun:test";

import { analyzeGoFile } from "../../src/oceanengine/ast-analyzer";

describe("OceanEngine Go AST analyzer", () => {
  test("extracts API facts with the official Go parser", async () => {
    const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-goast-"));
    const goFile = path.join(tmp, "api_oauth2_advertiser_get.go");

    try {
      await writeFile(
        goFile,
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
`,
      );

      const facts = await analyzeGoFile(goFile);

      expect(facts.kind).toBe("api");
      if (facts.kind !== "api") {
        throw new Error("expected API facts");
      }
      expect(facts.className).toBe("Oauth2AdvertiserGetApi");
      expect(facts.methodName).toBe("openApiOauth2AdvertiserGetGet");
      expect(facts.httpMethod).toBe("GET");
      expect(facts.path).toBe("/open_api/oauth2/advertiser/get/");
      expect(facts.responseType).toBe("Oauth2AdvertiserGetResponse");
      expect(facts.params).toEqual([{ name: "accessToken", type: "string", required: false }]);
      expect(facts.queryParams).toEqual([{ name: "access_token", source: "accessToken" }]);
      expect(facts.checks).toEqual([]);
    } finally {
      await rm(tmp, { force: true, recursive: true });
    }
  });

  test("does not classify runtime structs without JSON model fields as models", async () => {
    const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-goast-"));
    const goFile = path.join(tmp, "client.go");

    try {
      await writeFile(
        goFile,
        `package api

type APIClient struct {
  Cfg *Configuration
}

func (c *APIClient) prepareRequest() {}
`,
      );

      const facts = await analyzeGoFile(goFile);

      expect(facts.kind).toBe("unknown");
    } finally {
      await rm(tmp, { force: true, recursive: true });
    }
  });
});
