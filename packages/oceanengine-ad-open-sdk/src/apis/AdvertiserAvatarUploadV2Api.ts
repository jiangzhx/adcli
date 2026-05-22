// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserAvatarUploadV2Response } from "../models";


export interface OpenApi2AdvertiserAvatarUploadPostRequest {
  advertiserId: number | string;
  imageFile: File;
}

export class AdvertiserAvatarUploadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserAvatarUploadPost(request: OpenApi2AdvertiserAvatarUploadPostRequest): Promise<AdvertiserAvatarUploadV2Response> {
    const response = await this.openApi2AdvertiserAvatarUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserAvatarUploadPostWithHttpInfo(request: OpenApi2AdvertiserAvatarUploadPostRequest): Promise<ApiResponse<AdvertiserAvatarUploadV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AdvertiserAvatarUploadPost");
    }

    if (request.imageFile == null) {
      throw new ApiException("Missing the required parameter 'imageFile' when calling openApi2AdvertiserAvatarUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserAvatarUploadV2Response>({
      method: "POST",
      path: "/open_api/2/advertiser/avatar/upload/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        advertiser_id: request.advertiserId
      },
      files: {
        image_file: request.imageFile
      }
    });
  }
}


