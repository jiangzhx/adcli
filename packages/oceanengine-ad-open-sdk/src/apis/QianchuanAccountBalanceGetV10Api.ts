// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAccountBalanceGetV10Response } from "../models";


export interface OpenApiV10QianchuanAccountBalanceGetGetRequest {
  advertiserId: number;
}

export class QianchuanAccountBalanceGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAccountBalanceGetGet(request: OpenApiV10QianchuanAccountBalanceGetGetRequest): Promise<QianchuanAccountBalanceGetV10Response> {
    const response = await this.openApiV10QianchuanAccountBalanceGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAccountBalanceGetGetWithHttpInfo(request: OpenApiV10QianchuanAccountBalanceGetGetRequest): Promise<ApiResponse<QianchuanAccountBalanceGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAccountBalanceGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAccountBalanceGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/account/balance/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


