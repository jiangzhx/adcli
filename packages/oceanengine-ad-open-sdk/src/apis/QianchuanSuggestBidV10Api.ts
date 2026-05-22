// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanSuggestBidV10CampaignScene, QianchuanSuggestBidV10EcomGuestType, QianchuanSuggestBidV10ExternalAction, QianchuanSuggestBidV10MarketingGoal, QianchuanSuggestBidV10Response } from "../models";


export interface OpenApiV10QianchuanSuggestBidGetRequest {
  advertiserId: number | string;
  marketingGoal: QianchuanSuggestBidV10MarketingGoal;
  externalAction: QianchuanSuggestBidV10ExternalAction;
  awemeId?: number | string;
  productId?: number | string;
  campaignScene?: QianchuanSuggestBidV10CampaignScene;
  ecomGuestType?: QianchuanSuggestBidV10EcomGuestType;
  shopId?: number | string;
  brandId?: number | string;
}

export class QianchuanSuggestBidV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanSuggestBidGet(request: OpenApiV10QianchuanSuggestBidGetRequest): Promise<QianchuanSuggestBidV10Response> {
    const response = await this.openApiV10QianchuanSuggestBidGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanSuggestBidGetWithHttpInfo(request: OpenApiV10QianchuanSuggestBidGetRequest): Promise<ApiResponse<QianchuanSuggestBidV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanSuggestBidGet");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanSuggestBidGet");
    }

    if (request.externalAction == null) {
      throw new ApiException("Missing the required parameter 'externalAction' when calling openApiV10QianchuanSuggestBidGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanSuggestBidV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/suggest_bid/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "external_action", value: request.externalAction },
        { name: "aweme_id", value: request.awemeId },
        { name: "product_id", value: request.productId },
        { name: "campaign_scene", value: request.campaignScene },
        { name: "ecom_guest_type", value: request.ecomGuestType },
        { name: "shop_id", value: request.shopId },
        { name: "brand_id", value: request.brandId }
      ]
    });
  }
}


