// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_ad_keywords_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAdKeywordsGetV10Filtering, QianchuanAdKeywordsGetV10Response } from "../models/index";


export interface QianchuanAdKeywordsGetV10ApiOpenApiV10QianchuanAdKeywordsGetGetRequest {
  advertiserId: number | string;
  filtering: QianchuanAdKeywordsGetV10Filtering;
  page?: number;
  pageSize?: number;
}

export class QianchuanAdKeywordsGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdKeywordsGetGet(request: QianchuanAdKeywordsGetV10ApiOpenApiV10QianchuanAdKeywordsGetGetRequest): Promise<QianchuanAdKeywordsGetV10Response> {
    const response = await this.openApiV10QianchuanAdKeywordsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdKeywordsGetGetWithHttpInfo(request: QianchuanAdKeywordsGetV10ApiOpenApiV10QianchuanAdKeywordsGetGetRequest): Promise<ApiResponse<QianchuanAdKeywordsGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.advertiserId != null && Number(request.advertiserId) > -9223372036854775616) {
      throw new ApiException("advertiserId must be less than -9223372036854775616");
    }

    if (request.filtering == null) {
      throw new ApiException("filtering is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdKeywordsGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/keywords/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


