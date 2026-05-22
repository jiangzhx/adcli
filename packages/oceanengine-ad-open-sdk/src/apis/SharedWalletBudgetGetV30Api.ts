// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletBudgetGetV30AccountType, SharedWalletBudgetGetV30Response } from "../models";


export class SharedWalletBudgetGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletBudgetGetGet(accountId: number, accountType: SharedWalletBudgetGetV30AccountType, subWalletId: number): Promise<SharedWalletBudgetGetV30Response> {
    const response = await this.openApiV30SharedWalletBudgetGetGetWithHttpInfo(accountId, accountType, subWalletId);
    return response.data;
  }

  async openApiV30SharedWalletBudgetGetGetWithHttpInfo(accountId: number, accountType: SharedWalletBudgetGetV30AccountType, subWalletId: number): Promise<ApiResponse<SharedWalletBudgetGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletBudgetGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletBudgetGetGet");
    }

    if (subWalletId == null) {
      throw new ApiException("Missing the required parameter 'subWalletId' when calling openApiV30SharedWalletBudgetGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletBudgetGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/budget/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "sub_wallet_id", value: subWalletId }
      ]
    });
  }
}


