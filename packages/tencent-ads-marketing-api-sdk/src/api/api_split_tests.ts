// Generated from tencentad/marketing-api-go-sdk pkg/api/api_split_tests.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SplitTestsAddRequest, SplitTestsAddResponseData, SplitTestsDeleteRequest, SplitTestsDeleteResponseData, SplitTestsGetResponseData, SplitTestsUpdateRequest, SplitTestsUpdateResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface SplitTestsApiAddRequest {
  data: SplitTestsAddRequest;
}

export interface SplitTestsApiDeleteRequest {
  data: SplitTestsDeleteRequest;
}

export interface SplitTestsApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface SplitTestsApiUpdateRequest {
  data: SplitTestsUpdateRequest;
}


export class SplitTestsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: SplitTestsApiAddRequest): Promise<SplitTestsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: SplitTestsApiAddRequest): Promise<ApiResponse<SplitTestsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<SplitTestsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/split_tests/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: SplitTestsApiDeleteRequest): Promise<SplitTestsDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: SplitTestsApiDeleteRequest): Promise<ApiResponse<SplitTestsDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<SplitTestsDeleteResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/split_tests/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: SplitTestsApiGetRequest): Promise<SplitTestsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: SplitTestsApiGetRequest): Promise<ApiResponse<SplitTestsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<SplitTestsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/split_tests/get",
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

  async update(request: SplitTestsApiUpdateRequest): Promise<SplitTestsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: SplitTestsApiUpdateRequest): Promise<ApiResponse<SplitTestsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<SplitTestsUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/split_tests/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


