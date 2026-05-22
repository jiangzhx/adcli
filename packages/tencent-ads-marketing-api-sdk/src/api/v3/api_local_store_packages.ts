// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_local_store_packages.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalStorePackagesAddRequest, LocalStorePackagesAddResponseData, LocalStorePackagesDeleteRequest, LocalStorePackagesDeleteResponseData, LocalStorePackagesGetResponseData, LocalStorePackagesUpdateRequest, LocalStorePackagesUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface LocalStorePackagesApiAddRequest {
  data: LocalStorePackagesAddRequest;
}

export interface LocalStorePackagesApiDeleteRequest {
  data: LocalStorePackagesDeleteRequest;
}

export interface LocalStorePackagesApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface LocalStorePackagesApiUpdateRequest {
  data: LocalStorePackagesUpdateRequest;
}


export class LocalStorePackagesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: LocalStorePackagesApiAddRequest): Promise<LocalStorePackagesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: LocalStorePackagesApiAddRequest): Promise<ApiResponse<LocalStorePackagesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<LocalStorePackagesAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/local_store_packages/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: LocalStorePackagesApiDeleteRequest): Promise<LocalStorePackagesDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: LocalStorePackagesApiDeleteRequest): Promise<ApiResponse<LocalStorePackagesDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<LocalStorePackagesDeleteResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/local_store_packages/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: LocalStorePackagesApiGetRequest): Promise<LocalStorePackagesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LocalStorePackagesApiGetRequest): Promise<ApiResponse<LocalStorePackagesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LocalStorePackagesGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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

  async update(request: LocalStorePackagesApiUpdateRequest): Promise<LocalStorePackagesUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: LocalStorePackagesApiUpdateRequest): Promise<ApiResponse<LocalStorePackagesUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<LocalStorePackagesUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/local_store_packages/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


