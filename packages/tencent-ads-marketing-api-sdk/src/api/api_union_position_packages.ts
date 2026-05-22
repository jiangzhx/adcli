// Generated from tencentad/marketing-api-go-sdk pkg/api/api_union_position_packages.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { UnionPositionPackagesAddRequest, UnionPositionPackagesAddResponseData, UnionPositionPackagesDeleteRequest, UnionPositionPackagesGetResponseData, UnionPositionPackagesUpdateRequest, UnionPositionPackagesUpdateResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface UnionPositionPackagesApiAddRequest {
  data: UnionPositionPackagesAddRequest;
}

export interface UnionPositionPackagesApiDeleteRequest {
  data: UnionPositionPackagesDeleteRequest;
}

export interface UnionPositionPackagesApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface UnionPositionPackagesApiUpdateRequest {
  data: UnionPositionPackagesUpdateRequest;
}


export class UnionPositionPackagesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: UnionPositionPackagesApiAddRequest): Promise<UnionPositionPackagesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: UnionPositionPackagesApiAddRequest): Promise<ApiResponse<UnionPositionPackagesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<UnionPositionPackagesAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/union_position_packages/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: UnionPositionPackagesApiDeleteRequest): Promise<unknown> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: UnionPositionPackagesApiDeleteRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/union_position_packages/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: UnionPositionPackagesApiGetRequest): Promise<UnionPositionPackagesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: UnionPositionPackagesApiGetRequest): Promise<ApiResponse<UnionPositionPackagesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<UnionPositionPackagesGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/union_position_packages/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: UnionPositionPackagesApiUpdateRequest): Promise<UnionPositionPackagesUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: UnionPositionPackagesApiUpdateRequest): Promise<ApiResponse<UnionPositionPackagesUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<UnionPositionPackagesUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/union_position_packages/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


