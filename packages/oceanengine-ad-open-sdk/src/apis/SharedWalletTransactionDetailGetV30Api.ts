// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletTransactionDetailGetV30AccountType, SharedWalletTransactionDetailGetV30Response } from "../models";


export interface OpenApiV30SharedWalletTransactionDetailGetGetRequest {
  accountId: number | string;
  accountType: SharedWalletTransactionDetailGetV30AccountType;
  sharedWalletId: number | string;
  startDate: string;
  endDate: string;
  page?: number;
  pageSize?: number;
}

export class SharedWalletTransactionDetailGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletTransactionDetailGetGet(request: OpenApiV30SharedWalletTransactionDetailGetGetRequest): Promise<SharedWalletTransactionDetailGetV30Response> {
    const response = await this.openApiV30SharedWalletTransactionDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletTransactionDetailGetGetWithHttpInfo(request: OpenApiV30SharedWalletTransactionDetailGetGetRequest): Promise<ApiResponse<SharedWalletTransactionDetailGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletTransactionDetailGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletTransactionDetailGetGet");
    }

    if (request.sharedWalletId == null) {
      throw new ApiException("Missing the required parameter 'sharedWalletId' when calling openApiV30SharedWalletTransactionDetailGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30SharedWalletTransactionDetailGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30SharedWalletTransactionDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletTransactionDetailGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/transaction_detail/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "shared_wallet_id", value: request.sharedWalletId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


