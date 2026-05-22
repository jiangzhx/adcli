// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserAddRequest, AdvertiserAddResponseData, AdvertiserGetResponseData, AdvertiserUpdateDailyBudgetRequest, AdvertiserUpdateDailyBudgetResponseData, AdvertiserUpdateRequest, AdvertiserUpdateResponseData } from "../models";

export interface V3AdvertiserApiAddRequest {
  data: AdvertiserAddRequest;
}

export interface V3AdvertiserApiGetRequest {
  fields: string[];
  paginationMode: string;
  pageSize: number;
  agencyId?: number | string;
  accountId?: number | string;
  filtering?: unknown;
  page?: number;
  cursor?: number;
}

export interface V3AdvertiserApiUpdateRequest {
  data: AdvertiserUpdateRequest;
}

export interface V3AdvertiserApiUpdateDailyBudgetRequest {
  data: AdvertiserUpdateDailyBudgetRequest;
}


export class V3AdvertiserApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3AdvertiserApiAddRequest): Promise<AdvertiserAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3AdvertiserApiAddRequest): Promise<ApiResponse<AdvertiserAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserAddResponseData>({
      method: "POST",
      path: "/advertiser/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3AdvertiserApiGetRequest): Promise<AdvertiserGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3AdvertiserApiGetRequest): Promise<ApiResponse<AdvertiserGetResponseData>> {
    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling get");
    }

    if (request.paginationMode == null) {
      throw new ApiException("Missing the required parameter 'paginationMode' when calling get");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserGetResponseData>({
      method: "GET",
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

  async update(request: V3AdvertiserApiUpdateRequest): Promise<AdvertiserUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3AdvertiserApiUpdateRequest): Promise<ApiResponse<AdvertiserUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserUpdateResponseData>({
      method: "POST",
      path: "/advertiser/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async updateDailyBudget(request: V3AdvertiserApiUpdateDailyBudgetRequest): Promise<AdvertiserUpdateDailyBudgetResponseData> {
    const response = await this.updateDailyBudgetWithHttpInfo(request);
    return response.data;
  }

  async updateDailyBudgetWithHttpInfo(request: V3AdvertiserApiUpdateDailyBudgetRequest): Promise<ApiResponse<AdvertiserUpdateDailyBudgetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling updateDailyBudget");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserUpdateDailyBudgetResponseData>({
      method: "POST",
      path: "/advertiser/update_daily_budget",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


