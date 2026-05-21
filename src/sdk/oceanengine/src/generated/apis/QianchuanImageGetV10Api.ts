// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanImageGetV10Filtering, QianchuanImageGetV10Response } from "../models";


export class QianchuanImageGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanImageGetGet(advertiserId: number, filtering: QianchuanImageGetV10Filtering, page: number, pageSize: number): Promise<QianchuanImageGetV10Response> {
    const response = await this.openApiV10QianchuanImageGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanImageGetGetWithHttpInfo(advertiserId: number, filtering: QianchuanImageGetV10Filtering, page: number, pageSize: number): Promise<ApiResponse<QianchuanImageGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanImageGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanImageGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/image/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


