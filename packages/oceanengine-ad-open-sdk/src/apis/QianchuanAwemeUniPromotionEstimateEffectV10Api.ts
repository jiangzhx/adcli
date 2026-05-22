// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeUniPromotionEstimateEffectV10Response } from "../models";


export interface OpenApiV10QianchuanAwemeUniPromotionEstimateEffectGetRequest {
  advertiserId: number;
  awemeId: number;
  productId: number;
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

  async openApiV10QianchuanAwemeUniPromotionEstimateEffectGet(request: OpenApiV10QianchuanAwemeUniPromotionEstimateEffectGetRequest): Promise<QianchuanAwemeUniPromotionEstimateEffectV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionEstimateEffectGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionEstimateEffectGetWithHttpInfo(request: OpenApiV10QianchuanAwemeUniPromotionEstimateEffectGetRequest): Promise<ApiResponse<QianchuanAwemeUniPromotionEstimateEffectV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeUniPromotionEstimateEffectGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanAwemeUniPromotionEstimateEffectGet");
    }

    if (request.productId == null) {
      throw new ApiException("Missing the required parameter 'productId' when calling openApiV10QianchuanAwemeUniPromotionEstimateEffectGet");
    }

    if (request.deliveryTime == null) {
      throw new ApiException("Missing the required parameter 'deliveryTime' when calling openApiV10QianchuanAwemeUniPromotionEstimateEffectGet");
    }

    if (request.amount == null) {
      throw new ApiException("Missing the required parameter 'amount' when calling openApiV10QianchuanAwemeUniPromotionEstimateEffectGet");
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


