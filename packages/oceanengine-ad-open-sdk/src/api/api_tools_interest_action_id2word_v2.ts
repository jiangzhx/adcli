// Generated from oceanengine/ad_open_sdk_go api/api_tools_interest_action_id2word_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsInterestActionId2wordV2ActionDays, ToolsInterestActionId2wordV2Response, ToolsInterestActionId2wordV2TagType, ToolsInterestActionId2wordV2TargetingType } from "../models/index";


export interface ToolsInterestActionId2wordV2ApiOpenApi2ToolsInterestActionId2wordGetRequest {
  actionDays?: ToolsInterestActionId2wordV2ActionDays;
  advertiserId?: number | string;
  ids?: number | string[];
  tagType?: ToolsInterestActionId2wordV2TagType;
  targetingType?: ToolsInterestActionId2wordV2TargetingType;
}

export class ToolsInterestActionId2wordV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsInterestActionId2wordGet(request: ToolsInterestActionId2wordV2ApiOpenApi2ToolsInterestActionId2wordGetRequest): Promise<ToolsInterestActionId2wordV2Response> {
    const response = await this.openApi2ToolsInterestActionId2wordGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsInterestActionId2wordGetWithHttpInfo(request: ToolsInterestActionId2wordV2ApiOpenApi2ToolsInterestActionId2wordGetRequest): Promise<ApiResponse<ToolsInterestActionId2wordV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsInterestActionId2wordV2Response>({
      method: "GET",
      path: "/open_api/2/tools/interest_action/id2word/",
      queryParams: [
        { name: "action_days", value: request.actionDays },
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ids", value: request.ids },
        { name: "tag_type", value: request.tagType },
        { name: "targeting_type", value: request.targetingType }
      ]
    });
  }
}


