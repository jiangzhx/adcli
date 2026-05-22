// Generated from oceanengine/ad_open_sdk_go api/api_fund_shared_wallet_balance_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FundSharedWalletBalanceGetV2Response } from "../models/index";


export interface FundSharedWalletBalanceGetV2ApiOpenApi2FundSharedWalletBalanceGetGetRequest {
  advertiserIds?: number | string[];
}

export class FundSharedWalletBalanceGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FundSharedWalletBalanceGetGet(request: FundSharedWalletBalanceGetV2ApiOpenApi2FundSharedWalletBalanceGetGetRequest): Promise<FundSharedWalletBalanceGetV2Response> {
    const response = await this.openApi2FundSharedWalletBalanceGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FundSharedWalletBalanceGetGetWithHttpInfo(request: FundSharedWalletBalanceGetV2ApiOpenApi2FundSharedWalletBalanceGetGetRequest): Promise<ApiResponse<FundSharedWalletBalanceGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<FundSharedWalletBalanceGetV2Response>({
      method: "GET",
      path: "/open_api/2/fund/shared_wallet_balance/get/",
      queryParams: [
        { name: "advertiser_ids", value: request.advertiserIds, collectionFormat: "csv" }
      ]
    });
  }
}


