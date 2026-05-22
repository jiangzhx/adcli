// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UnionPositionPackagesAddRequest, UnionPositionPackagesAddResponseData, UnionPositionPackagesDeleteRequest, UnionPositionPackagesGetResponseData, UnionPositionPackagesUpdateRequest, UnionPositionPackagesUpdateResponseData } from "../models";

export interface V3UnionPositionPackagesApiAddRequest {
  data: UnionPositionPackagesAddRequest;
}

export interface V3UnionPositionPackagesApiDeleteRequest {
  data: UnionPositionPackagesDeleteRequest;
}

export interface V3UnionPositionPackagesApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface V3UnionPositionPackagesApiUpdateRequest {
  data: UnionPositionPackagesUpdateRequest;
}


export class V3UnionPositionPackagesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3UnionPositionPackagesApiAddRequest): Promise<UnionPositionPackagesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3UnionPositionPackagesApiAddRequest): Promise<ApiResponse<UnionPositionPackagesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<UnionPositionPackagesAddResponseData>({
      method: "POST",
      path: "/union_position_packages/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: V3UnionPositionPackagesApiDeleteRequest): Promise<unknown> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3UnionPositionPackagesApiDeleteRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      path: "/union_position_packages/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3UnionPositionPackagesApiGetRequest): Promise<UnionPositionPackagesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3UnionPositionPackagesApiGetRequest): Promise<ApiResponse<UnionPositionPackagesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<UnionPositionPackagesGetResponseData>({
      method: "GET",
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

  async update(request: V3UnionPositionPackagesApiUpdateRequest): Promise<UnionPositionPackagesUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3UnionPositionPackagesApiUpdateRequest): Promise<ApiResponse<UnionPositionPackagesUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<UnionPositionPackagesUpdateResponseData>({
      method: "POST",
      path: "/union_position_packages/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


