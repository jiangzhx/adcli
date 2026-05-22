// Generated from oceanengine/ad_open_sdk_go api/api_shared_wallet_main_wallet_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SharedWalletMainWalletGetV30AccountType, SharedWalletMainWalletGetV30Response } from "../models/index";


export interface SharedWalletMainWalletGetV30ApiOpenApiV30SharedWalletMainWalletGetGetRequest {
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

  async openApiV30SharedWalletMainWalletGetGet(request: SharedWalletMainWalletGetV30ApiOpenApiV30SharedWalletMainWalletGetGetRequest): Promise<SharedWalletMainWalletGetV30Response> {
    const response = await this.openApiV30SharedWalletMainWalletGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletMainWalletGetGetWithHttpInfo(request: SharedWalletMainWalletGetV30ApiOpenApiV30SharedWalletMainWalletGetGetRequest): Promise<ApiResponse<SharedWalletMainWalletGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.mainWalletId == null) {
      throw new ApiException("mainWalletId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
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


