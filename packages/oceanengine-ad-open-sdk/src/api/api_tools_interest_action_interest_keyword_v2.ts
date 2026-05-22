// Generated from oceanengine/ad_open_sdk_go api/api_tools_interest_action_interest_keyword_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsInterestActionInterestKeywordV2Response } from "../models/index";


export interface ToolsInterestActionInterestKeywordV2ApiOpenApi2ToolsInterestActionInterestKeywordGetRequest {
  advertiserId: number | string;
  queryWords: string;
}

export class ToolsInterestActionInterestKeywordV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsInterestActionInterestKeywordGet(request: ToolsInterestActionInterestKeywordV2ApiOpenApi2ToolsInterestActionInterestKeywordGetRequest): Promise<ToolsInterestActionInterestKeywordV2Response> {
    const response = await this.openApi2ToolsInterestActionInterestKeywordGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsInterestActionInterestKeywordGetWithHttpInfo(request: ToolsInterestActionInterestKeywordV2ApiOpenApi2ToolsInterestActionInterestKeywordGetRequest): Promise<ApiResponse<ToolsInterestActionInterestKeywordV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.queryWords == null) {
      throw new ApiException("queryWords is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsInterestActionInterestKeywordV2Response>({
      method: "GET",
      path: "/open_api/2/tools/interest_action/interest/keyword/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "query_words", value: request.queryWords }
      ]
    });
  }
}


