// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueContactLogOverviewQueryV2Response } from "../models";


export interface OpenApi2ToolsClueContactLogOverviewQueryGetRequest {
  advertiserId: number | string;
  startTime: number;
  endTime: number;
}

export class ToolsClueContactLogOverviewQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueContactLogOverviewQueryGet(request: OpenApi2ToolsClueContactLogOverviewQueryGetRequest): Promise<ToolsClueContactLogOverviewQueryV2Response> {
    const response = await this.openApi2ToolsClueContactLogOverviewQueryGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueContactLogOverviewQueryGetWithHttpInfo(request: OpenApi2ToolsClueContactLogOverviewQueryGetRequest): Promise<ApiResponse<ToolsClueContactLogOverviewQueryV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueContactLogOverviewQueryGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApi2ToolsClueContactLogOverviewQueryGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApi2ToolsClueContactLogOverviewQueryGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueContactLogOverviewQueryV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/contact_log/overview/query/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime }
      ]
    });
  }
}


