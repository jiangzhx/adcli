// Generated from tencentad/marketing-api-go-sdk pkg/api/api_user_properties.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { UserPropertiesAddRequest } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface UserPropertiesApiAddRequest {
  data: UserPropertiesAddRequest;
}


export class UserPropertiesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: UserPropertiesApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: UserPropertiesApiAddRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/user_properties/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


