// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletAccountRelationGetV30AccountType, SharedWalletAccountRelationGetV30Response } from "../models";


export interface OpenApiV30SharedWalletAccountRelationGetGetRequest {
  accountId: number;
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

  async openApiV30SharedWalletAccountRelationGetGet(request: OpenApiV30SharedWalletAccountRelationGetGetRequest): Promise<SharedWalletAccountRelationGetV30Response> {
    const response = await this.openApiV30SharedWalletAccountRelationGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletAccountRelationGetGetWithHttpInfo(request: OpenApiV30SharedWalletAccountRelationGetGetRequest): Promise<ApiResponse<SharedWalletAccountRelationGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletAccountRelationGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletAccountRelationGetGet");
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


