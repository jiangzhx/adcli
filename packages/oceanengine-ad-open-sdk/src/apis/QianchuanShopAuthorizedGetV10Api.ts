// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanShopAuthorizedGetV10Response } from "../models";


export interface OpenApiV10QianchuanShopAuthorizedGetGetRequest {
  advertiserId: number;
  page?: number;
  pageSize?: number;
}

export class QianchuanShopAuthorizedGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanShopAuthorizedGetGet(request: OpenApiV10QianchuanShopAuthorizedGetGetRequest): Promise<QianchuanShopAuthorizedGetV10Response> {
    const response = await this.openApiV10QianchuanShopAuthorizedGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanShopAuthorizedGetGetWithHttpInfo(request: OpenApiV10QianchuanShopAuthorizedGetGetRequest): Promise<ApiResponse<QianchuanShopAuthorizedGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanShopAuthorizedGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanShopAuthorizedGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/shop/authorized/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


