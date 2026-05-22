// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletWatchRuleGetV30AccountType, SharedWalletWatchRuleGetV30Response } from "../models";


export interface OpenApiV30SharedWalletWatchRuleGetGetRequest {
  accountId: number;
  accountType: SharedWalletWatchRuleGetV30AccountType;
  subWalletId: number;
}

export class SharedWalletWatchRuleGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletWatchRuleGetGet(request: OpenApiV30SharedWalletWatchRuleGetGetRequest): Promise<SharedWalletWatchRuleGetV30Response> {
    const response = await this.openApiV30SharedWalletWatchRuleGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletWatchRuleGetGetWithHttpInfo(request: OpenApiV30SharedWalletWatchRuleGetGetRequest): Promise<ApiResponse<SharedWalletWatchRuleGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletWatchRuleGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletWatchRuleGetGet");
    }

    if (request.subWalletId == null) {
      throw new ApiException("Missing the required parameter 'subWalletId' when calling openApiV30SharedWalletWatchRuleGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletWatchRuleGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/watch_rule/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "sub_wallet_id", value: request.subWalletId }
      ]
    });
  }
}


