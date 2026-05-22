// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdDetailV10Response } from "../models";


export interface OpenApiV10QianchuanUniPromotionAdDetailGetRequest {
  advertiserId: number | string;
  adId: number | string;
}

export class QianchuanUniPromotionAdDetailV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdDetailGet(request: OpenApiV10QianchuanUniPromotionAdDetailGetRequest): Promise<QianchuanUniPromotionAdDetailV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdDetailGetWithHttpInfo(request: OpenApiV10QianchuanUniPromotionAdDetailGetRequest): Promise<ApiResponse<QianchuanUniPromotionAdDetailV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionAdDetailGet");
    }

    if (request.adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanUniPromotionAdDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdDetailV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/detail/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_id", value: request.adId }
      ]
    });
  }
}


