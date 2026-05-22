// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_ad_recommend_keywords_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAdRecommendKeywordsGetV10Filtering, QianchuanAdRecommendKeywordsGetV10OrderField, QianchuanAdRecommendKeywordsGetV10OrderType, QianchuanAdRecommendKeywordsGetV10Response } from "../models/index";


export interface QianchuanAdRecommendKeywordsGetV10ApiOpenApiV10QianchuanAdRecommendKeywordsGetGetRequest {
  advertiserId: number | string;
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

  async openApiV10QianchuanAdRecommendKeywordsGetGet(request: QianchuanAdRecommendKeywordsGetV10ApiOpenApiV10QianchuanAdRecommendKeywordsGetGetRequest): Promise<QianchuanAdRecommendKeywordsGetV10Response> {
    const response = await this.openApiV10QianchuanAdRecommendKeywordsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdRecommendKeywordsGetGetWithHttpInfo(request: QianchuanAdRecommendKeywordsGetV10ApiOpenApiV10QianchuanAdRecommendKeywordsGetGetRequest): Promise<ApiResponse<QianchuanAdRecommendKeywordsGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.filtering == null) {
      throw new ApiException("filtering is required and must be specified");
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


