import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { describe, expect, test } from "bun:test";

import { verifyPortedFile } from "../../src/oceanengine/local-verify";

describe("OceanEngine local port verifier", () => {
  test("finds API contract drift without using an AI verifier", async () => {
    const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-local-verify-"));
    const goFile = path.join(tmp, "api_oauth2_advertiser_get.go");
    const tsFile = path.join(tmp, "api_oauth2_advertiser_get.ts");

    try {
      await mkdir(tmp, { recursive: true });
      await writeFile(goFile, sampleGoApi());
      await writeFile(
        tsFile,
        `import { ApiClient, type ApiResponse } from "./client";
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
      queryParams: [
        { name: "token", value: request.accessToken },
      ],
    });
  }
}
`,
      );

      const result = await verifyPortedFile({ goPath: goFile, tsPath: tsFile });

      expect(result.ok).toBe(false);
      expect(result.issues.map(issue => issue.rule)).toContain("api.httpMethod");
      expect(result.issues.map(issue => issue.rule)).toContain("api.path");
      expect(result.issues.map(issue => issue.rule)).toContain("api.queryParams");
      expect(result.issues.every(issue => issue.severity === "must-fix")).toBe(true);
    } finally {
      await rm(tmp, { force: true, recursive: true });
    }
  });

  test("accepts a faithful API port", async () => {
    const tmp = await mkdtemp(path.join(os.tmpdir(), "adcli-local-verify-"));
    const goFile = path.join(tmp, "api_oauth2_advertiser_get.go");
    const tsFile = path.join(tmp, "api_oauth2_advertiser_get.ts");

    try {
      await writeFile(goFile, sampleGoApi());
      await writeFile(tsFile, faithfulTsApi());

      const result = await verifyPortedFile({ goPath: goFile, tsPath: tsFile });

      expect(result).toEqual({ ok: true, issues: [] });
    } finally {
      await rm(tmp, { force: true, recursive: true });
    }
  });
});

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
