// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanImageGetV10Filtering, QianchuanImageGetV10Response } from "../models";


export interface OpenApiV10QianchuanImageGetGetRequest {
  advertiserId: number;
  filtering?: QianchuanImageGetV10Filtering;
  page?: number;
  pageSize?: number;
}

export class QianchuanImageGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanImageGetGet(request: OpenApiV10QianchuanImageGetGetRequest): Promise<QianchuanImageGetV10Response> {
    const response = await this.openApiV10QianchuanImageGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanImageGetGetWithHttpInfo(request: OpenApiV10QianchuanImageGetGetRequest): Promise<ApiResponse<QianchuanImageGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanImageGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanImageGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/image/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


