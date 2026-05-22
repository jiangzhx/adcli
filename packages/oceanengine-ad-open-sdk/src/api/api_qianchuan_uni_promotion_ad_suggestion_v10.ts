// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_suggestion_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdSuggestionV10Filtering, QianchuanUniPromotionAdSuggestionV10Response } from "../models/index";


export interface QianchuanUniPromotionAdSuggestionV10ApiOpenApiV10QianchuanUniPromotionAdSuggestionGetRequest {
  advertiserId: number | string;
  adId: number | string;
  filtering?: QianchuanUniPromotionAdSuggestionV10Filtering;
  page?: number;
  pageSize?: number;
}

export class QianchuanUniPromotionAdSuggestionV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdSuggestionGet(request: QianchuanUniPromotionAdSuggestionV10ApiOpenApiV10QianchuanUniPromotionAdSuggestionGetRequest): Promise<QianchuanUniPromotionAdSuggestionV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdSuggestionGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdSuggestionGetWithHttpInfo(request: QianchuanUniPromotionAdSuggestionV10ApiOpenApiV10QianchuanUniPromotionAdSuggestionGetRequest): Promise<ApiResponse<QianchuanUniPromotionAdSuggestionV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionAdSuggestionGet");
    }

    if (request.adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanUniPromotionAdSuggestionGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdSuggestionV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/suggestion/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_id", value: request.adId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


