// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeAuthorizedGetV10Filtering, QianchuanAwemeAuthorizedGetV10Response } from "../models";


export class QianchuanAwemeAuthorizedGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeAuthorizedGetGet(advertiserId: number, filtering: QianchuanAwemeAuthorizedGetV10Filtering, page: number, pageSize: number): Promise<QianchuanAwemeAuthorizedGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeAuthorizedGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanAwemeAuthorizedGetGetWithHttpInfo(advertiserId: number, filtering: QianchuanAwemeAuthorizedGetV10Filtering, page: number, pageSize: number): Promise<ApiResponse<QianchuanAwemeAuthorizedGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeAuthorizedGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeAuthorizedGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/authorized/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


