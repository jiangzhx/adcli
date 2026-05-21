// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanUniPromotionAdDetailV10Response } from "../models";


export class QianchuanUniPromotionAdDetailV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdDetailGet(advertiserId: number, adId: number): Promise<QianchuanUniPromotionAdDetailV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdDetailGetWithHttpInfo(advertiserId, adId);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdDetailGetWithHttpInfo(advertiserId: number, adId: number): Promise<ApiResponse<QianchuanUniPromotionAdDetailV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionAdDetailGet");
    }

    if (adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanUniPromotionAdDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdDetailV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/detail/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_id", value: adId }
      ]
    });
  }
}


