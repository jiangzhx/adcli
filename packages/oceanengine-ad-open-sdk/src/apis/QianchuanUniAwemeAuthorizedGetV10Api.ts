// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniAwemeAuthorizedGetV10Filtering, QianchuanUniAwemeAuthorizedGetV10Response } from "../models";


export class QianchuanUniAwemeAuthorizedGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniAwemeAuthorizedGetGet(advertiserId: number, filtering: QianchuanUniAwemeAuthorizedGetV10Filtering, page: number, pageSize: number): Promise<QianchuanUniAwemeAuthorizedGetV10Response> {
    const response = await this.openApiV10QianchuanUniAwemeAuthorizedGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanUniAwemeAuthorizedGetGetWithHttpInfo(advertiserId: number, filtering: QianchuanUniAwemeAuthorizedGetV10Filtering, page: number, pageSize: number): Promise<ApiResponse<QianchuanUniAwemeAuthorizedGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniAwemeAuthorizedGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniAwemeAuthorizedGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_aweme/authorized/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


