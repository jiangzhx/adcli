// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_auth_list_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeAuthListGetV10Filtering, QianchuanAwemeAuthListGetV10PageSize, QianchuanAwemeAuthListGetV10Response } from "../models/index";


export interface QianchuanAwemeAuthListGetV10ApiOpenApiV10QianchuanAwemeAuthListGetGetRequest {
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

  async openApiV10QianchuanAwemeAuthListGetGet(request: QianchuanAwemeAuthListGetV10ApiOpenApiV10QianchuanAwemeAuthListGetGetRequest): Promise<QianchuanAwemeAuthListGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeAuthListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeAuthListGetGetWithHttpInfo(request: QianchuanAwemeAuthListGetV10ApiOpenApiV10QianchuanAwemeAuthListGetGetRequest): Promise<ApiResponse<QianchuanAwemeAuthListGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


