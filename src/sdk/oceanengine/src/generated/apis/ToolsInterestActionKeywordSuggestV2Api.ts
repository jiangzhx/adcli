// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsInterestActionKeywordSuggestV2ActionDays, ToolsInterestActionKeywordSuggestV2Response, ToolsInterestActionKeywordSuggestV2TagType, ToolsInterestActionKeywordSuggestV2TargetingType } from "../models";


export class ToolsInterestActionKeywordSuggestV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsInterestActionKeywordSuggestGet(advertiserId: number, id: number, tagType: ToolsInterestActionKeywordSuggestV2TagType, targetingType: ToolsInterestActionKeywordSuggestV2TargetingType, actionDays: ToolsInterestActionKeywordSuggestV2ActionDays): Promise<ToolsInterestActionKeywordSuggestV2Response> {
    const response = await this.openApi2ToolsInterestActionKeywordSuggestGetWithHttpInfo(advertiserId, id, tagType, targetingType, actionDays);
    return response.data;
  }

  async openApi2ToolsInterestActionKeywordSuggestGetWithHttpInfo(advertiserId: number, id: number, tagType: ToolsInterestActionKeywordSuggestV2TagType, targetingType: ToolsInterestActionKeywordSuggestV2TargetingType, actionDays: ToolsInterestActionKeywordSuggestV2ActionDays): Promise<ApiResponse<ToolsInterestActionKeywordSuggestV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsInterestActionKeywordSuggestGet");
    }

    if (id == null) {
      throw new ApiException("Missing the required parameter 'id' when calling openApi2ToolsInterestActionKeywordSuggestGet");
    }

    if (tagType == null) {
      throw new ApiException("Missing the required parameter 'tagType' when calling openApi2ToolsInterestActionKeywordSuggestGet");
    }

    if (targetingType == null) {
      throw new ApiException("Missing the required parameter 'targetingType' when calling openApi2ToolsInterestActionKeywordSuggestGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsInterestActionKeywordSuggestV2Response>({
      method: "GET",
      path: "/open_api/2/tools/interest_action/keyword/suggest/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "id", value: id },
        { name: "tag_type", value: tagType },
        { name: "targeting_type", value: targetingType },
        { name: "action_days", value: actionDays }
      ]
    });
  }
}


