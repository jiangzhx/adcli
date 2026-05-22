// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { Oauth2RefreshTokenRequest, Oauth2RefreshTokenResponse } from "../models";


export class Oauth2RefreshTokenApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiOauth2RefreshTokenPost(oauth2RefreshTokenRequest: Oauth2RefreshTokenRequest): Promise<Oauth2RefreshTokenResponse> {
    const response = await this.openApiOauth2RefreshTokenPostWithHttpInfo(oauth2RefreshTokenRequest);
    return response.data;
  }

  async openApiOauth2RefreshTokenPostWithHttpInfo(oauth2RefreshTokenRequest: Oauth2RefreshTokenRequest): Promise<ApiResponse<Oauth2RefreshTokenResponse>> {

    return this.apiClient.requestWithHttpInfo<Oauth2RefreshTokenResponse>({
      method: "POST",
      path: "/open_api/oauth2/refresh_token/",
      queryParams: [

      ],
      body: oauth2RefreshTokenRequest
    });
  }
}


