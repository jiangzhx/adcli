// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_avatar_submit_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserAvatarSubmitV2Request, AdvertiserAvatarSubmitV2Response } from "../models/index";


export interface AdvertiserAvatarSubmitV2ApiOpenApi2AdvertiserAvatarSubmitPostRequest {
  advertiserAvatarSubmitV2Request?: AdvertiserAvatarSubmitV2Request;
}

export class AdvertiserAvatarSubmitV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserAvatarSubmitPost(request: AdvertiserAvatarSubmitV2ApiOpenApi2AdvertiserAvatarSubmitPostRequest): Promise<AdvertiserAvatarSubmitV2Response> {
    const response = await this.openApi2AdvertiserAvatarSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserAvatarSubmitPostWithHttpInfo(request: AdvertiserAvatarSubmitV2ApiOpenApi2AdvertiserAvatarSubmitPostRequest): Promise<ApiResponse<AdvertiserAvatarSubmitV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserAvatarSubmitV2Response>({
      method: "POST",
      path: "/open_api/2/advertiser/avatar/submit/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.advertiserAvatarSubmitV2Request
    });
  }
}


