// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_dynamic_creatives.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DynamicCreativesAddRequest, DynamicCreativesAddResponseData, DynamicCreativesDeleteRequest, DynamicCreativesDeleteResponseData, DynamicCreativesGetResponseData, DynamicCreativesUpdateRequest, DynamicCreativesUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface DynamicCreativesApiAddRequest {
  data: DynamicCreativesAddRequest;
}

export interface DynamicCreativesApiDeleteRequest {
  data: DynamicCreativesDeleteRequest;
}

export interface DynamicCreativesApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
  isDeleted?: boolean;
  paginationMode?: string;
  cursor?: string;
}

export interface DynamicCreativesApiUpdateRequest {
  data: DynamicCreativesUpdateRequest;
}


export class DynamicCreativesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: DynamicCreativesApiAddRequest): Promise<DynamicCreativesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: DynamicCreativesApiAddRequest): Promise<ApiResponse<DynamicCreativesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<DynamicCreativesAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/dynamic_creatives/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: DynamicCreativesApiDeleteRequest): Promise<DynamicCreativesDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: DynamicCreativesApiDeleteRequest): Promise<ApiResponse<DynamicCreativesDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<DynamicCreativesDeleteResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/dynamic_creatives/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: DynamicCreativesApiGetRequest): Promise<DynamicCreativesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: DynamicCreativesApiGetRequest): Promise<ApiResponse<DynamicCreativesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<DynamicCreativesGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/dynamic_creatives/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" },
        { name: "is_deleted", value: request.isDeleted },
        { name: "pagination_mode", value: request.paginationMode },
        { name: "cursor", value: request.cursor }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: DynamicCreativesApiUpdateRequest): Promise<DynamicCreativesUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: DynamicCreativesApiUpdateRequest): Promise<ApiResponse<DynamicCreativesUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<DynamicCreativesUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/dynamic_creatives/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


