// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_uni_promotion_estimate_effect_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeUniPromotionEstimateEffectV10Response } from "../models/index";


export interface QianchuanAwemeUniPromotionEstimateEffectV10ApiOpenApiV10QianchuanAwemeUniPromotionEstimateEffectGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
  productId: number | string;
  deliveryTime: number;
  amount: number;
  addAmount?: number;
  addDeliveryTime?: number;
}

export class QianchuanAwemeUniPromotionEstimateEffectV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionEstimateEffectGet(request: QianchuanAwemeUniPromotionEstimateEffectV10ApiOpenApiV10QianchuanAwemeUniPromotionEstimateEffectGetRequest): Promise<QianchuanAwemeUniPromotionEstimateEffectV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionEstimateEffectGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionEstimateEffectGetWithHttpInfo(request: QianchuanAwemeUniPromotionEstimateEffectV10ApiOpenApiV10QianchuanAwemeUniPromotionEstimateEffectGetRequest): Promise<ApiResponse<QianchuanAwemeUniPromotionEstimateEffectV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.awemeId == null) {
      throw new ApiException("awemeId is required and must be specified");
    }

    if (request.awemeId != null && Number(request.awemeId) < 1) {
      throw new ApiException("awemeId must be greater than 1");
    }

    if (request.productId == null) {
      throw new ApiException("productId is required and must be specified");
    }

    if (request.productId != null && Number(request.productId) < 1) {
      throw new ApiException("productId must be greater than 1");
    }

    if (request.deliveryTime == null) {
      throw new ApiException("deliveryTime is required and must be specified");
    }

    if (request.deliveryTime != null && Number(request.deliveryTime) < 0) {
      throw new ApiException("deliveryTime must be greater than 0");
    }

    if (request.amount == null) {
      throw new ApiException("amount is required and must be specified");
    }

    if (request.amount != null && Number(request.amount) < 1) {
      throw new ApiException("amount must be greater than 1");
    }

    if (request.amount != null && Number(request.amount) > 5000000) {
      throw new ApiException("amount must be less than 5000000");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionEstimateEffectV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/estimate/effect/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "product_id", value: request.productId },
        { name: "delivery_time", value: request.deliveryTime },
        { name: "amount", value: request.amount },
        { name: "add_amount", value: request.addAmount },
        { name: "add_delivery_time", value: request.addDeliveryTime }
      ]
    });
  }
}


