// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletWatchRuleGetV30AccountType, SharedWalletWatchRuleGetV30Response } from "../models";


export class SharedWalletWatchRuleGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletWatchRuleGetGet(accountId: number, accountType: SharedWalletWatchRuleGetV30AccountType, subWalletId: number): Promise<SharedWalletWatchRuleGetV30Response> {
    const response = await this.openApiV30SharedWalletWatchRuleGetGetWithHttpInfo(accountId, accountType, subWalletId);
    return response.data;
  }

  async openApiV30SharedWalletWatchRuleGetGetWithHttpInfo(accountId: number, accountType: SharedWalletWatchRuleGetV30AccountType, subWalletId: number): Promise<ApiResponse<SharedWalletWatchRuleGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletWatchRuleGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletWatchRuleGetGet");
    }

    if (subWalletId == null) {
      throw new ApiException("Missing the required parameter 'subWalletId' when calling openApiV30SharedWalletWatchRuleGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletWatchRuleGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/watch_rule/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "sub_wallet_id", value: subWalletId }
      ]
    });
  }
}


