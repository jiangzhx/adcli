// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsInterestActionInterestKeywordV2Response } from "../models";


export interface OpenApi2ToolsInterestActionInterestKeywordGetRequest {
  advertiserId: number;
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

  async openApi2ToolsInterestActionInterestKeywordGet(request: OpenApi2ToolsInterestActionInterestKeywordGetRequest): Promise<ToolsInterestActionInterestKeywordV2Response> {
    const response = await this.openApi2ToolsInterestActionInterestKeywordGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsInterestActionInterestKeywordGetWithHttpInfo(request: OpenApi2ToolsInterestActionInterestKeywordGetRequest): Promise<ApiResponse<ToolsInterestActionInterestKeywordV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsInterestActionInterestKeywordGet");
    }

    if (request.queryWords == null) {
      throw new ApiException("Missing the required parameter 'queryWords' when calling openApi2ToolsInterestActionInterestKeywordGet");
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


