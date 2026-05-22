// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletWatchRuleSubmitV30Request, SharedWalletWatchRuleSubmitV30Response } from "../models";


export interface OpenApiV30SharedWalletWatchRuleSubmitPostRequest {
  sharedWalletWatchRuleSubmitV30Request?: SharedWalletWatchRuleSubmitV30Request;
}

export class SharedWalletWatchRuleSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletWatchRuleSubmitPost(request: OpenApiV30SharedWalletWatchRuleSubmitPostRequest): Promise<SharedWalletWatchRuleSubmitV30Response> {
    const response = await this.openApiV30SharedWalletWatchRuleSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletWatchRuleSubmitPostWithHttpInfo(request: OpenApiV30SharedWalletWatchRuleSubmitPostRequest): Promise<ApiResponse<SharedWalletWatchRuleSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<SharedWalletWatchRuleSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/shared_wallet/watch_rule/submit/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.sharedWalletWatchRuleSubmitV30Request
    });
  }
}


