// Generated from tencentad/marketing-api-go-sdk pkg/api/api_xijing_page.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { XijingPageAddRequest, XijingPageDeleteRequest, XijingPageUpdateRequest } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface XijingPageApiAddRequest {
  data: XijingPageAddRequest;
}

export interface XijingPageApiDeleteRequest {
  data: XijingPageDeleteRequest;
}

export interface XijingPageApiUpdateRequest {
  data: XijingPageUpdateRequest;
}


export class XijingPageApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: XijingPageApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: XijingPageApiAddRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/xijing_page/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: XijingPageApiDeleteRequest): Promise<unknown> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: XijingPageApiDeleteRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/xijing_page/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: XijingPageApiUpdateRequest): Promise<unknown> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: XijingPageApiUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/xijing_page/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


