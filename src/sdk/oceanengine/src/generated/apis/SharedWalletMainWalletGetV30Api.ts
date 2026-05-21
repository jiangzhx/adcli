// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { SharedWalletMainWalletGetV30AccountType, SharedWalletMainWalletGetV30Response } from "../models";


export class SharedWalletMainWalletGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletMainWalletGetGet(accountId: number, mainWalletId: number, accountType: SharedWalletMainWalletGetV30AccountType): Promise<SharedWalletMainWalletGetV30Response> {
    const response = await this.openApiV30SharedWalletMainWalletGetGetWithHttpInfo(accountId, mainWalletId, accountType);
    return response.data;
  }

  async openApiV30SharedWalletMainWalletGetGetWithHttpInfo(accountId: number, mainWalletId: number, accountType: SharedWalletMainWalletGetV30AccountType): Promise<ApiResponse<SharedWalletMainWalletGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletMainWalletGetGet");
    }

    if (mainWalletId == null) {
      throw new ApiException("Missing the required parameter 'mainWalletId' when calling openApiV30SharedWalletMainWalletGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletMainWalletGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletMainWalletGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/main_wallet/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "main_wallet_id", value: mainWalletId },
        { name: "account_type", value: accountType }
      ]
    });
  }
}


