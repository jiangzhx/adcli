// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletWalletRelationGetV30AccountType, SharedWalletWalletRelationGetV30Response } from "../models";


export interface OpenApiV30SharedWalletWalletRelationGetGetRequest {
  accountId: number | string;
  sharedWalletId: number | string;
  accountType: SharedWalletWalletRelationGetV30AccountType;
  page?: number;
  pageSize?: number;
}

export class SharedWalletWalletRelationGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletWalletRelationGetGet(request: OpenApiV30SharedWalletWalletRelationGetGetRequest): Promise<SharedWalletWalletRelationGetV30Response> {
    const response = await this.openApiV30SharedWalletWalletRelationGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletWalletRelationGetGetWithHttpInfo(request: OpenApiV30SharedWalletWalletRelationGetGetRequest): Promise<ApiResponse<SharedWalletWalletRelationGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletWalletRelationGetGet");
    }

    if (request.sharedWalletId == null) {
      throw new ApiException("Missing the required parameter 'sharedWalletId' when calling openApiV30SharedWalletWalletRelationGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletWalletRelationGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletWalletRelationGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/wallet_relation/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "shared_wallet_id", value: request.sharedWalletId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "account_type", value: request.accountType }
      ]
    });
  }
}


