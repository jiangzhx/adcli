// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAdRecommendKeywordsGetV10Filtering, QianchuanAdRecommendKeywordsGetV10OrderField, QianchuanAdRecommendKeywordsGetV10OrderType, QianchuanAdRecommendKeywordsGetV10Response } from "../models";


export class QianchuanAdRecommendKeywordsGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdRecommendKeywordsGetGet(advertiserId: number, filtering: QianchuanAdRecommendKeywordsGetV10Filtering, orderField: QianchuanAdRecommendKeywordsGetV10OrderField, orderType: QianchuanAdRecommendKeywordsGetV10OrderType, cacheId: string, page: number, pageSize: number): Promise<QianchuanAdRecommendKeywordsGetV10Response> {
    const response = await this.openApiV10QianchuanAdRecommendKeywordsGetGetWithHttpInfo(advertiserId, filtering, orderField, orderType, cacheId, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanAdRecommendKeywordsGetGetWithHttpInfo(advertiserId: number, filtering: QianchuanAdRecommendKeywordsGetV10Filtering, orderField: QianchuanAdRecommendKeywordsGetV10OrderField, orderType: QianchuanAdRecommendKeywordsGetV10OrderType, cacheId: string, page: number, pageSize: number): Promise<ApiResponse<QianchuanAdRecommendKeywordsGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAdRecommendKeywordsGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanAdRecommendKeywordsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdRecommendKeywordsGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/recommend_keywords/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType },
        { name: "cache_id", value: cacheId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


