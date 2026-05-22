// Generated from oceanengine/ad_open_sdk_go api/api_account_fund_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AccountFundGetV30AccountType, AccountFundGetV30GrantTypeSplit, AccountFundGetV30Response } from "../models/index";


export interface AccountFundGetV30ApiOpenApiV30AccountFundGetGetRequest {
  accountIds: (number | string)[];
  accountType: AccountFundGetV30AccountType;
  grantTypeSplit?: AccountFundGetV30GrantTypeSplit;
}

export class AccountFundGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AccountFundGetGet(request: AccountFundGetV30ApiOpenApiV30AccountFundGetGetRequest): Promise<AccountFundGetV30Response> {
    const response = await this.openApiV30AccountFundGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AccountFundGetGetWithHttpInfo(request: AccountFundGetV30ApiOpenApiV30AccountFundGetGetRequest): Promise<ApiResponse<AccountFundGetV30Response>> {
    if (request.accountIds == null) {
      throw new ApiException("accountIds is required and must be specified");
    }

    if (request.accountIds != null && request.accountIds.length < 1) {
      throw new ApiException("accountIds must have at least 1 elements");
    }

    if (request.accountIds != null && request.accountIds.length > 50) {
      throw new ApiException("accountIds must have less than 50 elements");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<AccountFundGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/account/fund/get/",
      queryParams: [
        { name: "account_ids", value: request.accountIds },
        { name: "account_type", value: request.accountType },
        { name: "grant_type_split", value: request.grantTypeSplit }
      ]
    });
  }
}


