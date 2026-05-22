// Generated from oceanengine/ad_open_sdk_go api/api_tools_rta_scope_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsRtaScopeGetV30Response } from "../models/index";


export interface ToolsRtaScopeGetV30ApiOpenApiV30ToolsRtaScopeGetGetRequest {
  advertiserId: number | string;
  rtaId: number | string;
}

export class ToolsRtaScopeGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsRtaScopeGetGet(request: ToolsRtaScopeGetV30ApiOpenApiV30ToolsRtaScopeGetGetRequest): Promise<ToolsRtaScopeGetV30Response> {
    const response = await this.openApiV30ToolsRtaScopeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsRtaScopeGetGetWithHttpInfo(request: ToolsRtaScopeGetV30ApiOpenApiV30ToolsRtaScopeGetGetRequest): Promise<ApiResponse<ToolsRtaScopeGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsRtaScopeGetGet");
    }

    if (request.rtaId == null) {
      throw new ApiException("Missing the required parameter 'rtaId' when calling openApiV30ToolsRtaScopeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsRtaScopeGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/rta/scope/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "rta_id", value: request.rtaId }
      ]
    });
  }
}


