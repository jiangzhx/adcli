// Generated from oceanengine/ad_open_sdk_go api/api_user_info_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { UserInfoV2Response } from "../models/index";


export interface UserInfoV2ApiOpenApi2UserInfoGetRequest {

}

export class UserInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2UserInfoGet(request: UserInfoV2ApiOpenApi2UserInfoGetRequest): Promise<UserInfoV2Response> {
    const response = await this.openApi2UserInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2UserInfoGetWithHttpInfo(request: UserInfoV2ApiOpenApi2UserInfoGetRequest): Promise<ApiResponse<UserInfoV2Response>> {

    return this.apiClient.requestWithHttpInfo<UserInfoV2Response>({
      method: "GET",
      path: "/open_api/2/user/info/",
      queryParams: [

      ]
    });
  }
}


