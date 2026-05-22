// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeUniPromotionSuggestRoiV10Response } from "../models";


export interface OpenApiV10QianchuanAwemeUniPromotionSuggestRoiGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
  productId: number | string;
}

export class QianchuanAwemeUniPromotionSuggestRoiV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionSuggestRoiGet(request: OpenApiV10QianchuanAwemeUniPromotionSuggestRoiGetRequest): Promise<QianchuanAwemeUniPromotionSuggestRoiV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionSuggestRoiGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionSuggestRoiGetWithHttpInfo(request: OpenApiV10QianchuanAwemeUniPromotionSuggestRoiGetRequest): Promise<ApiResponse<QianchuanAwemeUniPromotionSuggestRoiV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeUniPromotionSuggestRoiGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanAwemeUniPromotionSuggestRoiGet");
    }

    if (request.productId == null) {
      throw new ApiException("Missing the required parameter 'productId' when calling openApiV10QianchuanAwemeUniPromotionSuggestRoiGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionSuggestRoiV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/suggest/roi/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "product_id", value: request.productId }
      ]
    });
  }
}


