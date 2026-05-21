// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsInterestActionInterestKeywordV2Response } from "../models";


export class ToolsInterestActionInterestKeywordV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsInterestActionInterestKeywordGet(advertiserId: number, queryWords: string): Promise<ToolsInterestActionInterestKeywordV2Response> {
    const response = await this.openApi2ToolsInterestActionInterestKeywordGetWithHttpInfo(advertiserId, queryWords);
    return response.data;
  }

  async openApi2ToolsInterestActionInterestKeywordGetWithHttpInfo(advertiserId: number, queryWords: string): Promise<ApiResponse<ToolsInterestActionInterestKeywordV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsInterestActionInterestKeywordGet");
    }

    if (queryWords == null) {
      throw new ApiException("Missing the required parameter 'queryWords' when calling openApi2ToolsInterestActionInterestKeywordGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsInterestActionInterestKeywordV2Response>({
      method: "GET",
      path: "/open_api/2/tools/interest_action/interest/keyword/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "query_words", value: queryWords }
      ]
    });
  }
}


