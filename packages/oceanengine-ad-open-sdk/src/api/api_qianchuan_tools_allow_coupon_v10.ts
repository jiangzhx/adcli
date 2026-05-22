// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_tools_allow_coupon_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanToolsAllowCouponV10CampaignScene, QianchuanToolsAllowCouponV10MarketingGoal, QianchuanToolsAllowCouponV10MarketingScene, QianchuanToolsAllowCouponV10Response } from "../models/index";


export interface QianchuanToolsAllowCouponV10ApiOpenApiV10QianchuanToolsAllowCouponGetRequest {
  advertiserId: number | string;
  marketingGoal: QianchuanToolsAllowCouponV10MarketingGoal;
  campaignScene: QianchuanToolsAllowCouponV10CampaignScene;
  marketingScene: QianchuanToolsAllowCouponV10MarketingScene;
  awemeIds?: number | string[];
  productIds?: number | string[];
  isLabAd?: boolean;
}

export class QianchuanToolsAllowCouponV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsAllowCouponGet(request: QianchuanToolsAllowCouponV10ApiOpenApiV10QianchuanToolsAllowCouponGetRequest): Promise<QianchuanToolsAllowCouponV10Response> {
    const response = await this.openApiV10QianchuanToolsAllowCouponGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanToolsAllowCouponGetWithHttpInfo(request: QianchuanToolsAllowCouponV10ApiOpenApiV10QianchuanToolsAllowCouponGetRequest): Promise<ApiResponse<QianchuanToolsAllowCouponV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanToolsAllowCouponGet");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanToolsAllowCouponGet");
    }

    if (request.campaignScene == null) {
      throw new ApiException("Missing the required parameter 'campaignScene' when calling openApiV10QianchuanToolsAllowCouponGet");
    }

    if (request.marketingScene == null) {
      throw new ApiException("Missing the required parameter 'marketingScene' when calling openApiV10QianchuanToolsAllowCouponGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanToolsAllowCouponV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/tools/allow_coupon/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "campaign_scene", value: request.campaignScene },
        { name: "marketing_scene", value: request.marketingScene },
        { name: "aweme_ids", value: request.awemeIds, collectionFormat: "csv" },
        { name: "product_ids", value: request.productIds, collectionFormat: "csv" },
        { name: "is_lab_ad", value: request.isLabAd }
      ]
    });
  }
}


