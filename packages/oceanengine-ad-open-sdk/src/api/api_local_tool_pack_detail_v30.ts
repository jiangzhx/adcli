// Generated from oceanengine/ad_open_sdk_go api/api_local_tool_pack_detail_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalToolPackDetailV30Response } from "../models/index";


export interface LocalToolPackDetailV30ApiOpenApiV30LocalToolPackDetailGetRequest {
  localAccountId: number | string;
  toolPackId: number | string;
}

export class LocalToolPackDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalToolPackDetailGet(request: LocalToolPackDetailV30ApiOpenApiV30LocalToolPackDetailGetRequest): Promise<LocalToolPackDetailV30Response> {
    const response = await this.openApiV30LocalToolPackDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalToolPackDetailGetWithHttpInfo(request: LocalToolPackDetailV30ApiOpenApiV30LocalToolPackDetailGetRequest): Promise<ApiResponse<LocalToolPackDetailV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("localAccountId is required and must be specified");
    }

    if (request.toolPackId == null) {
      throw new ApiException("toolPackId is required and must be specified");
    }

    if (request.toolPackId != null && Number(request.toolPackId) < 1) {
      throw new ApiException("toolPackId must be greater than 1");
    }
    return this.apiClient.requestWithHttpInfo<LocalToolPackDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/tool_pack/detail/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "tool_pack_id", value: request.toolPackId }
      ]
    });
  }
}


