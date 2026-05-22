// Generated from tencentad/marketing-api-go-sdk pkg/api/api_advertiser_daily_budget.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserDailyBudgetGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface AdvertiserDailyBudgetApiGetRequest {
  accountId: number | string;
  fields?: unknown;
}


export class AdvertiserDailyBudgetApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AdvertiserDailyBudgetApiGetRequest): Promise<AdvertiserDailyBudgetGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdvertiserDailyBudgetApiGetRequest): Promise<ApiResponse<AdvertiserDailyBudgetGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserDailyBudgetGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/advertiser_daily_budget/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


