// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AdvertiserQualificationSelectV2V2Response } from "../models";


export class AdvertiserQualificationSelectV2V2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserQualificationSelectV2Get(advertiserId: number): Promise<AdvertiserQualificationSelectV2V2Response> {
    const response = await this.openApi2AdvertiserQualificationSelectV2GetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApi2AdvertiserQualificationSelectV2GetWithHttpInfo(advertiserId: number): Promise<ApiResponse<AdvertiserQualificationSelectV2V2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AdvertiserQualificationSelectV2Get");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserQualificationSelectV2V2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/qualification/select_v2/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


