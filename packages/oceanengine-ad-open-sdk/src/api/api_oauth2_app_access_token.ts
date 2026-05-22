// Generated from oceanengine/ad_open_sdk_go api/api_oauth2_app_access_token.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { Oauth2AppAccessTokenRequest, Oauth2AppAccessTokenResponse } from "../models/index";


export interface Oauth2AppAccessTokenApiOpenApiOauth2AppAccessTokenPostRequest {
  oauth2AppAccessTokenRequest?: Oauth2AppAccessTokenRequest;
}

export class Oauth2AppAccessTokenApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiOauth2AppAccessTokenPost(request: Oauth2AppAccessTokenApiOpenApiOauth2AppAccessTokenPostRequest): Promise<Oauth2AppAccessTokenResponse> {
    const response = await this.openApiOauth2AppAccessTokenPostWithHttpInfo(request);
    return response.data;
  }

  async openApiOauth2AppAccessTokenPostWithHttpInfo(request: Oauth2AppAccessTokenApiOpenApiOauth2AppAccessTokenPostRequest): Promise<ApiResponse<Oauth2AppAccessTokenResponse>> {

    return this.apiClient.requestWithHttpInfo<Oauth2AppAccessTokenResponse>({
      method: "POST",
      path: "/open_api/oauth2/app_access_token/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.oauth2AppAccessTokenRequest
    });
  }
}


