// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AdvertiserAvatarUploadV2Response } from "../models";


export class AdvertiserAvatarUploadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserAvatarUploadPost(advertiserId: number, imageFile: File): Promise<AdvertiserAvatarUploadV2Response> {
    const response = await this.openApi2AdvertiserAvatarUploadPostWithHttpInfo(advertiserId, imageFile);
    return response.data;
  }

  async openApi2AdvertiserAvatarUploadPostWithHttpInfo(advertiserId: number, imageFile: File): Promise<ApiResponse<AdvertiserAvatarUploadV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AdvertiserAvatarUploadPost");
    }

    if (imageFile == null) {
      throw new ApiException("Missing the required parameter 'imageFile' when calling openApi2AdvertiserAvatarUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserAvatarUploadV2Response>({
      method: "POST",
      path: "/open_api/2/advertiser/avatar/upload/",
      queryParams: [

      ]
    });
  }
}


