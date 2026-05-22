// Generated from oceanengine/ad_open_sdk_go api/api_common.go
// Do not edit manually.

import { ApiClient, type ApiResponse, type QueryParam } from "./client";
import type { CommonResponse } from "../models/index";

export interface CommonApiGetRequest {
  path: string;
  requestQuery?: Record<string, unknown>;
}

export interface CommonApiPostRequest {
  path: string;
  requestBody?: unknown;
  requestQuery?: Record<string, unknown>;
  requestForm?: Record<string, unknown>;
}

export interface CommonApiPostMultipartRequest {
  path: string;
  requestQuery?: Record<string, unknown>;
  requestFile?: Record<string, Blob | undefined | null>;
  requestForm?: Record<string, unknown>;
}

export class CommonApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: CommonApiGetRequest): Promise<CommonResponse> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CommonApiGetRequest): Promise<ApiResponse<CommonResponse>> {
    return this.execute("GET", request.path, {
      requestQuery: request.requestQuery,
    });
  }

  async post(request: CommonApiPostRequest): Promise<CommonResponse> {
    const response = await this.postWithHttpInfo(request);
    return response.data;
  }

  async postWithHttpInfo(request: CommonApiPostRequest): Promise<ApiResponse<CommonResponse>> {
    return this.execute("POST", request.path, {
      contentType: "application/json",
      requestBody: request.requestBody,
      requestQuery: request.requestQuery,
      requestForm: request.requestForm,
    });
  }

  async postMultipart(request: CommonApiPostMultipartRequest): Promise<CommonResponse> {
    const response = await this.postMultipartWithHttpInfo(request);
    return response.data;
  }

  async postMultipartWithHttpInfo(request: CommonApiPostMultipartRequest): Promise<ApiResponse<CommonResponse>> {
    return this.execute("POST", request.path, {
      contentType: "multipart/form-data",
      requestQuery: request.requestQuery,
      requestForm: request.requestForm,
      requestFile: request.requestFile,
    });
  }

  private execute(
    method: "GET" | "POST",
    path: string,
    options: {
      contentType?: string;
      requestBody?: unknown;
      requestQuery?: Record<string, unknown>;
      requestForm?: Record<string, unknown>;
      requestFile?: Record<string, Blob | undefined | null>;
    },
  ) {
    return this.apiClient.requestWithHttpInfo<CommonResponse>({
      method,
      path,
      contentType: options.contentType,
      queryParams: toQueryParams(options.requestQuery),
      formParams: options.contentType === "application/json" ? undefined : options.requestForm,
      body: options.requestBody ?? (options.contentType === "application/json" ? options.requestForm : undefined),
      files: options.requestFile,
    });
  }
}

function toQueryParams(values: Record<string, unknown> | undefined): QueryParam[] {
  return Object.entries(values ?? {}).map(([name, value]) => ({ name, value }));
}
