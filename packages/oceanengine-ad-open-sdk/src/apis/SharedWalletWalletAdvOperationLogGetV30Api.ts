// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletWalletAdvOperationLogGetV30AccountType, SharedWalletWalletAdvOperationLogGetV30Filtering, SharedWalletWalletAdvOperationLogGetV30Response } from "../models";


export interface OpenApiV30SharedWalletWalletAdvOperationLogGetGetRequest {
  accountId: number;
  accountType: SharedWalletWalletAdvOperationLogGetV30AccountType;
  walletId: number;
  filtering: SharedWalletWalletAdvOperationLogGetV30Filtering;
  page: number;
  pageSize: number;
}

export class SharedWalletWalletAdvOperationLogGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletWalletAdvOperationLogGetGet(request: OpenApiV30SharedWalletWalletAdvOperationLogGetGetRequest): Promise<SharedWalletWalletAdvOperationLogGetV30Response> {
    const response = await this.openApiV30SharedWalletWalletAdvOperationLogGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletWalletAdvOperationLogGetGetWithHttpInfo(request: OpenApiV30SharedWalletWalletAdvOperationLogGetGetRequest): Promise<ApiResponse<SharedWalletWalletAdvOperationLogGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletWalletAdvOperationLogGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletWalletAdvOperationLogGetGet");
    }

    if (request.walletId == null) {
      throw new ApiException("Missing the required parameter 'walletId' when calling openApiV30SharedWalletWalletAdvOperationLogGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV30SharedWalletWalletAdvOperationLogGetGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30SharedWalletWalletAdvOperationLogGetGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV30SharedWalletWalletAdvOperationLogGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletWalletAdvOperationLogGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/wallet_adv_operation_log/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "wallet_id", value: request.walletId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


