// Generated from oceanengine/ad_open_sdk_go api/api_shared_wallet_watch_rule_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SharedWalletWatchRuleGetV30AccountType, SharedWalletWatchRuleGetV30Response } from "../models/index";


export interface SharedWalletWatchRuleGetV30ApiOpenApiV30SharedWalletWatchRuleGetGetRequest {
  accountId: number | string;
  accountType: SharedWalletWatchRuleGetV30AccountType;
  subWalletId: number | string;
}

export class SharedWalletWatchRuleGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletWatchRuleGetGet(request: SharedWalletWatchRuleGetV30ApiOpenApiV30SharedWalletWatchRuleGetGetRequest): Promise<SharedWalletWatchRuleGetV30Response> {
    const response = await this.openApiV30SharedWalletWatchRuleGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletWatchRuleGetGetWithHttpInfo(request: SharedWalletWatchRuleGetV30ApiOpenApiV30SharedWalletWatchRuleGetGetRequest): Promise<ApiResponse<SharedWalletWatchRuleGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }

    if (request.subWalletId == null) {
      throw new ApiException("subWalletId is required and must be specified");
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


