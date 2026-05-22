// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdsAddRequest, AdsAddResponseData, AdsDeleteRequest, AdsDeleteResponseData, AdsGetResponseData, AdsUpdateConfiguredStatusRequest, AdsUpdateConfiguredStatusResponseData, AdsUpdateRequest, AdsUpdateResponseData } from "../models";

export interface AdsApiAddRequest {
  data: AdsAddRequest;
}

export interface AdsApiDeleteRequest {
  data: AdsDeleteRequest;
}

export interface AdsApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  isDeleted?: boolean;
  weixinOfficialAccountsUpgradeEnabled?: boolean;
  fields?: unknown;
}

export interface AdsApiUpdateRequest {
  data: AdsUpdateRequest;
}

export interface AdsApiUpdateConfiguredStatusRequest {
  data: AdsUpdateConfiguredStatusRequest;
}


export class AdsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: AdsApiAddRequest): Promise<AdsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: AdsApiAddRequest): Promise<ApiResponse<AdsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<AdsAddResponseData>({
      method: "POST",
      path: "/ads/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: AdsApiDeleteRequest): Promise<AdsDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: AdsApiDeleteRequest): Promise<ApiResponse<AdsDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<AdsDeleteResponseData>({
      method: "POST",
      path: "/ads/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: AdsApiGetRequest): Promise<AdsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdsApiGetRequest): Promise<ApiResponse<AdsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdsGetResponseData>({
      method: "GET",
      path: "/ads/get",
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

  async update(request: AdsApiUpdateRequest): Promise<AdsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: AdsApiUpdateRequest): Promise<ApiResponse<AdsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<AdsUpdateResponseData>({
      method: "POST",
      path: "/ads/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async updateConfiguredStatus(request: AdsApiUpdateConfiguredStatusRequest): Promise<AdsUpdateConfiguredStatusResponseData> {
    const response = await this.updateConfiguredStatusWithHttpInfo(request);
    return response.data;
  }

  async updateConfiguredStatusWithHttpInfo(request: AdsApiUpdateConfiguredStatusRequest): Promise<ApiResponse<AdsUpdateConfiguredStatusResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling updateConfiguredStatus");
    }
    return this.apiClient.requestWithHttpInfo<AdsUpdateConfiguredStatusResponseData>({
      method: "POST",
      path: "/ads/update_configured_status",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


