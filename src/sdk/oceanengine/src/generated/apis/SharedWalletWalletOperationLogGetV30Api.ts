// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { SharedWalletWalletOperationLogGetV30AccountType, SharedWalletWalletOperationLogGetV30Filtering, SharedWalletWalletOperationLogGetV30Response } from "../models";


export class SharedWalletWalletOperationLogGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletWalletOperationLogGetGet(accountId: number, accountType: SharedWalletWalletOperationLogGetV30AccountType, walletId: number, page: number, pageSize: number, filtering: SharedWalletWalletOperationLogGetV30Filtering): Promise<SharedWalletWalletOperationLogGetV30Response> {
    const response = await this.openApiV30SharedWalletWalletOperationLogGetGetWithHttpInfo(accountId, accountType, walletId, page, pageSize, filtering);
    return response.data;
  }

  async openApiV30SharedWalletWalletOperationLogGetGetWithHttpInfo(accountId: number, accountType: SharedWalletWalletOperationLogGetV30AccountType, walletId: number, page: number, pageSize: number, filtering: SharedWalletWalletOperationLogGetV30Filtering): Promise<ApiResponse<SharedWalletWalletOperationLogGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletWalletOperationLogGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletWalletOperationLogGetGet");
    }

    if (walletId == null) {
      throw new ApiException("Missing the required parameter 'walletId' when calling openApiV30SharedWalletWalletOperationLogGetGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30SharedWalletWalletOperationLogGetGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV30SharedWalletWalletOperationLogGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletWalletOperationLogGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/wallet_operation_log/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "wallet_id", value: walletId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


