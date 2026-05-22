// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_authorized_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeAuthorizedGetV10Filtering, QianchuanAwemeAuthorizedGetV10Response } from "../models/index";


export interface QianchuanAwemeAuthorizedGetV10ApiOpenApiV10QianchuanAwemeAuthorizedGetGetRequest {
  advertiserId: number | string;
  filtering?: QianchuanAwemeAuthorizedGetV10Filtering;
  page?: number;
  pageSize?: number;
}

export class QianchuanAwemeAuthorizedGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeAuthorizedGetGet(request: QianchuanAwemeAuthorizedGetV10ApiOpenApiV10QianchuanAwemeAuthorizedGetGetRequest): Promise<QianchuanAwemeAuthorizedGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeAuthorizedGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeAuthorizedGetGetWithHttpInfo(request: QianchuanAwemeAuthorizedGetV10ApiOpenApiV10QianchuanAwemeAuthorizedGetGetRequest): Promise<ApiResponse<QianchuanAwemeAuthorizedGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeAuthorizedGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeAuthorizedGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/authorized/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


