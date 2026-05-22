// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { Oauth2AccessTokenRequest, Oauth2AccessTokenResponse } from "../models";


export interface OpenApiOauth2AccessTokenPostRequest {
  oauth2AccessTokenRequest?: Oauth2AccessTokenRequest;
}

export class Oauth2AccessTokenApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiOauth2AccessTokenPost(request: OpenApiOauth2AccessTokenPostRequest): Promise<Oauth2AccessTokenResponse> {
    const response = await this.openApiOauth2AccessTokenPostWithHttpInfo(request);
    return response.data;
  }

  async openApiOauth2AccessTokenPostWithHttpInfo(request: OpenApiOauth2AccessTokenPostRequest): Promise<ApiResponse<Oauth2AccessTokenResponse>> {

    return this.apiClient.requestWithHttpInfo<Oauth2AccessTokenResponse>({
      method: "POST",
      path: "/open_api/oauth2/access_token/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.oauth2AccessTokenRequest
    });
  }
}


