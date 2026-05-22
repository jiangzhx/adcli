// Generated from oceanengine/ad_open_sdk_go api/api_tools_interest_action_action_keyword_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsInterestActionActionKeywordV2ActionDays, ToolsInterestActionActionKeywordV2Response } from "../models/index";


export interface ToolsInterestActionActionKeywordV2ApiOpenApi2ToolsInterestActionActionKeywordGetRequest {
  advertiserId: number | string;
  queryWords: string;
  actionDays?: ToolsInterestActionActionKeywordV2ActionDays;
}

export class ToolsInterestActionActionKeywordV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsInterestActionActionKeywordGet(request: ToolsInterestActionActionKeywordV2ApiOpenApi2ToolsInterestActionActionKeywordGetRequest): Promise<ToolsInterestActionActionKeywordV2Response> {
    const response = await this.openApi2ToolsInterestActionActionKeywordGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsInterestActionActionKeywordGetWithHttpInfo(request: ToolsInterestActionActionKeywordV2ApiOpenApi2ToolsInterestActionActionKeywordGetRequest): Promise<ApiResponse<ToolsInterestActionActionKeywordV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsInterestActionActionKeywordGet");
    }

    if (request.queryWords == null) {
      throw new ApiException("Missing the required parameter 'queryWords' when calling openApi2ToolsInterestActionActionKeywordGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsInterestActionActionKeywordV2Response>({
      method: "GET",
      path: "/open_api/2/tools/interest_action/action/keyword/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "query_words", value: request.queryWords },
        { name: "action_days", value: request.actionDays }
      ]
    });
  }
}


