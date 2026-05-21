// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { Oauth2AdvertiserGetResponse } from "../models";


export class Oauth2AdvertiserGetApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiOauth2AdvertiserGetGet(accessToken: string): Promise<Oauth2AdvertiserGetResponse> {
    const response = await this.openApiOauth2AdvertiserGetGetWithHttpInfo(accessToken);
    return response.data;
  }

  async openApiOauth2AdvertiserGetGetWithHttpInfo(accessToken: string): Promise<ApiResponse<Oauth2AdvertiserGetResponse>> {

    return this.apiClient.requestWithHttpInfo<Oauth2AdvertiserGetResponse>({
      method: "GET",
      path: "/open_api/oauth2/advertiser/get/",
      queryParams: [
        { name: "access_token", value: accessToken }
      ]
    });
  }
}


