// Generated from oceanengine/ad_open_sdk_go api/api_shared_wallet_watch_rule_submit_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SharedWalletWatchRuleSubmitV30Request, SharedWalletWatchRuleSubmitV30Response } from "../models/index";


export interface SharedWalletWatchRuleSubmitV30ApiOpenApiV30SharedWalletWatchRuleSubmitPostRequest {
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

  async openApiV30SharedWalletWatchRuleSubmitPost(request: SharedWalletWatchRuleSubmitV30ApiOpenApiV30SharedWalletWatchRuleSubmitPostRequest): Promise<SharedWalletWatchRuleSubmitV30Response> {
    const response = await this.openApiV30SharedWalletWatchRuleSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletWatchRuleSubmitPostWithHttpInfo(request: SharedWalletWatchRuleSubmitV30ApiOpenApiV30SharedWalletWatchRuleSubmitPostRequest): Promise<ApiResponse<SharedWalletWatchRuleSubmitV30Response>> {

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


