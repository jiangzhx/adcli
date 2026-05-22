// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletBudgetGetV30AccountType, SharedWalletBudgetGetV30Response } from "../models";


export interface OpenApiV30SharedWalletBudgetGetGetRequest {
  accountId: number;
  accountType: SharedWalletBudgetGetV30AccountType;
  subWalletId: number;
}

export class SharedWalletBudgetGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletBudgetGetGet(request: OpenApiV30SharedWalletBudgetGetGetRequest): Promise<SharedWalletBudgetGetV30Response> {
    const response = await this.openApiV30SharedWalletBudgetGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletBudgetGetGetWithHttpInfo(request: OpenApiV30SharedWalletBudgetGetGetRequest): Promise<ApiResponse<SharedWalletBudgetGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletBudgetGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletBudgetGetGet");
    }

    if (request.subWalletId == null) {
      throw new ApiException("Missing the required parameter 'subWalletId' when calling openApiV30SharedWalletBudgetGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletBudgetGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/budget/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "sub_wallet_id", value: request.subWalletId }
      ]
    });
  }
}


