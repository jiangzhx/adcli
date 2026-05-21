// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { SharedWalletWalletAdvOperationLogGetV30AccountType, SharedWalletWalletAdvOperationLogGetV30Filtering, SharedWalletWalletAdvOperationLogGetV30Response } from "../models";


export class SharedWalletWalletAdvOperationLogGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletWalletAdvOperationLogGetGet(accountId: number, accountType: SharedWalletWalletAdvOperationLogGetV30AccountType, walletId: number, filtering: SharedWalletWalletAdvOperationLogGetV30Filtering, page: number, pageSize: number): Promise<SharedWalletWalletAdvOperationLogGetV30Response> {
    const response = await this.openApiV30SharedWalletWalletAdvOperationLogGetGetWithHttpInfo(accountId, accountType, walletId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30SharedWalletWalletAdvOperationLogGetGetWithHttpInfo(accountId: number, accountType: SharedWalletWalletAdvOperationLogGetV30AccountType, walletId: number, filtering: SharedWalletWalletAdvOperationLogGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<SharedWalletWalletAdvOperationLogGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletWalletAdvOperationLogGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletWalletAdvOperationLogGetGet");
    }

    if (walletId == null) {
      throw new ApiException("Missing the required parameter 'walletId' when calling openApiV30SharedWalletWalletAdvOperationLogGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV30SharedWalletWalletAdvOperationLogGetGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30SharedWalletWalletAdvOperationLogGetGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV30SharedWalletWalletAdvOperationLogGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletWalletAdvOperationLogGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/wallet_adv_operation_log/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "wallet_id", value: walletId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


