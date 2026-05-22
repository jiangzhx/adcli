// Generated from tencentad/marketing-api-go-sdk pkg/api/api_custom_audiences.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CustomAudiencesAddRequest, CustomAudiencesAddResponseData, CustomAudiencesDeleteRequest, CustomAudiencesGetResponseData, CustomAudiencesUpdateRequest } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface CustomAudiencesApiAddRequest {
  data: CustomAudiencesAddRequest;
}

export interface CustomAudiencesApiDeleteRequest {
  data: CustomAudiencesDeleteRequest;
}

export interface CustomAudiencesApiGetRequest {
  accountId: number | string;
  audienceId?: number | string;
  page?: number;
  pageSize?: number;
  platform?: string;
  fields?: unknown;
}

export interface CustomAudiencesApiUpdateRequest {
  data: CustomAudiencesUpdateRequest;
}


export class CustomAudiencesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: CustomAudiencesApiAddRequest): Promise<CustomAudiencesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: CustomAudiencesApiAddRequest): Promise<ApiResponse<CustomAudiencesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<CustomAudiencesAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/custom_audiences/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: CustomAudiencesApiDeleteRequest): Promise<unknown> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: CustomAudiencesApiDeleteRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/custom_audiences/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: CustomAudiencesApiGetRequest): Promise<CustomAudiencesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CustomAudiencesApiGetRequest): Promise<ApiResponse<CustomAudiencesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CustomAudiencesGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/custom_audiences/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "audience_id", value: request.audienceId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "platform", value: request.platform },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: CustomAudiencesApiUpdateRequest): Promise<unknown> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: CustomAudiencesApiUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/custom_audiences/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


