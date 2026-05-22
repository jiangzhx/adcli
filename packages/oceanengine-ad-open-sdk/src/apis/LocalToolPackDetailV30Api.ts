// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalToolPackDetailV30Response } from "../models";


export interface OpenApiV30LocalToolPackDetailGetRequest {
  localAccountId: number;
  toolPackId: number;
}

export class LocalToolPackDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalToolPackDetailGet(request: OpenApiV30LocalToolPackDetailGetRequest): Promise<LocalToolPackDetailV30Response> {
    const response = await this.openApiV30LocalToolPackDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalToolPackDetailGetWithHttpInfo(request: OpenApiV30LocalToolPackDetailGetRequest): Promise<ApiResponse<LocalToolPackDetailV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalToolPackDetailGet");
    }

    if (request.toolPackId == null) {
      throw new ApiException("Missing the required parameter 'toolPackId' when calling openApiV30LocalToolPackDetailGet");
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


