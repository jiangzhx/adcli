// Generated from oceanengine/ad_open_sdk_go api/api_shared_wallet_account_relation_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SharedWalletAccountRelationGetV30AccountType, SharedWalletAccountRelationGetV30Response } from "../models/index";


export interface SharedWalletAccountRelationGetV30ApiOpenApiV30SharedWalletAccountRelationGetGetRequest {
  accountId: number | string;
  accountType: SharedWalletAccountRelationGetV30AccountType;
}

export class SharedWalletAccountRelationGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletAccountRelationGetGet(request: SharedWalletAccountRelationGetV30ApiOpenApiV30SharedWalletAccountRelationGetGetRequest): Promise<SharedWalletAccountRelationGetV30Response> {
    const response = await this.openApiV30SharedWalletAccountRelationGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletAccountRelationGetGetWithHttpInfo(request: SharedWalletAccountRelationGetV30ApiOpenApiV30SharedWalletAccountRelationGetGetRequest): Promise<ApiResponse<SharedWalletAccountRelationGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletAccountRelationGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/account_relation/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType }
      ]
    });
  }
}


