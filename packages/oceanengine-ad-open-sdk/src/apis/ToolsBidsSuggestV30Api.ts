// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsBidsSuggestV30CampaignType, ToolsBidsSuggestV30DeepBidType, ToolsBidsSuggestV30DeepExternalAction, ToolsBidsSuggestV30ExternalAction, ToolsBidsSuggestV30MarketingGoal, ToolsBidsSuggestV30Platform, ToolsBidsSuggestV30Pricing, ToolsBidsSuggestV30Response } from "../models";


export class ToolsBidsSuggestV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsBidsSuggestGet(advertiserId: number, pricing: ToolsBidsSuggestV30Pricing, externalAction: ToolsBidsSuggestV30ExternalAction, projectId: number, deepExternalAction: ToolsBidsSuggestV30DeepExternalAction, deepBidType: ToolsBidsSuggestV30DeepBidType, platform: ToolsBidsSuggestV30Platform[], marketingGoal: ToolsBidsSuggestV30MarketingGoal, campaignType: ToolsBidsSuggestV30CampaignType, packageName: string, userName: string, appId: string): Promise<ToolsBidsSuggestV30Response> {
    const response = await this.openApiV30ToolsBidsSuggestGetWithHttpInfo(advertiserId, pricing, externalAction, projectId, deepExternalAction, deepBidType, platform, marketingGoal, campaignType, packageName, userName, appId);
    return response.data;
  }

  async openApiV30ToolsBidsSuggestGetWithHttpInfo(advertiserId: number, pricing: ToolsBidsSuggestV30Pricing, externalAction: ToolsBidsSuggestV30ExternalAction, projectId: number, deepExternalAction: ToolsBidsSuggestV30DeepExternalAction, deepBidType: ToolsBidsSuggestV30DeepBidType, platform: ToolsBidsSuggestV30Platform[], marketingGoal: ToolsBidsSuggestV30MarketingGoal, campaignType: ToolsBidsSuggestV30CampaignType, packageName: string, userName: string, appId: string): Promise<ApiResponse<ToolsBidsSuggestV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsBidsSuggestGet");
    }

    if (pricing == null) {
      throw new ApiException("Missing the required parameter 'pricing' when calling openApiV30ToolsBidsSuggestGet");
    }

    if (externalAction == null) {
      throw new ApiException("Missing the required parameter 'externalAction' when calling openApiV30ToolsBidsSuggestGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsBidsSuggestV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/bids/suggest/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "project_id", value: projectId },
        { name: "pricing", value: pricing },
        { name: "external_action", value: externalAction },
        { name: "deep_external_action", value: deepExternalAction },
        { name: "deep_bid_type", value: deepBidType },
        { name: "marketing_goal", value: marketingGoal },
        { name: "campaign_type", value: campaignType },
        { name: "package_name", value: packageName },
        { name: "user_name", value: userName },
        { name: "app_id", value: appId },
        { name: "platform", value: platform, collectionFormat: "csv" }
      ]
    });
  }
}


