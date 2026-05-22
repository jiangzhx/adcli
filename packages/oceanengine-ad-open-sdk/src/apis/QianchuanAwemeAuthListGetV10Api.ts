// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeAuthListGetV10Filtering, QianchuanAwemeAuthListGetV10PageSize, QianchuanAwemeAuthListGetV10Response } from "../models";


export interface OpenApiV10QianchuanAwemeAuthListGetGetRequest {
  advertiserId: number | string;
  filtering?: QianchuanAwemeAuthListGetV10Filtering;
  page?: number;
  pageSize?: QianchuanAwemeAuthListGetV10PageSize;
}

export class QianchuanAwemeAuthListGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeAuthListGetGet(request: OpenApiV10QianchuanAwemeAuthListGetGetRequest): Promise<QianchuanAwemeAuthListGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeAuthListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeAuthListGetGetWithHttpInfo(request: OpenApiV10QianchuanAwemeAuthListGetGetRequest): Promise<ApiResponse<QianchuanAwemeAuthListGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeAuthListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeAuthListGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme_auth_list/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


