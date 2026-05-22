// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdRecommendKeywordsGetV10Filtering, QianchuanAdRecommendKeywordsGetV10OrderField, QianchuanAdRecommendKeywordsGetV10OrderType, QianchuanAdRecommendKeywordsGetV10Response } from "../models";


export interface OpenApiV10QianchuanAdRecommendKeywordsGetGetRequest {
  advertiserId: number;
  filtering: QianchuanAdRecommendKeywordsGetV10Filtering;
  orderField?: QianchuanAdRecommendKeywordsGetV10OrderField;
  orderType?: QianchuanAdRecommendKeywordsGetV10OrderType;
  cacheId?: string;
  page?: number;
  pageSize?: number;
}

export class QianchuanAdRecommendKeywordsGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdRecommendKeywordsGetGet(request: OpenApiV10QianchuanAdRecommendKeywordsGetGetRequest): Promise<QianchuanAdRecommendKeywordsGetV10Response> {
    const response = await this.openApiV10QianchuanAdRecommendKeywordsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdRecommendKeywordsGetGetWithHttpInfo(request: OpenApiV10QianchuanAdRecommendKeywordsGetGetRequest): Promise<ApiResponse<QianchuanAdRecommendKeywordsGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAdRecommendKeywordsGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanAdRecommendKeywordsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdRecommendKeywordsGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/recommend_keywords/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "cache_id", value: request.cacheId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


