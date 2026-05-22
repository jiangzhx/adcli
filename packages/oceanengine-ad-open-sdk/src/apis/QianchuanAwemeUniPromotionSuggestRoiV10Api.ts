// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeUniPromotionSuggestRoiV10Response } from "../models";


export class QianchuanAwemeUniPromotionSuggestRoiV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionSuggestRoiGet(advertiserId: number, awemeId: number, productId: number): Promise<QianchuanAwemeUniPromotionSuggestRoiV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionSuggestRoiGetWithHttpInfo(advertiserId, awemeId, productId);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionSuggestRoiGetWithHttpInfo(advertiserId: number, awemeId: number, productId: number): Promise<ApiResponse<QianchuanAwemeUniPromotionSuggestRoiV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeUniPromotionSuggestRoiGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanAwemeUniPromotionSuggestRoiGet");
    }

    if (productId == null) {
      throw new ApiException("Missing the required parameter 'productId' when calling openApiV10QianchuanAwemeUniPromotionSuggestRoiGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionSuggestRoiV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/suggest/roi/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "product_id", value: productId }
      ]
    });
  }
}


