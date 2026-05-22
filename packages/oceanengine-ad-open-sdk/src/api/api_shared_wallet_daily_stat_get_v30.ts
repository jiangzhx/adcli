// Generated from oceanengine/ad_open_sdk_go api/api_shared_wallet_daily_stat_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SharedWalletDailyStatGetV30AccountType, SharedWalletDailyStatGetV30Response } from "../models/index";


export interface SharedWalletDailyStatGetV30ApiOpenApiV30SharedWalletDailyStatGetGetRequest {
  accountId: number | string;
  accountType: SharedWalletDailyStatGetV30AccountType;
  sharedWalletId: number | string;
  startDate?: string;
  endDate?: string;
  page?: number;
  pageSize?: number;
}

export class SharedWalletDailyStatGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletDailyStatGetGet(request: SharedWalletDailyStatGetV30ApiOpenApiV30SharedWalletDailyStatGetGetRequest): Promise<SharedWalletDailyStatGetV30Response> {
    const response = await this.openApiV30SharedWalletDailyStatGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletDailyStatGetGetWithHttpInfo(request: SharedWalletDailyStatGetV30ApiOpenApiV30SharedWalletDailyStatGetGetRequest): Promise<ApiResponse<SharedWalletDailyStatGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletDailyStatGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletDailyStatGetGet");
    }

    if (request.sharedWalletId == null) {
      throw new ApiException("Missing the required parameter 'sharedWalletId' when calling openApiV30SharedWalletDailyStatGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletDailyStatGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/daily_stat/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "shared_wallet_id", value: request.sharedWalletId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


