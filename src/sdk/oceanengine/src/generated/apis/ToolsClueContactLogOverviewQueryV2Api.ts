// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsClueContactLogOverviewQueryV2Response } from "../models";


export class ToolsClueContactLogOverviewQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueContactLogOverviewQueryGet(advertiserId: number, startTime: number, endTime: number): Promise<ToolsClueContactLogOverviewQueryV2Response> {
    const response = await this.openApi2ToolsClueContactLogOverviewQueryGetWithHttpInfo(advertiserId, startTime, endTime);
    return response.data;
  }

  async openApi2ToolsClueContactLogOverviewQueryGetWithHttpInfo(advertiserId: number, startTime: number, endTime: number): Promise<ApiResponse<ToolsClueContactLogOverviewQueryV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueContactLogOverviewQueryGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApi2ToolsClueContactLogOverviewQueryGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApi2ToolsClueContactLogOverviewQueryGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueContactLogOverviewQueryV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/contact_log/overview/query/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime }
      ]
    });
  }
}


