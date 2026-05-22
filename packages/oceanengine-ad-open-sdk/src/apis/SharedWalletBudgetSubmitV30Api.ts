// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletBudgetSubmitV30Request, SharedWalletBudgetSubmitV30Response } from "../models";


export interface OpenApiV30SharedWalletBudgetSubmitPostRequest {
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

  async openApiV30SharedWalletBudgetSubmitPost(request: OpenApiV30SharedWalletBudgetSubmitPostRequest): Promise<SharedWalletBudgetSubmitV30Response> {
    const response = await this.openApiV30SharedWalletBudgetSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletBudgetSubmitPostWithHttpInfo(request: OpenApiV30SharedWalletBudgetSubmitPostRequest): Promise<ApiResponse<SharedWalletBudgetSubmitV30Response>> {

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


