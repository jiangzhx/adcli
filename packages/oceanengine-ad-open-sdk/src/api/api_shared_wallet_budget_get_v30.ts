// Generated from oceanengine/ad_open_sdk_go api/api_shared_wallet_budget_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SharedWalletBudgetGetV30AccountType, SharedWalletBudgetGetV30Response } from "../models/index";


export interface SharedWalletBudgetGetV30ApiOpenApiV30SharedWalletBudgetGetGetRequest {
  accountId: number | string;
  accountType: SharedWalletBudgetGetV30AccountType;
  subWalletId: number | string;
}

export class SharedWalletBudgetGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletBudgetGetGet(request: SharedWalletBudgetGetV30ApiOpenApiV30SharedWalletBudgetGetGetRequest): Promise<SharedWalletBudgetGetV30Response> {
    const response = await this.openApiV30SharedWalletBudgetGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletBudgetGetGetWithHttpInfo(request: SharedWalletBudgetGetV30ApiOpenApiV30SharedWalletBudgetGetGetRequest): Promise<ApiResponse<SharedWalletBudgetGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }

    if (request.subWalletId == null) {
      throw new ApiException("subWalletId is required and must be specified");
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


