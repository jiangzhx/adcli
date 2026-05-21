// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanFinanceWalletGetV10Response } from "../models";


export class QianchuanFinanceWalletGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanFinanceWalletGetGet(advertiserId: number): Promise<QianchuanFinanceWalletGetV10Response> {
    const response = await this.openApiV10QianchuanFinanceWalletGetGetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApiV10QianchuanFinanceWalletGetGetWithHttpInfo(advertiserId: number): Promise<ApiResponse<QianchuanFinanceWalletGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanFinanceWalletGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanFinanceWalletGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/finance/wallet/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


