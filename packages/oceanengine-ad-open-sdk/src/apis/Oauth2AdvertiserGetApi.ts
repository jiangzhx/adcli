// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { Oauth2AdvertiserGetResponse } from "../models";


export interface OpenApiOauth2AdvertiserGetGetRequest {
  accessToken?: string;
}

export class Oauth2AdvertiserGetApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiOauth2AdvertiserGetGet(request: OpenApiOauth2AdvertiserGetGetRequest): Promise<Oauth2AdvertiserGetResponse> {
    const response = await this.openApiOauth2AdvertiserGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiOauth2AdvertiserGetGetWithHttpInfo(request: OpenApiOauth2AdvertiserGetGetRequest): Promise<ApiResponse<Oauth2AdvertiserGetResponse>> {

    return this.apiClient.requestWithHttpInfo<Oauth2AdvertiserGetResponse>({
      method: "GET",
      path: "/open_api/oauth2/advertiser/get/",
      queryParams: [
        { name: "access_token", value: request.accessToken }
      ]
    });
  }
}


