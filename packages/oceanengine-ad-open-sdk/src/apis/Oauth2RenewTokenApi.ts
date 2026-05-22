// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { Oauth2RenewTokenRequest, Oauth2RenewTokenResponse } from "../models";


export interface OpenApiOauth2RenewTokenPostRequest {
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

  async openApiOauth2RenewTokenPost(request: OpenApiOauth2RenewTokenPostRequest): Promise<Oauth2RenewTokenResponse> {
    const response = await this.openApiOauth2RenewTokenPostWithHttpInfo(request);
    return response.data;
  }

  async openApiOauth2RenewTokenPostWithHttpInfo(request: OpenApiOauth2RenewTokenPostRequest): Promise<ApiResponse<Oauth2RenewTokenResponse>> {

    return this.apiClient.requestWithHttpInfo<Oauth2RenewTokenResponse>({
      method: "POST",
      path: "/open_api/oauth2/renew_token/",
      queryParams: [

      ],
      body: request.oauth2RenewTokenRequest
    });
  }
}


