// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MajordomoAdvertiserSelectV2Response } from "../models";


export class MajordomoAdvertiserSelectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2MajordomoAdvertiserSelectGet(advertiserId: number): Promise<MajordomoAdvertiserSelectV2Response> {
    const response = await this.openApi2MajordomoAdvertiserSelectGetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApi2MajordomoAdvertiserSelectGetWithHttpInfo(advertiserId: number): Promise<ApiResponse<MajordomoAdvertiserSelectV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2MajordomoAdvertiserSelectGet");
    }
    return this.apiClient.requestWithHttpInfo<MajordomoAdvertiserSelectV2Response>({
      method: "GET",
      path: "/open_api/2/majordomo/advertiser/select/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


