// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FundSharedWalletBalanceGetV2Response } from "../models";


export interface OpenApi2FundSharedWalletBalanceGetGetRequest {
  advertiserIds?: number[];
}

export class FundSharedWalletBalanceGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FundSharedWalletBalanceGetGet(request: OpenApi2FundSharedWalletBalanceGetGetRequest): Promise<FundSharedWalletBalanceGetV2Response> {
    const response = await this.openApi2FundSharedWalletBalanceGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FundSharedWalletBalanceGetGetWithHttpInfo(request: OpenApi2FundSharedWalletBalanceGetGetRequest): Promise<ApiResponse<FundSharedWalletBalanceGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<FundSharedWalletBalanceGetV2Response>({
      method: "GET",
      path: "/open_api/2/fund/shared_wallet_balance/get/",
      queryParams: [
        { name: "advertiser_ids", value: request.advertiserIds, collectionFormat: "csv" }
      ]
    });
  }
}


