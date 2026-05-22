// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalStorePackagesAddRequest, LocalStorePackagesAddResponseData, LocalStorePackagesDeleteRequest, LocalStorePackagesDeleteResponseData, LocalStorePackagesGetResponseData, LocalStorePackagesUpdateRequest, LocalStorePackagesUpdateResponseData } from "../models";

export interface V3LocalStorePackagesApiAddRequest {
  data: LocalStorePackagesAddRequest;
}

export interface V3LocalStorePackagesApiDeleteRequest {
  data: LocalStorePackagesDeleteRequest;
}

export interface V3LocalStorePackagesApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface V3LocalStorePackagesApiUpdateRequest {
  data: LocalStorePackagesUpdateRequest;
}


export class V3LocalStorePackagesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3LocalStorePackagesApiAddRequest): Promise<LocalStorePackagesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3LocalStorePackagesApiAddRequest): Promise<ApiResponse<LocalStorePackagesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<LocalStorePackagesAddResponseData>({
      method: "POST",
      path: "/local_store_packages/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: V3LocalStorePackagesApiDeleteRequest): Promise<LocalStorePackagesDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3LocalStorePackagesApiDeleteRequest): Promise<ApiResponse<LocalStorePackagesDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<LocalStorePackagesDeleteResponseData>({
      method: "POST",
      path: "/local_store_packages/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3LocalStorePackagesApiGetRequest): Promise<LocalStorePackagesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3LocalStorePackagesApiGetRequest): Promise<ApiResponse<LocalStorePackagesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LocalStorePackagesGetResponseData>({
      method: "GET",
      path: "/local_store_packages/get",
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

  async update(request: V3LocalStorePackagesApiUpdateRequest): Promise<LocalStorePackagesUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3LocalStorePackagesApiUpdateRequest): Promise<ApiResponse<LocalStorePackagesUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<LocalStorePackagesUpdateResponseData>({
      method: "POST",
      path: "/local_store_packages/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


