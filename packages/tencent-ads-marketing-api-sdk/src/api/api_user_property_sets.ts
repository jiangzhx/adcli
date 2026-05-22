// Generated from tencentad/marketing-api-go-sdk pkg/api/api_user_property_sets.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { UserPropertySetsAddRequest, UserPropertySetsAddResponseData, UserPropertySetsGetResponseData, UserPropertySetsUpdateRequest } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface UserPropertySetsApiAddRequest {
  data: UserPropertySetsAddRequest;
}

export interface UserPropertySetsApiGetRequest {
  accountId: number | string;
  userPropertySetId?: number | string;
  fields?: unknown;
}

export interface UserPropertySetsApiUpdateRequest {
  data: UserPropertySetsUpdateRequest;
}


export class UserPropertySetsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: UserPropertySetsApiAddRequest): Promise<UserPropertySetsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: UserPropertySetsApiAddRequest): Promise<ApiResponse<UserPropertySetsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<UserPropertySetsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/user_property_sets/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: UserPropertySetsApiGetRequest): Promise<UserPropertySetsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: UserPropertySetsApiGetRequest): Promise<ApiResponse<UserPropertySetsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<UserPropertySetsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/user_property_sets/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "user_property_set_id", value: request.userPropertySetId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: UserPropertySetsApiUpdateRequest): Promise<unknown> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: UserPropertySetsApiUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/user_property_sets/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


