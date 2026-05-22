// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsInterestActionId2wordV2ActionDays, ToolsInterestActionId2wordV2Response, ToolsInterestActionId2wordV2TagType, ToolsInterestActionId2wordV2TargetingType } from "../models";


export class ToolsInterestActionId2wordV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsInterestActionId2wordGet(actionDays: ToolsInterestActionId2wordV2ActionDays, advertiserId: number, ids: number[], tagType: ToolsInterestActionId2wordV2TagType, targetingType: ToolsInterestActionId2wordV2TargetingType): Promise<ToolsInterestActionId2wordV2Response> {
    const response = await this.openApi2ToolsInterestActionId2wordGetWithHttpInfo(actionDays, advertiserId, ids, tagType, targetingType);
    return response.data;
  }

  async openApi2ToolsInterestActionId2wordGetWithHttpInfo(actionDays: ToolsInterestActionId2wordV2ActionDays, advertiserId: number, ids: number[], tagType: ToolsInterestActionId2wordV2TagType, targetingType: ToolsInterestActionId2wordV2TargetingType): Promise<ApiResponse<ToolsInterestActionId2wordV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsInterestActionId2wordV2Response>({
      method: "GET",
      path: "/open_api/2/tools/interest_action/id2word/",
      queryParams: [
        { name: "action_days", value: actionDays },
        { name: "advertiser_id", value: advertiserId },
        { name: "tag_type", value: tagType },
        { name: "targeting_type", value: targetingType },
        { name: "ids", value: ids, collectionFormat: "multi" }
      ]
    });
  }
}


