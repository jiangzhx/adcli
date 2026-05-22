// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeDetailGetV30Response } from "../models";


export class CreativeDetailGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CreativeDetailGetGet(advertiserId: number, adId: number): Promise<CreativeDetailGetV30Response> {
    const response = await this.openApiV30CreativeDetailGetGetWithHttpInfo(advertiserId, adId);
    return response.data;
  }

  async openApiV30CreativeDetailGetGetWithHttpInfo(advertiserId: number, adId: number): Promise<ApiResponse<CreativeDetailGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30CreativeDetailGetGet");
    }

    if (adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV30CreativeDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<CreativeDetailGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/creative/detail/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_id", value: adId }
      ]
    });
  }
}


