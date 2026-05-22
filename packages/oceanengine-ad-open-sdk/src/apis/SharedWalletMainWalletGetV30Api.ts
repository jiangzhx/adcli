// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletMainWalletGetV30AccountType, SharedWalletMainWalletGetV30Response } from "../models";


export interface OpenApiV30SharedWalletMainWalletGetGetRequest {
  accountId: number | string;
  mainWalletId: number | string;
  accountType: SharedWalletMainWalletGetV30AccountType;
}

export class SharedWalletMainWalletGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletMainWalletGetGet(request: OpenApiV30SharedWalletMainWalletGetGetRequest): Promise<SharedWalletMainWalletGetV30Response> {
    const response = await this.openApiV30SharedWalletMainWalletGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletMainWalletGetGetWithHttpInfo(request: OpenApiV30SharedWalletMainWalletGetGetRequest): Promise<ApiResponse<SharedWalletMainWalletGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletMainWalletGetGet");
    }

    if (request.mainWalletId == null) {
      throw new ApiException("Missing the required parameter 'mainWalletId' when calling openApiV30SharedWalletMainWalletGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletMainWalletGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletMainWalletGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/main_wallet/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "main_wallet_id", value: request.mainWalletId },
        { name: "account_type", value: request.accountType }
      ]
    });
  }
}


