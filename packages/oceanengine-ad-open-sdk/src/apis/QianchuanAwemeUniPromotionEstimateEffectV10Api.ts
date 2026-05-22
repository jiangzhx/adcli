// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeUniPromotionEstimateEffectV10Response } from "../models";


export class QianchuanAwemeUniPromotionEstimateEffectV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionEstimateEffectGet(advertiserId: number, awemeId: number, productId: number, deliveryTime: number, amount: number, addAmount: number, addDeliveryTime: number): Promise<QianchuanAwemeUniPromotionEstimateEffectV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionEstimateEffectGetWithHttpInfo(advertiserId, awemeId, productId, deliveryTime, amount, addAmount, addDeliveryTime);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionEstimateEffectGetWithHttpInfo(advertiserId: number, awemeId: number, productId: number, deliveryTime: number, amount: number, addAmount: number, addDeliveryTime: number): Promise<ApiResponse<QianchuanAwemeUniPromotionEstimateEffectV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeUniPromotionEstimateEffectGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanAwemeUniPromotionEstimateEffectGet");
    }

    if (productId == null) {
      throw new ApiException("Missing the required parameter 'productId' when calling openApiV10QianchuanAwemeUniPromotionEstimateEffectGet");
    }

    if (deliveryTime == null) {
      throw new ApiException("Missing the required parameter 'deliveryTime' when calling openApiV10QianchuanAwemeUniPromotionEstimateEffectGet");
    }

    if (amount == null) {
      throw new ApiException("Missing the required parameter 'amount' when calling openApiV10QianchuanAwemeUniPromotionEstimateEffectGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionEstimateEffectV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/estimate/effect/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "product_id", value: productId },
        { name: "delivery_time", value: deliveryTime },
        { name: "amount", value: amount },
        { name: "add_amount", value: addAmount },
        { name: "add_delivery_time", value: addDeliveryTime }
      ]
    });
  }
}


