// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CampaignsAddNegativewordRequest, CampaignsAddNegativewordResponseData, CampaignsAddRequest, CampaignsAddResponseData, CampaignsDeleteRequest, CampaignsDeleteResponseData, CampaignsGetNegativewordRequest, CampaignsGetNegativewordResponseData, CampaignsGetResponseData, CampaignsUpdateConfiguredStatusRequest, CampaignsUpdateConfiguredStatusResponseData, CampaignsUpdateDailyBudgetRequest, CampaignsUpdateDailyBudgetResponseData, CampaignsUpdateNegativewordRequest, CampaignsUpdateNegativewordResponseData, CampaignsUpdateRequest, CampaignsUpdateResponseData } from "../models";

export interface CampaignsApiAddRequest {
  data: CampaignsAddRequest;
}

export interface CampaignsApiAddNegativewordRequest {
  data: CampaignsAddNegativewordRequest;
}

export interface CampaignsApiDeleteRequest {
  data: CampaignsDeleteRequest;
}

export interface CampaignsApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  isDeleted?: boolean;
  weixinOfficialAccountsUpgradeEnabled?: boolean;
  fields?: unknown;
}

export interface CampaignsApiGetNegativewordRequest {
  data: CampaignsGetNegativewordRequest;
}

export interface CampaignsApiUpdateRequest {
  data: CampaignsUpdateRequest;
}

export interface CampaignsApiUpdateConfiguredStatusRequest {
  data: CampaignsUpdateConfiguredStatusRequest;
}

export interface CampaignsApiUpdateDailyBudgetRequest {
  data: CampaignsUpdateDailyBudgetRequest;
}

export interface CampaignsApiUpdateNegativewordRequest {
  data: CampaignsUpdateNegativewordRequest;
}


export class CampaignsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: CampaignsApiAddRequest): Promise<CampaignsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: CampaignsApiAddRequest): Promise<ApiResponse<CampaignsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<CampaignsAddResponseData>({
      method: "POST",
      path: "/campaigns/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async addNegativeword(request: CampaignsApiAddNegativewordRequest): Promise<CampaignsAddNegativewordResponseData> {
    const response = await this.addNegativewordWithHttpInfo(request);
    return response.data;
  }

  async addNegativewordWithHttpInfo(request: CampaignsApiAddNegativewordRequest): Promise<ApiResponse<CampaignsAddNegativewordResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling addNegativeword");
    }
    return this.apiClient.requestWithHttpInfo<CampaignsAddNegativewordResponseData>({
      method: "POST",
      path: "/campaigns/add_negativeword",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: CampaignsApiDeleteRequest): Promise<CampaignsDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: CampaignsApiDeleteRequest): Promise<ApiResponse<CampaignsDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<CampaignsDeleteResponseData>({
      method: "POST",
      path: "/campaigns/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: CampaignsApiGetRequest): Promise<CampaignsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CampaignsApiGetRequest): Promise<ApiResponse<CampaignsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CampaignsGetResponseData>({
      method: "GET",
      path: "/campaigns/get",
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

  async getNegativeword(request: CampaignsApiGetNegativewordRequest): Promise<CampaignsGetNegativewordResponseData> {
    const response = await this.getNegativewordWithHttpInfo(request);
    return response.data;
  }

  async getNegativewordWithHttpInfo(request: CampaignsApiGetNegativewordRequest): Promise<ApiResponse<CampaignsGetNegativewordResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling getNegativeword");
    }
    return this.apiClient.requestWithHttpInfo<CampaignsGetNegativewordResponseData>({
      method: "POST",
      path: "/campaigns/get_negativeword",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: CampaignsApiUpdateRequest): Promise<CampaignsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: CampaignsApiUpdateRequest): Promise<ApiResponse<CampaignsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<CampaignsUpdateResponseData>({
      method: "POST",
      path: "/campaigns/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async updateConfiguredStatus(request: CampaignsApiUpdateConfiguredStatusRequest): Promise<CampaignsUpdateConfiguredStatusResponseData> {
    const response = await this.updateConfiguredStatusWithHttpInfo(request);
    return response.data;
  }

  async updateConfiguredStatusWithHttpInfo(request: CampaignsApiUpdateConfiguredStatusRequest): Promise<ApiResponse<CampaignsUpdateConfiguredStatusResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling updateConfiguredStatus");
    }
    return this.apiClient.requestWithHttpInfo<CampaignsUpdateConfiguredStatusResponseData>({
      method: "POST",
      path: "/campaigns/update_configured_status",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async updateDailyBudget(request: CampaignsApiUpdateDailyBudgetRequest): Promise<CampaignsUpdateDailyBudgetResponseData> {
    const response = await this.updateDailyBudgetWithHttpInfo(request);
    return response.data;
  }

  async updateDailyBudgetWithHttpInfo(request: CampaignsApiUpdateDailyBudgetRequest): Promise<ApiResponse<CampaignsUpdateDailyBudgetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling updateDailyBudget");
    }
    return this.apiClient.requestWithHttpInfo<CampaignsUpdateDailyBudgetResponseData>({
      method: "POST",
      path: "/campaigns/update_daily_budget",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async updateNegativeword(request: CampaignsApiUpdateNegativewordRequest): Promise<CampaignsUpdateNegativewordResponseData> {
    const response = await this.updateNegativewordWithHttpInfo(request);
    return response.data;
  }

  async updateNegativewordWithHttpInfo(request: CampaignsApiUpdateNegativewordRequest): Promise<ApiResponse<CampaignsUpdateNegativewordResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling updateNegativeword");
    }
    return this.apiClient.requestWithHttpInfo<CampaignsUpdateNegativewordResponseData>({
      method: "POST",
      path: "/campaigns/update_negativeword",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


