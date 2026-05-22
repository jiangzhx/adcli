// Generated from tencentad/marketing-api-go-sdk pkg/api/api_advertiser.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserAddRequest, AdvertiserAddResponseData, AdvertiserGetResponseData, AdvertiserUpdateDailyBudgetRequest, AdvertiserUpdateDailyBudgetResponseData, AdvertiserUpdateRequest, AdvertiserUpdateResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface AdvertiserApiAddRequest {
  data: AdvertiserAddRequest;
}

export interface AdvertiserApiGetRequest {
  agencyId?: number | string;
  accountId?: number | string;
  filtering?: unknown;
  fields?: unknown;
  paginationMode?: string;
  page?: number;
  pageSize?: number;
  cursor?: number;
}

export interface AdvertiserApiUpdateRequest {
  data: AdvertiserUpdateRequest;
}

export interface AdvertiserApiUpdateDailyBudgetRequest {
  data: AdvertiserUpdateDailyBudgetRequest;
}


export class AdvertiserApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: AdvertiserApiAddRequest): Promise<AdvertiserAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: AdvertiserApiAddRequest): Promise<ApiResponse<AdvertiserAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/advertiser/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: AdvertiserApiGetRequest): Promise<AdvertiserGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdvertiserApiGetRequest): Promise<ApiResponse<AdvertiserGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/advertiser/get",
      queryParams: [
        { name: "agency_id", value: request.agencyId },
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" },
        { name: "pagination_mode", value: request.paginationMode },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "cursor", value: request.cursor }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: AdvertiserApiUpdateRequest): Promise<AdvertiserUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: AdvertiserApiUpdateRequest): Promise<ApiResponse<AdvertiserUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/advertiser/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async updateDailyBudget(request: AdvertiserApiUpdateDailyBudgetRequest): Promise<AdvertiserUpdateDailyBudgetResponseData> {
    const response = await this.updateDailyBudgetWithHttpInfo(request);
    return response.data;
  }

  async updateDailyBudgetWithHttpInfo(request: AdvertiserApiUpdateDailyBudgetRequest): Promise<ApiResponse<AdvertiserUpdateDailyBudgetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling updateDailyBudget");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserUpdateDailyBudgetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/advertiser/update_daily_budget",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


