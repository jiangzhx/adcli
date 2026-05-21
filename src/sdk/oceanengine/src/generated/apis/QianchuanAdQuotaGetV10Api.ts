// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAdQuotaGetV10Response } from "../models";


export class QianchuanAdQuotaGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdQuotaGetGet(advertiserId: number): Promise<QianchuanAdQuotaGetV10Response> {
    const response = await this.openApiV10QianchuanAdQuotaGetGetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApiV10QianchuanAdQuotaGetGetWithHttpInfo(advertiserId: number): Promise<ApiResponse<QianchuanAdQuotaGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAdQuotaGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdQuotaGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/quota/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


