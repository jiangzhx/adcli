// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_account_balance_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAccountBalanceGetV10Response } from "../models/index";


export interface QianchuanAccountBalanceGetV10ApiOpenApiV10QianchuanAccountBalanceGetGetRequest {
  advertiserId: number | string;
}

export class QianchuanAccountBalanceGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAccountBalanceGetGet(request: QianchuanAccountBalanceGetV10ApiOpenApiV10QianchuanAccountBalanceGetGetRequest): Promise<QianchuanAccountBalanceGetV10Response> {
    const response = await this.openApiV10QianchuanAccountBalanceGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAccountBalanceGetGetWithHttpInfo(request: QianchuanAccountBalanceGetV10ApiOpenApiV10QianchuanAccountBalanceGetGetRequest): Promise<ApiResponse<QianchuanAccountBalanceGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


