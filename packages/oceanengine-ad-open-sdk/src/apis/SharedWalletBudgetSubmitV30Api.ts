// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletBudgetSubmitV30Request, SharedWalletBudgetSubmitV30Response } from "../models";


export class SharedWalletBudgetSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletBudgetSubmitPost(sharedWalletBudgetSubmitV30Request: SharedWalletBudgetSubmitV30Request): Promise<SharedWalletBudgetSubmitV30Response> {
    const response = await this.openApiV30SharedWalletBudgetSubmitPostWithHttpInfo(sharedWalletBudgetSubmitV30Request);
    return response.data;
  }

  async openApiV30SharedWalletBudgetSubmitPostWithHttpInfo(sharedWalletBudgetSubmitV30Request: SharedWalletBudgetSubmitV30Request): Promise<ApiResponse<SharedWalletBudgetSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<SharedWalletBudgetSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/shared_wallet/budget/submit/",
      queryParams: [

      ],
      body: sharedWalletBudgetSubmitV30Request
    });
  }
}


