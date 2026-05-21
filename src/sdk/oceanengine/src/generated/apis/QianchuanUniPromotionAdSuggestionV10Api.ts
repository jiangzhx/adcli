// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanUniPromotionAdSuggestionV10Filtering, QianchuanUniPromotionAdSuggestionV10Response } from "../models";


export class QianchuanUniPromotionAdSuggestionV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdSuggestionGet(advertiserId: number, adId: number, filtering: QianchuanUniPromotionAdSuggestionV10Filtering, page: number, pageSize: number): Promise<QianchuanUniPromotionAdSuggestionV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdSuggestionGetWithHttpInfo(advertiserId, adId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdSuggestionGetWithHttpInfo(advertiserId: number, adId: number, filtering: QianchuanUniPromotionAdSuggestionV10Filtering, page: number, pageSize: number): Promise<ApiResponse<QianchuanUniPromotionAdSuggestionV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionAdSuggestionGet");
    }

    if (adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanUniPromotionAdSuggestionGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdSuggestionV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/suggestion/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_id", value: adId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


