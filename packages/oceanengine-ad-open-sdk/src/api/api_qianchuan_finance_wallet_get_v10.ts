// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_finance_wallet_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanFinanceWalletGetV10Response } from "../models/index";


export interface QianchuanFinanceWalletGetV10ApiOpenApiV10QianchuanFinanceWalletGetGetRequest {
  advertiserId: number | string;
}

export class QianchuanFinanceWalletGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanFinanceWalletGetGet(request: QianchuanFinanceWalletGetV10ApiOpenApiV10QianchuanFinanceWalletGetGetRequest): Promise<QianchuanFinanceWalletGetV10Response> {
    const response = await this.openApiV10QianchuanFinanceWalletGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanFinanceWalletGetGetWithHttpInfo(request: QianchuanFinanceWalletGetV10ApiOpenApiV10QianchuanFinanceWalletGetGetRequest): Promise<ApiResponse<QianchuanFinanceWalletGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanFinanceWalletGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanFinanceWalletGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/finance/wallet/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


