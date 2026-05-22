// Generated from oceanengine/ad_open_sdk_go api/api_shared_wallet_transaction_detail_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SharedWalletTransactionDetailGetV30AccountType, SharedWalletTransactionDetailGetV30Response } from "../models/index";


export interface SharedWalletTransactionDetailGetV30ApiOpenApiV30SharedWalletTransactionDetailGetGetRequest {
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

  async openApiV30SharedWalletTransactionDetailGetGet(request: SharedWalletTransactionDetailGetV30ApiOpenApiV30SharedWalletTransactionDetailGetGetRequest): Promise<SharedWalletTransactionDetailGetV30Response> {
    const response = await this.openApiV30SharedWalletTransactionDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletTransactionDetailGetGetWithHttpInfo(request: SharedWalletTransactionDetailGetV30ApiOpenApiV30SharedWalletTransactionDetailGetGetRequest): Promise<ApiResponse<SharedWalletTransactionDetailGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }

    if (request.sharedWalletId == null) {
      throw new ApiException("sharedWalletId is required and must be specified");
    }

    if (request.startDate == null) {
      throw new ApiException("startDate is required and must be specified");
    }

    if (request.endDate == null) {
      throw new ApiException("endDate is required and must be specified");
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


