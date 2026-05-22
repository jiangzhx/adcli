// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_uni_promotion_suggest_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeUniPromotionSuggestV10BidType, QianchuanAwemeUniPromotionSuggestV10Response } from "../models/index";


export interface QianchuanAwemeUniPromotionSuggestV10ApiOpenApiV10QianchuanAwemeUniPromotionSuggestGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
  productId: number | string;
  bidType: QianchuanAwemeUniPromotionSuggestV10BidType;
}

export class QianchuanAwemeUniPromotionSuggestV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionSuggestGet(request: QianchuanAwemeUniPromotionSuggestV10ApiOpenApiV10QianchuanAwemeUniPromotionSuggestGetRequest): Promise<QianchuanAwemeUniPromotionSuggestV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionSuggestGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionSuggestGetWithHttpInfo(request: QianchuanAwemeUniPromotionSuggestV10ApiOpenApiV10QianchuanAwemeUniPromotionSuggestGetRequest): Promise<ApiResponse<QianchuanAwemeUniPromotionSuggestV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeUniPromotionSuggestGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanAwemeUniPromotionSuggestGet");
    }

    if (request.productId == null) {
      throw new ApiException("Missing the required parameter 'productId' when calling openApiV10QianchuanAwemeUniPromotionSuggestGet");
    }

    if (request.bidType == null) {
      throw new ApiException("Missing the required parameter 'bidType' when calling openApiV10QianchuanAwemeUniPromotionSuggestGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionSuggestV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/suggest/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "product_id", value: request.productId },
        { name: "bid_type", value: request.bidType }
      ]
    });
  }
}


