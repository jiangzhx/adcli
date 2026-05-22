// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletAccountRelationGetV30AccountType, SharedWalletAccountRelationGetV30Response } from "../models";


export class SharedWalletAccountRelationGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletAccountRelationGetGet(accountId: number, accountType: SharedWalletAccountRelationGetV30AccountType): Promise<SharedWalletAccountRelationGetV30Response> {
    const response = await this.openApiV30SharedWalletAccountRelationGetGetWithHttpInfo(accountId, accountType);
    return response.data;
  }

  async openApiV30SharedWalletAccountRelationGetGetWithHttpInfo(accountId: number, accountType: SharedWalletAccountRelationGetV30AccountType): Promise<ApiResponse<SharedWalletAccountRelationGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletAccountRelationGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletAccountRelationGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletAccountRelationGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/account_relation/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType }
      ]
    });
  }
}


