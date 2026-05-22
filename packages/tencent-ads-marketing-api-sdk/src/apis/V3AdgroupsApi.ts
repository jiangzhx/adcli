// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdgroupsAddRequest, AdgroupsAddResponseData, AdgroupsDeleteRequest, AdgroupsDeleteResponseData, AdgroupsGetResponseData, AdgroupsUpdateBidAmountRequest, AdgroupsUpdateBidAmountResponseData, AdgroupsUpdateConfiguredStatusRequest, AdgroupsUpdateConfiguredStatusResponseData, AdgroupsUpdateDailyBudgetRequest, AdgroupsUpdateDailyBudgetResponseData, AdgroupsUpdateDatetimeRequest, AdgroupsUpdateDatetimeResponseData, AdgroupsUpdateRequest, AdgroupsUpdateResponseData } from "../models";

export interface V3AdgroupsApiAddRequest {
  data: AdgroupsAddRequest;
}

export interface V3AdgroupsApiDeleteRequest {
  data: AdgroupsDeleteRequest;
}

export interface V3AdgroupsApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  isDeleted?: boolean;
  fields?: unknown;
  paginationMode?: string;
  cursor?: string;
}

export interface V3AdgroupsApiUpdateRequest {
  data: AdgroupsUpdateRequest;
}

export interface V3AdgroupsApiUpdateBidAmountRequest {
  data: AdgroupsUpdateBidAmountRequest;
}

export interface V3AdgroupsApiUpdateConfiguredStatusRequest {
  data: AdgroupsUpdateConfiguredStatusRequest;
}

export interface V3AdgroupsApiUpdateDailyBudgetRequest {
  data: AdgroupsUpdateDailyBudgetRequest;
}

export interface V3AdgroupsApiUpdateDatetimeRequest {
  data: AdgroupsUpdateDatetimeRequest;
}


export class V3AdgroupsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3AdgroupsApiAddRequest): Promise<AdgroupsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3AdgroupsApiAddRequest): Promise<ApiResponse<AdgroupsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<AdgroupsAddResponseData>({
      method: "POST",
      path: "/adgroups/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: V3AdgroupsApiDeleteRequest): Promise<AdgroupsDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3AdgroupsApiDeleteRequest): Promise<ApiResponse<AdgroupsDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<AdgroupsDeleteResponseData>({
      method: "POST",
      path: "/adgroups/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3AdgroupsApiGetRequest): Promise<AdgroupsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3AdgroupsApiGetRequest): Promise<ApiResponse<AdgroupsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdgroupsGetResponseData>({
      method: "GET",
      path: "/adgroups/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "is_deleted", value: request.isDeleted },
        { name: "fields", value: request.fields, collectionFormat: "multi" },
        { name: "pagination_mode", value: request.paginationMode },
        { name: "cursor", value: request.cursor }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: V3AdgroupsApiUpdateRequest): Promise<AdgroupsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3AdgroupsApiUpdateRequest): Promise<ApiResponse<AdgroupsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<AdgroupsUpdateResponseData>({
      method: "POST",
      path: "/adgroups/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async updateBidAmount(request: V3AdgroupsApiUpdateBidAmountRequest): Promise<AdgroupsUpdateBidAmountResponseData> {
    const response = await this.updateBidAmountWithHttpInfo(request);
    return response.data;
  }

  async updateBidAmountWithHttpInfo(request: V3AdgroupsApiUpdateBidAmountRequest): Promise<ApiResponse<AdgroupsUpdateBidAmountResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling updateBidAmount");
    }
    return this.apiClient.requestWithHttpInfo<AdgroupsUpdateBidAmountResponseData>({
      method: "POST",
      path: "/adgroups/update_bid_amount",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async updateConfiguredStatus(request: V3AdgroupsApiUpdateConfiguredStatusRequest): Promise<AdgroupsUpdateConfiguredStatusResponseData> {
    const response = await this.updateConfiguredStatusWithHttpInfo(request);
    return response.data;
  }

  async updateConfiguredStatusWithHttpInfo(request: V3AdgroupsApiUpdateConfiguredStatusRequest): Promise<ApiResponse<AdgroupsUpdateConfiguredStatusResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling updateConfiguredStatus");
    }
    return this.apiClient.requestWithHttpInfo<AdgroupsUpdateConfiguredStatusResponseData>({
      method: "POST",
      path: "/adgroups/update_configured_status",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async updateDailyBudget(request: V3AdgroupsApiUpdateDailyBudgetRequest): Promise<AdgroupsUpdateDailyBudgetResponseData> {
    const response = await this.updateDailyBudgetWithHttpInfo(request);
    return response.data;
  }

  async updateDailyBudgetWithHttpInfo(request: V3AdgroupsApiUpdateDailyBudgetRequest): Promise<ApiResponse<AdgroupsUpdateDailyBudgetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling updateDailyBudget");
    }
    return this.apiClient.requestWithHttpInfo<AdgroupsUpdateDailyBudgetResponseData>({
      method: "POST",
      path: "/adgroups/update_daily_budget",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async updateDatetime(request: V3AdgroupsApiUpdateDatetimeRequest): Promise<AdgroupsUpdateDatetimeResponseData> {
    const response = await this.updateDatetimeWithHttpInfo(request);
    return response.data;
  }

  async updateDatetimeWithHttpInfo(request: V3AdgroupsApiUpdateDatetimeRequest): Promise<ApiResponse<AdgroupsUpdateDatetimeResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling updateDatetime");
    }
    return this.apiClient.requestWithHttpInfo<AdgroupsUpdateDatetimeResponseData>({
      method: "POST",
      path: "/adgroups/update_datetime",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


