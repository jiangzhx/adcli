// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UserInfoV2Response } from "../models";


export interface OpenApi2UserInfoGetRequest {

}

export class UserInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2UserInfoGet(request: OpenApi2UserInfoGetRequest): Promise<UserInfoV2Response> {
    const response = await this.openApi2UserInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2UserInfoGetWithHttpInfo(request: OpenApi2UserInfoGetRequest): Promise<ApiResponse<UserInfoV2Response>> {

    return this.apiClient.requestWithHttpInfo<UserInfoV2Response>({
      method: "GET",
      path: "/open_api/2/user/info/",
      queryParams: [

      ]
    });
  }
}


