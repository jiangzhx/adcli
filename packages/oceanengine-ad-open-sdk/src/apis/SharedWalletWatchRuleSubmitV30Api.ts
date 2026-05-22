// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletWatchRuleSubmitV30Request, SharedWalletWatchRuleSubmitV30Response } from "../models";


export class SharedWalletWatchRuleSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletWatchRuleSubmitPost(sharedWalletWatchRuleSubmitV30Request: SharedWalletWatchRuleSubmitV30Request): Promise<SharedWalletWatchRuleSubmitV30Response> {
    const response = await this.openApiV30SharedWalletWatchRuleSubmitPostWithHttpInfo(sharedWalletWatchRuleSubmitV30Request);
    return response.data;
  }

  async openApiV30SharedWalletWatchRuleSubmitPostWithHttpInfo(sharedWalletWatchRuleSubmitV30Request: SharedWalletWatchRuleSubmitV30Request): Promise<ApiResponse<SharedWalletWatchRuleSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<SharedWalletWatchRuleSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/shared_wallet/watch_rule/submit/",
      queryParams: [

      ],
      body: sharedWalletWatchRuleSubmitV30Request
    });
  }
}


