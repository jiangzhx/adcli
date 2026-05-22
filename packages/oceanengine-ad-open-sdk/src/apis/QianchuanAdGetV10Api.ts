// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdGetV10Filtering, QianchuanAdGetV10Response } from "../models";


export class QianchuanAdGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdGetGet(advertiserId: number, filtering: QianchuanAdGetV10Filtering, requestAwemeInfo: number, page: number, pageSize: number): Promise<QianchuanAdGetV10Response> {
    const response = await this.openApiV10QianchuanAdGetGetWithHttpInfo(advertiserId, filtering, requestAwemeInfo, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanAdGetGetWithHttpInfo(advertiserId: number, filtering: QianchuanAdGetV10Filtering, requestAwemeInfo: number, page: number, pageSize: number): Promise<ApiResponse<QianchuanAdGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAdGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanAdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "request_aweme_info", value: requestAwemeInfo },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


