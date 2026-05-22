// Generated from tencentad/marketing-api-go-sdk pkg/api/api_user_actions.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { UserActionsAddRequest } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface UserActionsApiAddRequest {
  data: UserActionsAddRequest;
}


export class UserActionsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: UserActionsApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: UserActionsApiAddRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/user_actions/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


