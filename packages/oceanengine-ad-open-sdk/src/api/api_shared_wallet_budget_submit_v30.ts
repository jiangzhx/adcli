// Generated from oceanengine/ad_open_sdk_go api/api_shared_wallet_budget_submit_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SharedWalletBudgetSubmitV30Request, SharedWalletBudgetSubmitV30Response } from "../models/index";


export interface SharedWalletBudgetSubmitV30ApiOpenApiV30SharedWalletBudgetSubmitPostRequest {
  sharedWalletBudgetSubmitV30Request?: SharedWalletBudgetSubmitV30Request;
}

export class SharedWalletBudgetSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletBudgetSubmitPost(request: SharedWalletBudgetSubmitV30ApiOpenApiV30SharedWalletBudgetSubmitPostRequest): Promise<SharedWalletBudgetSubmitV30Response> {
    const response = await this.openApiV30SharedWalletBudgetSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletBudgetSubmitPostWithHttpInfo(request: SharedWalletBudgetSubmitV30ApiOpenApiV30SharedWalletBudgetSubmitPostRequest): Promise<ApiResponse<SharedWalletBudgetSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<SharedWalletBudgetSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/shared_wallet/budget/submit/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.sharedWalletBudgetSubmitV30Request
    });
  }
}


