// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_contact_log_overview_query_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueContactLogOverviewQueryV2Response } from "../models/index";


export interface ToolsClueContactLogOverviewQueryV2ApiOpenApi2ToolsClueContactLogOverviewQueryGetRequest {
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

  async openApi2ToolsClueContactLogOverviewQueryGet(request: ToolsClueContactLogOverviewQueryV2ApiOpenApi2ToolsClueContactLogOverviewQueryGetRequest): Promise<ToolsClueContactLogOverviewQueryV2Response> {
    const response = await this.openApi2ToolsClueContactLogOverviewQueryGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueContactLogOverviewQueryGetWithHttpInfo(request: ToolsClueContactLogOverviewQueryV2ApiOpenApi2ToolsClueContactLogOverviewQueryGetRequest): Promise<ApiResponse<ToolsClueContactLogOverviewQueryV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.startTime == null) {
      throw new ApiException("startTime is required and must be specified");
    }

    if (request.endTime == null) {
      throw new ApiException("endTime is required and must be specified");
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


