// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaDictGetV2Response } from "../models";


export class DpaDictGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaDictGetGet(advertiserId: number, platformId: number): Promise<DpaDictGetV2Response> {
    const response = await this.openApi2DpaDictGetGetWithHttpInfo(advertiserId, platformId);
    return response.data;
  }

  async openApi2DpaDictGetGetWithHttpInfo(advertiserId: number, platformId: number): Promise<ApiResponse<DpaDictGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DpaDictGetGet");
    }

    if (platformId == null) {
      throw new ApiException("Missing the required parameter 'platformId' when calling openApi2DpaDictGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaDictGetV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/dict/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "platform_id", value: platformId }
      ]
    });
  }
}


