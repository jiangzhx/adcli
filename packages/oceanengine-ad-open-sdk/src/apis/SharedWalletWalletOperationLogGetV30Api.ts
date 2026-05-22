// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletWalletOperationLogGetV30AccountType, SharedWalletWalletOperationLogGetV30Filtering, SharedWalletWalletOperationLogGetV30Response } from "../models";


export interface OpenApiV30SharedWalletWalletOperationLogGetGetRequest {
  accountId: number;
  accountType: SharedWalletWalletOperationLogGetV30AccountType;
  walletId: number;
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

  async openApiV30SharedWalletWalletOperationLogGetGet(request: OpenApiV30SharedWalletWalletOperationLogGetGetRequest): Promise<SharedWalletWalletOperationLogGetV30Response> {
    const response = await this.openApiV30SharedWalletWalletOperationLogGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletWalletOperationLogGetGetWithHttpInfo(request: OpenApiV30SharedWalletWalletOperationLogGetGetRequest): Promise<ApiResponse<SharedWalletWalletOperationLogGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletWalletOperationLogGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletWalletOperationLogGetGet");
    }

    if (request.walletId == null) {
      throw new ApiException("Missing the required parameter 'walletId' when calling openApiV30SharedWalletWalletOperationLogGetGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30SharedWalletWalletOperationLogGetGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV30SharedWalletWalletOperationLogGetGet");
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


