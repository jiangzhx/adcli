// Generated from oceanengine/ad_open_sdk_go api/api_shared_wallet_wallet_relation_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SharedWalletWalletRelationGetV30AccountType, SharedWalletWalletRelationGetV30Response } from "../models/index";


export interface SharedWalletWalletRelationGetV30ApiOpenApiV30SharedWalletWalletRelationGetGetRequest {
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

  async openApiV30SharedWalletWalletRelationGetGet(request: SharedWalletWalletRelationGetV30ApiOpenApiV30SharedWalletWalletRelationGetGetRequest): Promise<SharedWalletWalletRelationGetV30Response> {
    const response = await this.openApiV30SharedWalletWalletRelationGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletWalletRelationGetGetWithHttpInfo(request: SharedWalletWalletRelationGetV30ApiOpenApiV30SharedWalletWalletRelationGetGetRequest): Promise<ApiResponse<SharedWalletWalletRelationGetV30Response>> {
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


