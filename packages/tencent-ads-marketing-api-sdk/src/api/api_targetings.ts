// Generated from tencentad/marketing-api-go-sdk pkg/api/api_targetings.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { TargetingsAddRequest, TargetingsAddResponseData, TargetingsDeleteRequest, TargetingsDeleteResponseData, TargetingsGetResponseData, TargetingsUpdateRequest, TargetingsUpdateResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface TargetingsApiAddRequest {
  data: TargetingsAddRequest;
}

export interface TargetingsApiDeleteRequest {
  data: TargetingsDeleteRequest;
}

export interface TargetingsApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface TargetingsApiUpdateRequest {
  data: TargetingsUpdateRequest;
}


export class TargetingsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: TargetingsApiAddRequest): Promise<TargetingsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: TargetingsApiAddRequest): Promise<ApiResponse<TargetingsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<TargetingsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/targetings/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: TargetingsApiDeleteRequest): Promise<TargetingsDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: TargetingsApiDeleteRequest): Promise<ApiResponse<TargetingsDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<TargetingsDeleteResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/targetings/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: TargetingsApiGetRequest): Promise<TargetingsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: TargetingsApiGetRequest): Promise<ApiResponse<TargetingsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<TargetingsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/targetings/get",
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

  async update(request: TargetingsApiUpdateRequest): Promise<TargetingsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: TargetingsApiUpdateRequest): Promise<ApiResponse<TargetingsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<TargetingsUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/targetings/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


