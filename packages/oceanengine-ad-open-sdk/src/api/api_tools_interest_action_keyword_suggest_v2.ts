// Generated from oceanengine/ad_open_sdk_go api/api_tools_interest_action_keyword_suggest_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsInterestActionKeywordSuggestV2ActionDays, ToolsInterestActionKeywordSuggestV2Response, ToolsInterestActionKeywordSuggestV2TagType, ToolsInterestActionKeywordSuggestV2TargetingType } from "../models/index";


export interface ToolsInterestActionKeywordSuggestV2ApiOpenApi2ToolsInterestActionKeywordSuggestGetRequest {
  advertiserId: number | string;
  id: number | string;
  tagType: ToolsInterestActionKeywordSuggestV2TagType;
  targetingType: ToolsInterestActionKeywordSuggestV2TargetingType;
  actionDays?: ToolsInterestActionKeywordSuggestV2ActionDays;
}

export class ToolsInterestActionKeywordSuggestV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsInterestActionKeywordSuggestGet(request: ToolsInterestActionKeywordSuggestV2ApiOpenApi2ToolsInterestActionKeywordSuggestGetRequest): Promise<ToolsInterestActionKeywordSuggestV2Response> {
    const response = await this.openApi2ToolsInterestActionKeywordSuggestGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsInterestActionKeywordSuggestGetWithHttpInfo(request: ToolsInterestActionKeywordSuggestV2ApiOpenApi2ToolsInterestActionKeywordSuggestGetRequest): Promise<ApiResponse<ToolsInterestActionKeywordSuggestV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsInterestActionKeywordSuggestGet");
    }

    if (request.id == null) {
      throw new ApiException("Missing the required parameter 'id' when calling openApi2ToolsInterestActionKeywordSuggestGet");
    }

    if (request.tagType == null) {
      throw new ApiException("Missing the required parameter 'tagType' when calling openApi2ToolsInterestActionKeywordSuggestGet");
    }

    if (request.targetingType == null) {
      throw new ApiException("Missing the required parameter 'targetingType' when calling openApi2ToolsInterestActionKeywordSuggestGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsInterestActionKeywordSuggestV2Response>({
      method: "GET",
      path: "/open_api/2/tools/interest_action/keyword/suggest/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "id", value: request.id },
        { name: "tag_type", value: request.tagType },
        { name: "targeting_type", value: request.targetingType },
        { name: "action_days", value: request.actionDays }
      ]
    });
  }
}


