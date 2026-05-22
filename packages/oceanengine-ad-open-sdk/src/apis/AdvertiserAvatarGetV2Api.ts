// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserAvatarGetV2Response } from "../models";


export class AdvertiserAvatarGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserAvatarGetGet(advertiserId: number): Promise<AdvertiserAvatarGetV2Response> {
    const response = await this.openApi2AdvertiserAvatarGetGetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApi2AdvertiserAvatarGetGetWithHttpInfo(advertiserId: number): Promise<ApiResponse<AdvertiserAvatarGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AdvertiserAvatarGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserAvatarGetV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/avatar/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


