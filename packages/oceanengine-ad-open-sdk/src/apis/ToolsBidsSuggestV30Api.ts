// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsBidsSuggestV30CampaignType, ToolsBidsSuggestV30DeepBidType, ToolsBidsSuggestV30DeepExternalAction, ToolsBidsSuggestV30ExternalAction, ToolsBidsSuggestV30MarketingGoal, ToolsBidsSuggestV30Platform, ToolsBidsSuggestV30Pricing, ToolsBidsSuggestV30Response } from "../models";


export interface OpenApiV30ToolsBidsSuggestGetRequest {
  advertiserId: number;
  pricing: ToolsBidsSuggestV30Pricing;
  externalAction: ToolsBidsSuggestV30ExternalAction;
  projectId?: number;
  deepExternalAction?: ToolsBidsSuggestV30DeepExternalAction;
  deepBidType?: ToolsBidsSuggestV30DeepBidType;
  platform?: ToolsBidsSuggestV30Platform[];
  marketingGoal?: ToolsBidsSuggestV30MarketingGoal;
  campaignType?: ToolsBidsSuggestV30CampaignType;
  packageName?: string;
  userName?: string;
  appId?: string;
}

export class ToolsBidsSuggestV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsBidsSuggestGet(request: OpenApiV30ToolsBidsSuggestGetRequest): Promise<ToolsBidsSuggestV30Response> {
    const response = await this.openApiV30ToolsBidsSuggestGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsBidsSuggestGetWithHttpInfo(request: OpenApiV30ToolsBidsSuggestGetRequest): Promise<ApiResponse<ToolsBidsSuggestV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsBidsSuggestGet");
    }

    if (request.pricing == null) {
      throw new ApiException("Missing the required parameter 'pricing' when calling openApiV30ToolsBidsSuggestGet");
    }

    if (request.externalAction == null) {
      throw new ApiException("Missing the required parameter 'externalAction' when calling openApiV30ToolsBidsSuggestGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsBidsSuggestV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/bids/suggest/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "project_id", value: request.projectId },
        { name: "pricing", value: request.pricing },
        { name: "external_action", value: request.externalAction },
        { name: "deep_external_action", value: request.deepExternalAction },
        { name: "deep_bid_type", value: request.deepBidType },
        { name: "platform", value: request.platform, collectionFormat: "csv" },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "campaign_type", value: request.campaignType },
        { name: "package_name", value: request.packageName },
        { name: "user_name", value: request.userName },
        { name: "app_id", value: request.appId }
      ]
    });
  }
}


