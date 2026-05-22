// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanSuggestRoiGoalV10CampaignScene, QianchuanSuggestRoiGoalV10DeepBidType, QianchuanSuggestRoiGoalV10DeepExternalAction, QianchuanSuggestRoiGoalV10EcomGuestType, QianchuanSuggestRoiGoalV10ExternalAction, QianchuanSuggestRoiGoalV10MarketingGoal, QianchuanSuggestRoiGoalV10MarketingScene, QianchuanSuggestRoiGoalV10Response } from "../models";


export class QianchuanSuggestRoiGoalV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanSuggestRoiGoalGet(advertiserId: number, awemeId: number, marketingScene: QianchuanSuggestRoiGoalV10MarketingScene, marketingGoal: QianchuanSuggestRoiGoalV10MarketingGoal, productId: number, productNewOpen: boolean, externalAction: QianchuanSuggestRoiGoalV10ExternalAction, campaignScene: QianchuanSuggestRoiGoalV10CampaignScene, deepExternalAction: QianchuanSuggestRoiGoalV10DeepExternalAction, deepBidType: QianchuanSuggestRoiGoalV10DeepBidType, ecomGuestType: QianchuanSuggestRoiGoalV10EcomGuestType, shopId: number, brandId: number): Promise<QianchuanSuggestRoiGoalV10Response> {
    const response = await this.openApiV10QianchuanSuggestRoiGoalGetWithHttpInfo(advertiserId, awemeId, marketingScene, marketingGoal, productId, productNewOpen, externalAction, campaignScene, deepExternalAction, deepBidType, ecomGuestType, shopId, brandId);
    return response.data;
  }

  async openApiV10QianchuanSuggestRoiGoalGetWithHttpInfo(advertiserId: number, awemeId: number, marketingScene: QianchuanSuggestRoiGoalV10MarketingScene, marketingGoal: QianchuanSuggestRoiGoalV10MarketingGoal, productId: number, productNewOpen: boolean, externalAction: QianchuanSuggestRoiGoalV10ExternalAction, campaignScene: QianchuanSuggestRoiGoalV10CampaignScene, deepExternalAction: QianchuanSuggestRoiGoalV10DeepExternalAction, deepBidType: QianchuanSuggestRoiGoalV10DeepBidType, ecomGuestType: QianchuanSuggestRoiGoalV10EcomGuestType, shopId: number, brandId: number): Promise<ApiResponse<QianchuanSuggestRoiGoalV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanSuggestRoiGoalGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanSuggestRoiGoalV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/suggest/roi/goal/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "marketing_scene", value: marketingScene },
        { name: "marketing_goal", value: marketingGoal },
        { name: "product_id", value: productId },
        { name: "product_new_open", value: productNewOpen },
        { name: "external_action", value: externalAction },
        { name: "campaign_scene", value: campaignScene },
        { name: "deep_external_action", value: deepExternalAction },
        { name: "deep_bid_type", value: deepBidType },
        { name: "ecom_guest_type", value: ecomGuestType },
        { name: "shop_id", value: shopId },
        { name: "brand_id", value: brandId }
      ]
    });
  }
}


