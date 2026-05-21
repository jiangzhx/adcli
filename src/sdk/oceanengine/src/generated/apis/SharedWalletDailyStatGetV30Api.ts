// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { SharedWalletDailyStatGetV30AccountType, SharedWalletDailyStatGetV30Response } from "../models";


export class SharedWalletDailyStatGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletDailyStatGetGet(accountId: number, accountType: SharedWalletDailyStatGetV30AccountType, sharedWalletId: number, startDate: string, endDate: string, page: number, pageSize: number): Promise<SharedWalletDailyStatGetV30Response> {
    const response = await this.openApiV30SharedWalletDailyStatGetGetWithHttpInfo(accountId, accountType, sharedWalletId, startDate, endDate, page, pageSize);
    return response.data;
  }

  async openApiV30SharedWalletDailyStatGetGetWithHttpInfo(accountId: number, accountType: SharedWalletDailyStatGetV30AccountType, sharedWalletId: number, startDate: string, endDate: string, page: number, pageSize: number): Promise<ApiResponse<SharedWalletDailyStatGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletDailyStatGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletDailyStatGetGet");
    }

    if (sharedWalletId == null) {
      throw new ApiException("Missing the required parameter 'sharedWalletId' when calling openApiV30SharedWalletDailyStatGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletDailyStatGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/daily_stat/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "shared_wallet_id", value: sharedWalletId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


