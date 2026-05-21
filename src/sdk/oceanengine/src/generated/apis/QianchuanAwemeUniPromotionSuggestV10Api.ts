// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAwemeUniPromotionSuggestV10BidType, QianchuanAwemeUniPromotionSuggestV10Response } from "../models";


export class QianchuanAwemeUniPromotionSuggestV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionSuggestGet(advertiserId: number, awemeId: number, productId: number, bidType: QianchuanAwemeUniPromotionSuggestV10BidType): Promise<QianchuanAwemeUniPromotionSuggestV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionSuggestGetWithHttpInfo(advertiserId, awemeId, productId, bidType);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionSuggestGetWithHttpInfo(advertiserId: number, awemeId: number, productId: number, bidType: QianchuanAwemeUniPromotionSuggestV10BidType): Promise<ApiResponse<QianchuanAwemeUniPromotionSuggestV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeUniPromotionSuggestGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanAwemeUniPromotionSuggestGet");
    }

    if (productId == null) {
      throw new ApiException("Missing the required parameter 'productId' when calling openApiV10QianchuanAwemeUniPromotionSuggestGet");
    }

    if (bidType == null) {
      throw new ApiException("Missing the required parameter 'bidType' when calling openApiV10QianchuanAwemeUniPromotionSuggestGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionSuggestV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/suggest/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "product_id", value: productId },
        { name: "bid_type", value: bidType }
      ]
    });
  }
}


