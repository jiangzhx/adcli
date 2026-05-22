// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AccountFundGetV30AccountType, AccountFundGetV30GrantTypeSplit, AccountFundGetV30Response } from "../models";


export class AccountFundGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AccountFundGetGet(accountIds: number[], accountType: AccountFundGetV30AccountType, grantTypeSplit: AccountFundGetV30GrantTypeSplit): Promise<AccountFundGetV30Response> {
    const response = await this.openApiV30AccountFundGetGetWithHttpInfo(accountIds, accountType, grantTypeSplit);
    return response.data;
  }

  async openApiV30AccountFundGetGetWithHttpInfo(accountIds: number[], accountType: AccountFundGetV30AccountType, grantTypeSplit: AccountFundGetV30GrantTypeSplit): Promise<ApiResponse<AccountFundGetV30Response>> {
    if (accountIds == null) {
      throw new ApiException("Missing the required parameter 'accountIds' when calling openApiV30AccountFundGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30AccountFundGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AccountFundGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/account/fund/get/",
      queryParams: [
        { name: "account_type", value: accountType },
        { name: "grant_type_split", value: grantTypeSplit },
        { name: "account_ids", value: accountIds, collectionFormat: "csv" }
      ]
    });
  }
}


