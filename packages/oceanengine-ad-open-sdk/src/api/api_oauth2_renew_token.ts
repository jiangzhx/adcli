// Generated from oceanengine/ad_open_sdk_go api/api_oauth2_renew_token.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { Oauth2RenewTokenRequest, Oauth2RenewTokenResponse } from "../models/index";


export interface Oauth2RenewTokenApiOpenApiOauth2RenewTokenPostRequest {
  oauth2RenewTokenRequest?: Oauth2RenewTokenRequest;
}

export class Oauth2RenewTokenApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiOauth2RenewTokenPost(request: Oauth2RenewTokenApiOpenApiOauth2RenewTokenPostRequest): Promise<Oauth2RenewTokenResponse> {
    const response = await this.openApiOauth2RenewTokenPostWithHttpInfo(request);
    return response.data;
  }

  async openApiOauth2RenewTokenPostWithHttpInfo(request: Oauth2RenewTokenApiOpenApiOauth2RenewTokenPostRequest): Promise<ApiResponse<Oauth2RenewTokenResponse>> {

    return this.apiClient.requestWithHttpInfo<Oauth2RenewTokenResponse>({
      method: "POST",
      path: "/open_api/oauth2/renew_token/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.oauth2RenewTokenRequest
    });
  }
}


