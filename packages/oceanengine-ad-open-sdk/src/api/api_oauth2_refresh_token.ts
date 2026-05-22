// Generated from oceanengine/ad_open_sdk_go api/api_oauth2_refresh_token.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { Oauth2RefreshTokenRequest, Oauth2RefreshTokenResponse } from "../models/index";


export interface Oauth2RefreshTokenApiOpenApiOauth2RefreshTokenPostRequest {
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

  async openApiOauth2RefreshTokenPost(request: Oauth2RefreshTokenApiOpenApiOauth2RefreshTokenPostRequest): Promise<Oauth2RefreshTokenResponse> {
    const response = await this.openApiOauth2RefreshTokenPostWithHttpInfo(request);
    return response.data;
  }

  async openApiOauth2RefreshTokenPostWithHttpInfo(request: Oauth2RefreshTokenApiOpenApiOauth2RefreshTokenPostRequest): Promise<ApiResponse<Oauth2RefreshTokenResponse>> {

    return this.apiClient.requestWithHttpInfo<Oauth2RefreshTokenResponse>({
      method: "POST",
      path: "/open_api/oauth2/refresh_token/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.oauth2RefreshTokenRequest
    });
  }
}


