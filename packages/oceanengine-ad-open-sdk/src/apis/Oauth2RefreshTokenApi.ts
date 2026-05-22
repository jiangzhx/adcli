// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { Oauth2RefreshTokenRequest, Oauth2RefreshTokenResponse } from "../models";


export interface OpenApiOauth2RefreshTokenPostRequest {
  oauth2RefreshTokenRequest?: Oauth2RefreshTokenRequest;
}

export class Oauth2RefreshTokenApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiOauth2RefreshTokenPost(request: OpenApiOauth2RefreshTokenPostRequest): Promise<Oauth2RefreshTokenResponse> {
    const response = await this.openApiOauth2RefreshTokenPostWithHttpInfo(request);
    return response.data;
  }

  async openApiOauth2RefreshTokenPostWithHttpInfo(request: OpenApiOauth2RefreshTokenPostRequest): Promise<ApiResponse<Oauth2RefreshTokenResponse>> {

    return this.apiClient.requestWithHttpInfo<Oauth2RefreshTokenResponse>({
      method: "POST",
      path: "/open_api/oauth2/refresh_token/",
      queryParams: [

      ],
      body: request.oauth2RefreshTokenRequest
    });
  }
}


