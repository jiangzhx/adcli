// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { SharedWalletTransactionDetailGetV30AccountType, SharedWalletTransactionDetailGetV30Response } from "../models";


export class SharedWalletTransactionDetailGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletTransactionDetailGetGet(accountId: number, accountType: SharedWalletTransactionDetailGetV30AccountType, sharedWalletId: number, startDate: string, endDate: string, page: number, pageSize: number): Promise<SharedWalletTransactionDetailGetV30Response> {
    const response = await this.openApiV30SharedWalletTransactionDetailGetGetWithHttpInfo(accountId, accountType, sharedWalletId, startDate, endDate, page, pageSize);
    return response.data;
  }

  async openApiV30SharedWalletTransactionDetailGetGetWithHttpInfo(accountId: number, accountType: SharedWalletTransactionDetailGetV30AccountType, sharedWalletId: number, startDate: string, endDate: string, page: number, pageSize: number): Promise<ApiResponse<SharedWalletTransactionDetailGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletTransactionDetailGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletTransactionDetailGetGet");
    }

    if (sharedWalletId == null) {
      throw new ApiException("Missing the required parameter 'sharedWalletId' when calling openApiV30SharedWalletTransactionDetailGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30SharedWalletTransactionDetailGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30SharedWalletTransactionDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletTransactionDetailGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/transaction_detail/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "shared_wallet_id", value: sharedWalletId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


