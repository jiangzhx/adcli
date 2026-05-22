// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_avatar_upload_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserAvatarUploadV2Response } from "../models/index";


export interface AdvertiserAvatarUploadV2ApiOpenApi2AdvertiserAvatarUploadPostRequest {
  advertiserId: number | string;
  imageFile: Blob;
}

export class AdvertiserAvatarUploadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserAvatarUploadPost(request: AdvertiserAvatarUploadV2ApiOpenApi2AdvertiserAvatarUploadPostRequest): Promise<AdvertiserAvatarUploadV2Response> {
    const response = await this.openApi2AdvertiserAvatarUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserAvatarUploadPostWithHttpInfo(request: AdvertiserAvatarUploadV2ApiOpenApi2AdvertiserAvatarUploadPostRequest): Promise<ApiResponse<AdvertiserAvatarUploadV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.imageFile == null) {
      throw new ApiException("imageFile is required and must be specified");
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


