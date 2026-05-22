// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_aweme_authorized_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniAwemeAuthorizedGetV10Filtering, QianchuanUniAwemeAuthorizedGetV10Response } from "../models/index";


export interface QianchuanUniAwemeAuthorizedGetV10ApiOpenApiV10QianchuanUniAwemeAuthorizedGetGetRequest {
  advertiserId: number | string;
  filtering?: QianchuanUniAwemeAuthorizedGetV10Filtering;
  page?: number;
  pageSize?: number;
}

export class QianchuanUniAwemeAuthorizedGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniAwemeAuthorizedGetGet(request: QianchuanUniAwemeAuthorizedGetV10ApiOpenApiV10QianchuanUniAwemeAuthorizedGetGetRequest): Promise<QianchuanUniAwemeAuthorizedGetV10Response> {
    const response = await this.openApiV10QianchuanUniAwemeAuthorizedGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniAwemeAuthorizedGetGetWithHttpInfo(request: QianchuanUniAwemeAuthorizedGetV10ApiOpenApiV10QianchuanUniAwemeAuthorizedGetGetRequest): Promise<ApiResponse<QianchuanUniAwemeAuthorizedGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniAwemeAuthorizedGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniAwemeAuthorizedGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_aweme/authorized/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


