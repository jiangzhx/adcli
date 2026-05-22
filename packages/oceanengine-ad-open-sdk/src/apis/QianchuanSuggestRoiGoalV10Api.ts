// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanSuggestRoiGoalV10CampaignScene, QianchuanSuggestRoiGoalV10DeepBidType, QianchuanSuggestRoiGoalV10DeepExternalAction, QianchuanSuggestRoiGoalV10EcomGuestType, QianchuanSuggestRoiGoalV10ExternalAction, QianchuanSuggestRoiGoalV10MarketingGoal, QianchuanSuggestRoiGoalV10MarketingScene, QianchuanSuggestRoiGoalV10Response } from "../models";


export interface OpenApiV10QianchuanSuggestRoiGoalGetRequest {
  advertiserId: number;
  awemeId?: number;
  marketingScene?: QianchuanSuggestRoiGoalV10MarketingScene;
  marketingGoal?: QianchuanSuggestRoiGoalV10MarketingGoal;
  productId?: number;
  productNewOpen?: boolean;
  externalAction?: QianchuanSuggestRoiGoalV10ExternalAction;
  campaignScene?: QianchuanSuggestRoiGoalV10CampaignScene;
  deepExternalAction?: QianchuanSuggestRoiGoalV10DeepExternalAction;
  deepBidType?: QianchuanSuggestRoiGoalV10DeepBidType;
  ecomGuestType?: QianchuanSuggestRoiGoalV10EcomGuestType;
  shopId?: number;
  brandId?: number;
}

export class QianchuanSuggestRoiGoalV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanSuggestRoiGoalGet(request: OpenApiV10QianchuanSuggestRoiGoalGetRequest): Promise<QianchuanSuggestRoiGoalV10Response> {
    const response = await this.openApiV10QianchuanSuggestRoiGoalGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanSuggestRoiGoalGetWithHttpInfo(request: OpenApiV10QianchuanSuggestRoiGoalGetRequest): Promise<ApiResponse<QianchuanSuggestRoiGoalV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanSuggestRoiGoalGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanSuggestRoiGoalV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/suggest/roi/goal/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "marketing_scene", value: request.marketingScene },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "product_id", value: request.productId },
        { name: "product_new_open", value: request.productNewOpen },
        { name: "external_action", value: request.externalAction },
        { name: "campaign_scene", value: request.campaignScene },
        { name: "deep_external_action", value: request.deepExternalAction },
        { name: "deep_bid_type", value: request.deepBidType },
        { name: "ecom_guest_type", value: request.ecomGuestType },
        { name: "shop_id", value: request.shopId },
        { name: "brand_id", value: request.brandId }
      ]
    });
  }
}


