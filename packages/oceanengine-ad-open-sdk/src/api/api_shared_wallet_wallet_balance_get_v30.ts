// Generated from oceanengine/ad_open_sdk_go api/api_shared_wallet_wallet_balance_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SharedWalletWalletBalanceGetV30AccountType, SharedWalletWalletBalanceGetV30Response, SharedWalletWalletBalanceGetV30WalletBalanceFilters } from "../models/index";


export interface SharedWalletWalletBalanceGetV30ApiOpenApiV30SharedWalletWalletBalanceGetGetRequest {
  accountId: number | string;
  accountType: SharedWalletWalletBalanceGetV30AccountType;
  walletIdList: number[];
  walletBalanceFilters?: SharedWalletWalletBalanceGetV30WalletBalanceFilters;
}

export class SharedWalletWalletBalanceGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletWalletBalanceGetGet(request: SharedWalletWalletBalanceGetV30ApiOpenApiV30SharedWalletWalletBalanceGetGetRequest): Promise<SharedWalletWalletBalanceGetV30Response> {
    const response = await this.openApiV30SharedWalletWalletBalanceGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletWalletBalanceGetGetWithHttpInfo(request: SharedWalletWalletBalanceGetV30ApiOpenApiV30SharedWalletWalletBalanceGetGetRequest): Promise<ApiResponse<SharedWalletWalletBalanceGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletWalletBalanceGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletWalletBalanceGetGet");
    }

    if (request.walletIdList == null) {
      throw new ApiException("Missing the required parameter 'walletIdList' when calling openApiV30SharedWalletWalletBalanceGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletWalletBalanceGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/wallet_balance/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "wallet_id_list", value: request.walletIdList },
        { name: "wallet_balance_filters", value: request.walletBalanceFilters }
      ]
    });
  }
}


