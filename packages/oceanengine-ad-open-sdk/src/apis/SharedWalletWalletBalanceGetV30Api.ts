// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletWalletBalanceGetV30AccountType, SharedWalletWalletBalanceGetV30Response, SharedWalletWalletBalanceGetV30WalletBalanceFilters } from "../models";


export class SharedWalletWalletBalanceGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletWalletBalanceGetGet(accountId: number, accountType: SharedWalletWalletBalanceGetV30AccountType, walletIdList: number[], walletBalanceFilters: SharedWalletWalletBalanceGetV30WalletBalanceFilters): Promise<SharedWalletWalletBalanceGetV30Response> {
    const response = await this.openApiV30SharedWalletWalletBalanceGetGetWithHttpInfo(accountId, accountType, walletIdList, walletBalanceFilters);
    return response.data;
  }

  async openApiV30SharedWalletWalletBalanceGetGetWithHttpInfo(accountId: number, accountType: SharedWalletWalletBalanceGetV30AccountType, walletIdList: number[], walletBalanceFilters: SharedWalletWalletBalanceGetV30WalletBalanceFilters): Promise<ApiResponse<SharedWalletWalletBalanceGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletWalletBalanceGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletWalletBalanceGetGet");
    }

    if (walletIdList == null) {
      throw new ApiException("Missing the required parameter 'walletIdList' when calling openApiV30SharedWalletWalletBalanceGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletWalletBalanceGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/wallet_balance/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "wallet_balance_filters", value: walletBalanceFilters },
        { name: "wallet_id_list", value: walletIdList, collectionFormat: "csv" }
      ]
    });
  }
}


