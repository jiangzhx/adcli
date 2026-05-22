// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_avatar_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserAvatarGetV2Response } from "../models/index";


export interface AdvertiserAvatarGetV2ApiOpenApi2AdvertiserAvatarGetGetRequest {
  advertiserId: number | string;
}

export class AdvertiserAvatarGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserAvatarGetGet(request: AdvertiserAvatarGetV2ApiOpenApi2AdvertiserAvatarGetGetRequest): Promise<AdvertiserAvatarGetV2Response> {
    const response = await this.openApi2AdvertiserAvatarGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserAvatarGetGetWithHttpInfo(request: AdvertiserAvatarGetV2ApiOpenApi2AdvertiserAvatarGetGetRequest): Promise<ApiResponse<AdvertiserAvatarGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserAvatarGetV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/avatar/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


