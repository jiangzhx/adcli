// Generated from tencentad/marketing-api-go-sdk pkg/api/api_profiles.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProfilesAddRequest, ProfilesAddResponseData, ProfilesDeleteRequest, ProfilesDeleteResponseData, ProfilesGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface ProfilesApiAddRequest {
  data: ProfilesAddRequest;
}

export interface ProfilesApiDeleteRequest {
  data: ProfilesDeleteRequest;
}

export interface ProfilesApiGetRequest {
  accountId?: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  organizationId?: number | string;
  fields?: unknown;
}


export class ProfilesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: ProfilesApiAddRequest): Promise<ProfilesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: ProfilesApiAddRequest): Promise<ApiResponse<ProfilesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ProfilesAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/profiles/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: ProfilesApiDeleteRequest): Promise<ProfilesDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: ProfilesApiDeleteRequest): Promise<ApiResponse<ProfilesDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<ProfilesDeleteResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/profiles/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: ProfilesApiGetRequest): Promise<ProfilesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ProfilesApiGetRequest): Promise<ApiResponse<ProfilesGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<ProfilesGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/profiles/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "organization_id", value: request.organizationId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


