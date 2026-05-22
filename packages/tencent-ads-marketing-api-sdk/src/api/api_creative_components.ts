// Generated from tencentad/marketing-api-go-sdk pkg/api/api_creative_components.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CreativeComponentsAddRequest, CreativeComponentsAddResponseData, CreativeComponentsDeleteRequest, CreativeComponentsDeleteResponseData, CreativeComponentsGetResponseData, CreativeComponentsUpdateRequest, CreativeComponentsUpdateResponseData, CreativeComponentsUpdateStatusRequest, CreativeComponentsUpdateStatusResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface CreativeComponentsApiAddRequest {
  data: CreativeComponentsAddRequest;
}

export interface CreativeComponentsApiDeleteRequest {
  data: CreativeComponentsDeleteRequest;
}

export interface CreativeComponentsApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface CreativeComponentsApiUpdateRequest {
  data: CreativeComponentsUpdateRequest;
}

export interface CreativeComponentsApiUpdateStatusRequest {
  data: CreativeComponentsUpdateStatusRequest;
}


export class CreativeComponentsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: CreativeComponentsApiAddRequest): Promise<CreativeComponentsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: CreativeComponentsApiAddRequest): Promise<ApiResponse<CreativeComponentsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<CreativeComponentsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/creative_components/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: CreativeComponentsApiDeleteRequest): Promise<CreativeComponentsDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: CreativeComponentsApiDeleteRequest): Promise<ApiResponse<CreativeComponentsDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<CreativeComponentsDeleteResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/creative_components/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: CreativeComponentsApiGetRequest): Promise<CreativeComponentsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CreativeComponentsApiGetRequest): Promise<ApiResponse<CreativeComponentsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CreativeComponentsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/creative_components/get",
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

  async update(request: CreativeComponentsApiUpdateRequest): Promise<CreativeComponentsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: CreativeComponentsApiUpdateRequest): Promise<ApiResponse<CreativeComponentsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<CreativeComponentsUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/creative_components/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async updateStatus(request: CreativeComponentsApiUpdateStatusRequest): Promise<CreativeComponentsUpdateStatusResponseData> {
    const response = await this.updateStatusWithHttpInfo(request);
    return response.data;
  }

  async updateStatusWithHttpInfo(request: CreativeComponentsApiUpdateStatusRequest): Promise<ApiResponse<CreativeComponentsUpdateStatusResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling updateStatus");
    }
    return this.apiClient.requestWithHttpInfo<CreativeComponentsUpdateStatusResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/creative_components/update_status",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


