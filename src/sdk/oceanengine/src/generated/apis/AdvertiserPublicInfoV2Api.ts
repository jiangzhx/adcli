// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AdvertiserPublicInfoV2Response } from "../models";


export class AdvertiserPublicInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserPublicInfoGet(advertiserIds: number[]): Promise<AdvertiserPublicInfoV2Response> {
    const response = await this.openApi2AdvertiserPublicInfoGetWithHttpInfo(advertiserIds);
    return response.data;
  }

  async openApi2AdvertiserPublicInfoGetWithHttpInfo(advertiserIds: number[]): Promise<ApiResponse<AdvertiserPublicInfoV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserPublicInfoV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/public_info/",
      queryParams: [
        { name: "advertiser_ids", value: advertiserIds, collectionFormat: "multi" }
      ]
    });
  }
}


