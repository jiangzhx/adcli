// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdgroupsAddNegativewordRequest, AdgroupsAddNegativewordResponseData, AdgroupsAddRequest, AdgroupsAddResponseData, AdgroupsDeleteRequest, AdgroupsDeleteResponseData, AdgroupsGetNegativewordRequest, AdgroupsGetNegativewordResponseData, AdgroupsGetResponseData, AdgroupsUpdateBidAmountRequest, AdgroupsUpdateBidAmountResponseData, AdgroupsUpdateConfiguredStatusRequest, AdgroupsUpdateConfiguredStatusResponseData, AdgroupsUpdateDailyBudgetRequest, AdgroupsUpdateDailyBudgetResponseData, AdgroupsUpdateDatetimeRequest, AdgroupsUpdateDatetimeResponseData, AdgroupsUpdateNegativewordRequest, AdgroupsUpdateNegativewordResponseData, AdgroupsUpdateRequest, AdgroupsUpdateResponseData } from "../models";

export interface AdgroupsApiAddRequest {
  data: AdgroupsAddRequest;
}

export interface AdgroupsApiAddNegativewordRequest {
  data: AdgroupsAddNegativewordRequest;
}

export interface AdgroupsApiDeleteRequest {
  data: AdgroupsDeleteRequest;
}

export interface AdgroupsApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  isDeleted?: boolean;
  weixinOfficialAccountsUpgradeEnabled?: boolean;
  fields?: unknown;
}

export interface AdgroupsApiGetNegativewordRequest {
  data: AdgroupsGetNegativewordRequest;
}

export interface AdgroupsApiUpdateRequest {
  data: AdgroupsUpdateRequest;
}

export interface AdgroupsApiUpdateBidAmountRequest {
  data: AdgroupsUpdateBidAmountRequest;
}

export interface AdgroupsApiUpdateConfiguredStatusRequest {
  data: AdgroupsUpdateConfiguredStatusRequest;
}

export interface AdgroupsApiUpdateDailyBudgetRequest {
  data: AdgroupsUpdateDailyBudgetRequest;
}

export interface AdgroupsApiUpdateDatetimeRequest {
  data: AdgroupsUpdateDatetimeRequest;
}

export interface AdgroupsApiUpdateNegativewordRequest {
  data: AdgroupsUpdateNegativewordRequest;
}


export class AdgroupsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: AdgroupsApiAddRequest): Promise<AdgroupsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: AdgroupsApiAddRequest): Promise<ApiResponse<AdgroupsAddResponseData>> {
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

  async addNegativeword(request: AdgroupsApiAddNegativewordRequest): Promise<AdgroupsAddNegativewordResponseData> {
    const response = await this.addNegativewordWithHttpInfo(request);
    return response.data;
  }

  async addNegativewordWithHttpInfo(request: AdgroupsApiAddNegativewordRequest): Promise<ApiResponse<AdgroupsAddNegativewordResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling addNegativeword");
    }
    return this.apiClient.requestWithHttpInfo<AdgroupsAddNegativewordResponseData>({
      method: "POST",
      path: "/adgroups/add_negativeword",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: AdgroupsApiDeleteRequest): Promise<AdgroupsDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: AdgroupsApiDeleteRequest): Promise<ApiResponse<AdgroupsDeleteResponseData>> {
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

  async get(request: AdgroupsApiGetRequest): Promise<AdgroupsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdgroupsApiGetRequest): Promise<ApiResponse<AdgroupsGetResponseData>> {
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
        { name: "weixin_official_accounts_upgrade_enabled", value: request.weixinOfficialAccountsUpgradeEnabled },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async getNegativeword(request: AdgroupsApiGetNegativewordRequest): Promise<AdgroupsGetNegativewordResponseData> {
    const response = await this.getNegativewordWithHttpInfo(request);
    return response.data;
  }

  async getNegativewordWithHttpInfo(request: AdgroupsApiGetNegativewordRequest): Promise<ApiResponse<AdgroupsGetNegativewordResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling getNegativeword");
    }
    return this.apiClient.requestWithHttpInfo<AdgroupsGetNegativewordResponseData>({
      method: "POST",
      path: "/adgroups/get_negativeword",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: AdgroupsApiUpdateRequest): Promise<AdgroupsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: AdgroupsApiUpdateRequest): Promise<ApiResponse<AdgroupsUpdateResponseData>> {
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

  async updateBidAmount(request: AdgroupsApiUpdateBidAmountRequest): Promise<AdgroupsUpdateBidAmountResponseData> {
    const response = await this.updateBidAmountWithHttpInfo(request);
    return response.data;
  }

  async updateBidAmountWithHttpInfo(request: AdgroupsApiUpdateBidAmountRequest): Promise<ApiResponse<AdgroupsUpdateBidAmountResponseData>> {
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

  async updateConfiguredStatus(request: AdgroupsApiUpdateConfiguredStatusRequest): Promise<AdgroupsUpdateConfiguredStatusResponseData> {
    const response = await this.updateConfiguredStatusWithHttpInfo(request);
    return response.data;
  }

  async updateConfiguredStatusWithHttpInfo(request: AdgroupsApiUpdateConfiguredStatusRequest): Promise<ApiResponse<AdgroupsUpdateConfiguredStatusResponseData>> {
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

  async updateDailyBudget(request: AdgroupsApiUpdateDailyBudgetRequest): Promise<AdgroupsUpdateDailyBudgetResponseData> {
    const response = await this.updateDailyBudgetWithHttpInfo(request);
    return response.data;
  }

  async updateDailyBudgetWithHttpInfo(request: AdgroupsApiUpdateDailyBudgetRequest): Promise<ApiResponse<AdgroupsUpdateDailyBudgetResponseData>> {
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

  async updateDatetime(request: AdgroupsApiUpdateDatetimeRequest): Promise<AdgroupsUpdateDatetimeResponseData> {
    const response = await this.updateDatetimeWithHttpInfo(request);
    return response.data;
  }

  async updateDatetimeWithHttpInfo(request: AdgroupsApiUpdateDatetimeRequest): Promise<ApiResponse<AdgroupsUpdateDatetimeResponseData>> {
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

  async updateNegativeword(request: AdgroupsApiUpdateNegativewordRequest): Promise<AdgroupsUpdateNegativewordResponseData> {
    const response = await this.updateNegativewordWithHttpInfo(request);
    return response.data;
  }

  async updateNegativewordWithHttpInfo(request: AdgroupsApiUpdateNegativewordRequest): Promise<ApiResponse<AdgroupsUpdateNegativewordResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling updateNegativeword");
    }
    return this.apiClient.requestWithHttpInfo<AdgroupsUpdateNegativewordResponseData>({
      method: "POST",
      path: "/adgroups/update_negativeword",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


