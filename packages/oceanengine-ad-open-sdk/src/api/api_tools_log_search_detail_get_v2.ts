// Generated from oceanengine/ad_open_sdk_go api/api_tools_log_search_detail_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsLogSearchDetailGetV2Response } from "../models/index";


export interface ToolsLogSearchDetailGetV2ApiOpenApi2ToolsLogSearchDetailGetGetRequest {
  advertiserId: number | string;
  secondLogId: number | string;
}

export class ToolsLogSearchDetailGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsLogSearchDetailGetGet(request: ToolsLogSearchDetailGetV2ApiOpenApi2ToolsLogSearchDetailGetGetRequest): Promise<ToolsLogSearchDetailGetV2Response> {
    const response = await this.openApi2ToolsLogSearchDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsLogSearchDetailGetGetWithHttpInfo(request: ToolsLogSearchDetailGetV2ApiOpenApi2ToolsLogSearchDetailGetGetRequest): Promise<ApiResponse<ToolsLogSearchDetailGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsLogSearchDetailGetGet");
    }

    if (request.secondLogId == null) {
      throw new ApiException("Missing the required parameter 'secondLogId' when calling openApi2ToolsLogSearchDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsLogSearchDetailGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/log_search/detail/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "second_log_id", value: request.secondLogId }
      ]
    });
  }
}


