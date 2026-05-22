// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_clue_overview_query_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueClueOverviewQueryV2Response } from "../models/index";


export interface ToolsClueClueOverviewQueryV2ApiOpenApi2ToolsClueClueOverviewQueryGetRequest {
  advertiserId: number | string;
  startTime: number;
  endTime: number;
}

export class ToolsClueClueOverviewQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueClueOverviewQueryGet(request: ToolsClueClueOverviewQueryV2ApiOpenApi2ToolsClueClueOverviewQueryGetRequest): Promise<ToolsClueClueOverviewQueryV2Response> {
    const response = await this.openApi2ToolsClueClueOverviewQueryGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueClueOverviewQueryGetWithHttpInfo(request: ToolsClueClueOverviewQueryV2ApiOpenApi2ToolsClueClueOverviewQueryGetRequest): Promise<ApiResponse<ToolsClueClueOverviewQueryV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueClueOverviewQueryGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApi2ToolsClueClueOverviewQueryGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApi2ToolsClueClueOverviewQueryGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueClueOverviewQueryV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/clue/overview/query/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime }
      ]
    });
  }
}


