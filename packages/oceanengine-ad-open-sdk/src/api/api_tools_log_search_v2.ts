// Generated from oceanengine/ad_open_sdk_go api/api_tools_log_search_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsLogSearchV2Response } from "../models/index";


export interface ToolsLogSearchV2ApiOpenApi2ToolsLogSearchGetRequest {
  advertiserId: number | string;
  objectId?: number | string[];
  startTime?: string;
  endTime?: string;
  page?: number;
  pageSize?: number;
}

export class ToolsLogSearchV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsLogSearchGet(request: ToolsLogSearchV2ApiOpenApi2ToolsLogSearchGetRequest): Promise<ToolsLogSearchV2Response> {
    const response = await this.openApi2ToolsLogSearchGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsLogSearchGetWithHttpInfo(request: ToolsLogSearchV2ApiOpenApi2ToolsLogSearchGetRequest): Promise<ApiResponse<ToolsLogSearchV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsLogSearchGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsLogSearchV2Response>({
      method: "GET",
      path: "/open_api/2/tools/log_search/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "object_id", value: request.objectId, collectionFormat: "csv" },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


