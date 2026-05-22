// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAccountBalanceGetV10Response } from "../models";


export class QianchuanAccountBalanceGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAccountBalanceGetGet(advertiserId: number): Promise<QianchuanAccountBalanceGetV10Response> {
    const response = await this.openApiV10QianchuanAccountBalanceGetGetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApiV10QianchuanAccountBalanceGetGetWithHttpInfo(advertiserId: number): Promise<ApiResponse<QianchuanAccountBalanceGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAccountBalanceGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAccountBalanceGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/account/balance/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


