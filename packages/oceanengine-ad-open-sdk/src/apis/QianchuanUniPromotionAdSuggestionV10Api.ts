// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdSuggestionV10Filtering, QianchuanUniPromotionAdSuggestionV10Response } from "../models";


export interface OpenApiV10QianchuanUniPromotionAdSuggestionGetRequest {
  advertiserId: number;
  adId: number;
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

  async openApiV10QianchuanUniPromotionAdSuggestionGet(request: OpenApiV10QianchuanUniPromotionAdSuggestionGetRequest): Promise<QianchuanUniPromotionAdSuggestionV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdSuggestionGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdSuggestionGetWithHttpInfo(request: OpenApiV10QianchuanUniPromotionAdSuggestionGetRequest): Promise<ApiResponse<QianchuanUniPromotionAdSuggestionV10Response>> {
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


