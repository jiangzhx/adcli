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
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.secondLogId == null) {
      throw new ApiException("secondLogId is required and must be specified");
    }

    if (request.secondLogId != null && Number(request.secondLogId) < 1) {
      throw new ApiException("secondLogId must be greater than 1");
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


