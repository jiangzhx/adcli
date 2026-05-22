// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_advertiser_daily_budget.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserDailyBudgetGetResponseData, AdvertiserDailyBudgetUpdateRequest, AdvertiserDailyBudgetUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface AdvertiserDailyBudgetApiGetRequest {
  accountId: number | string;
  fields: string[];
}

export interface AdvertiserDailyBudgetApiUpdateRequest {
  data: AdvertiserDailyBudgetUpdateRequest;
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

    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserDailyBudgetGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/advertiser_daily_budget/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: AdvertiserDailyBudgetApiUpdateRequest): Promise<AdvertiserDailyBudgetUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: AdvertiserDailyBudgetApiUpdateRequest): Promise<ApiResponse<AdvertiserDailyBudgetUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserDailyBudgetUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/advertiser_daily_budget/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


