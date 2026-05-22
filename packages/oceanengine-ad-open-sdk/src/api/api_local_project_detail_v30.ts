// Generated from oceanengine/ad_open_sdk_go api/api_local_project_detail_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalProjectDetailV30Response } from "../models/index";


export interface LocalProjectDetailV30ApiOpenApiV30LocalProjectDetailGetRequest {
  localAccountId: number | string;
  projectId: number | string;
}

export class LocalProjectDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalProjectDetailGet(request: LocalProjectDetailV30ApiOpenApiV30LocalProjectDetailGetRequest): Promise<LocalProjectDetailV30Response> {
    const response = await this.openApiV30LocalProjectDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalProjectDetailGetWithHttpInfo(request: LocalProjectDetailV30ApiOpenApiV30LocalProjectDetailGetRequest): Promise<ApiResponse<LocalProjectDetailV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("localAccountId is required and must be specified");
    }

    if (request.localAccountId != null && Number(request.localAccountId) < 1) {
      throw new ApiException("localAccountId must be greater than 1");
    }

    if (request.projectId == null) {
      throw new ApiException("projectId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<LocalProjectDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/project/detail/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "project_id", value: request.projectId }
      ]
    });
  }
}


