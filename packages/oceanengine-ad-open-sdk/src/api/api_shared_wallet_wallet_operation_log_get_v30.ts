// Generated from oceanengine/ad_open_sdk_go api/api_shared_wallet_wallet_operation_log_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SharedWalletWalletOperationLogGetV30AccountType, SharedWalletWalletOperationLogGetV30Filtering, SharedWalletWalletOperationLogGetV30Response } from "../models/index";


export interface SharedWalletWalletOperationLogGetV30ApiOpenApiV30SharedWalletWalletOperationLogGetGetRequest {
  accountId: number | string;
  accountType: SharedWalletWalletOperationLogGetV30AccountType;
  walletId: number | string;
  page: number;
  pageSize: number;
  filtering?: SharedWalletWalletOperationLogGetV30Filtering;
}

export class SharedWalletWalletOperationLogGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletWalletOperationLogGetGet(request: SharedWalletWalletOperationLogGetV30ApiOpenApiV30SharedWalletWalletOperationLogGetGetRequest): Promise<SharedWalletWalletOperationLogGetV30Response> {
    const response = await this.openApiV30SharedWalletWalletOperationLogGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletWalletOperationLogGetGetWithHttpInfo(request: SharedWalletWalletOperationLogGetV30ApiOpenApiV30SharedWalletWalletOperationLogGetGetRequest): Promise<ApiResponse<SharedWalletWalletOperationLogGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }

    if (request.walletId == null) {
      throw new ApiException("walletId is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.page != null && Number(request.page) < 1) {
      throw new ApiException("page must be greater than 1");
    }

    if (request.page != null && Number(request.page) > 10000) {
      throw new ApiException("page must be less than 10000");
    }

    if (request.pageSize == null) {
      throw new ApiException("pageSize is required and must be specified");
    }

    if (request.pageSize != null && Number(request.pageSize) < 10) {
      throw new ApiException("pageSize must be greater than 10");
    }

    if (request.pageSize != null && Number(request.pageSize) > 100) {
      throw new ApiException("pageSize must be less than 100");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletWalletOperationLogGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/wallet_operation_log/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "wallet_id", value: request.walletId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


