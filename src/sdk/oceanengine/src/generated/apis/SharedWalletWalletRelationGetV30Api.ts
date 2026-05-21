// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { SharedWalletWalletRelationGetV30AccountType, SharedWalletWalletRelationGetV30Response } from "../models";


export class SharedWalletWalletRelationGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletWalletRelationGetGet(accountId: number, sharedWalletId: number, accountType: SharedWalletWalletRelationGetV30AccountType, page: number, pageSize: number): Promise<SharedWalletWalletRelationGetV30Response> {
    const response = await this.openApiV30SharedWalletWalletRelationGetGetWithHttpInfo(accountId, sharedWalletId, accountType, page, pageSize);
    return response.data;
  }

  async openApiV30SharedWalletWalletRelationGetGetWithHttpInfo(accountId: number, sharedWalletId: number, accountType: SharedWalletWalletRelationGetV30AccountType, page: number, pageSize: number): Promise<ApiResponse<SharedWalletWalletRelationGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletWalletRelationGetGet");
    }

    if (sharedWalletId == null) {
      throw new ApiException("Missing the required parameter 'sharedWalletId' when calling openApiV30SharedWalletWalletRelationGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletWalletRelationGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletWalletRelationGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/wallet_relation/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "shared_wallet_id", value: sharedWalletId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "account_type", value: accountType }
      ]
    });
  }
}


