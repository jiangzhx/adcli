// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsInterestActionActionKeywordV2ActionDays, ToolsInterestActionActionKeywordV2Response } from "../models";


export class ToolsInterestActionActionKeywordV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsInterestActionActionKeywordGet(advertiserId: number, queryWords: string, actionDays: ToolsInterestActionActionKeywordV2ActionDays): Promise<ToolsInterestActionActionKeywordV2Response> {
    const response = await this.openApi2ToolsInterestActionActionKeywordGetWithHttpInfo(advertiserId, queryWords, actionDays);
    return response.data;
  }

  async openApi2ToolsInterestActionActionKeywordGetWithHttpInfo(advertiserId: number, queryWords: string, actionDays: ToolsInterestActionActionKeywordV2ActionDays): Promise<ApiResponse<ToolsInterestActionActionKeywordV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsInterestActionActionKeywordGet");
    }

    if (queryWords == null) {
      throw new ApiException("Missing the required parameter 'queryWords' when calling openApi2ToolsInterestActionActionKeywordGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsInterestActionActionKeywordV2Response>({
      method: "GET",
      path: "/open_api/2/tools/interest_action/action/keyword/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "query_words", value: queryWords },
        { name: "action_days", value: actionDays }
      ]
    });
  }
}


