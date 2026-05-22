// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdKeywordsGetV10Filtering, QianchuanAdKeywordsGetV10Response } from "../models";


export interface OpenApiV10QianchuanAdKeywordsGetGetRequest {
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

  async openApiV10QianchuanAdKeywordsGetGet(request: OpenApiV10QianchuanAdKeywordsGetGetRequest): Promise<QianchuanAdKeywordsGetV10Response> {
    const response = await this.openApiV10QianchuanAdKeywordsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdKeywordsGetGetWithHttpInfo(request: OpenApiV10QianchuanAdKeywordsGetGetRequest): Promise<ApiResponse<QianchuanAdKeywordsGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAdKeywordsGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanAdKeywordsGetGet");
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


