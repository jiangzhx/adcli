// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanSuggestBidV10CampaignScene, QianchuanSuggestBidV10EcomGuestType, QianchuanSuggestBidV10ExternalAction, QianchuanSuggestBidV10MarketingGoal, QianchuanSuggestBidV10Response } from "../models";


export class QianchuanSuggestBidV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanSuggestBidGet(advertiserId: number, marketingGoal: QianchuanSuggestBidV10MarketingGoal, externalAction: QianchuanSuggestBidV10ExternalAction, awemeId: number, productId: number, campaignScene: QianchuanSuggestBidV10CampaignScene, ecomGuestType: QianchuanSuggestBidV10EcomGuestType, shopId: number, brandId: number): Promise<QianchuanSuggestBidV10Response> {
    const response = await this.openApiV10QianchuanSuggestBidGetWithHttpInfo(advertiserId, marketingGoal, externalAction, awemeId, productId, campaignScene, ecomGuestType, shopId, brandId);
    return response.data;
  }

  async openApiV10QianchuanSuggestBidGetWithHttpInfo(advertiserId: number, marketingGoal: QianchuanSuggestBidV10MarketingGoal, externalAction: QianchuanSuggestBidV10ExternalAction, awemeId: number, productId: number, campaignScene: QianchuanSuggestBidV10CampaignScene, ecomGuestType: QianchuanSuggestBidV10EcomGuestType, shopId: number, brandId: number): Promise<ApiResponse<QianchuanSuggestBidV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanSuggestBidGet");
    }

    if (marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanSuggestBidGet");
    }

    if (externalAction == null) {
      throw new ApiException("Missing the required parameter 'externalAction' when calling openApiV10QianchuanSuggestBidGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanSuggestBidV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/suggest_bid/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "marketing_goal", value: marketingGoal },
        { name: "external_action", value: externalAction },
        { name: "aweme_id", value: awemeId },
        { name: "product_id", value: productId },
        { name: "campaign_scene", value: campaignScene },
        { name: "ecom_guest_type", value: ecomGuestType },
        { name: "shop_id", value: shopId },
        { name: "brand_id", value: brandId }
      ]
    });
  }
}


