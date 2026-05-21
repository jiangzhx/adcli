// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { Oauth2AccessTokenRequest, Oauth2AccessTokenResponse } from "../models";


export class Oauth2AccessTokenApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiOauth2AccessTokenPost(oauth2AccessTokenRequest: Oauth2AccessTokenRequest): Promise<Oauth2AccessTokenResponse> {
    const response = await this.openApiOauth2AccessTokenPostWithHttpInfo(oauth2AccessTokenRequest);
    return response.data;
  }

  async openApiOauth2AccessTokenPostWithHttpInfo(oauth2AccessTokenRequest: Oauth2AccessTokenRequest): Promise<ApiResponse<Oauth2AccessTokenResponse>> {

    return this.apiClient.requestWithHttpInfo<Oauth2AccessTokenResponse>({
      method: "POST",
      path: "/open_api/oauth2/access_token/",
      queryParams: [

      ],
      body: oauth2AccessTokenRequest
    });
  }
}


