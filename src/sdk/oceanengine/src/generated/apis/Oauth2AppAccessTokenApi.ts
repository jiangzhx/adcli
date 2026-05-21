// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { Oauth2AppAccessTokenRequest, Oauth2AppAccessTokenResponse } from "../models";


export class Oauth2AppAccessTokenApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiOauth2AppAccessTokenPost(oauth2AppAccessTokenRequest: Oauth2AppAccessTokenRequest): Promise<Oauth2AppAccessTokenResponse> {
    const response = await this.openApiOauth2AppAccessTokenPostWithHttpInfo(oauth2AppAccessTokenRequest);
    return response.data;
  }

  async openApiOauth2AppAccessTokenPostWithHttpInfo(oauth2AppAccessTokenRequest: Oauth2AppAccessTokenRequest): Promise<ApiResponse<Oauth2AppAccessTokenResponse>> {

    return this.apiClient.requestWithHttpInfo<Oauth2AppAccessTokenResponse>({
      method: "POST",
      path: "/open_api/oauth2/app_access_token/",
      queryParams: [

      ],
      body: oauth2AppAccessTokenRequest
    });
  }
}


