// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdCostProtectStatusGetV2Response } from "../models";


export class AdCostProtectStatusGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdCostProtectStatusGetGet(advertiserId: number, adIds: number[]): Promise<AdCostProtectStatusGetV2Response> {
    const response = await this.openApi2AdCostProtectStatusGetGetWithHttpInfo(advertiserId, adIds);
    return response.data;
  }

  async openApi2AdCostProtectStatusGetGetWithHttpInfo(advertiserId: number, adIds: number[]): Promise<ApiResponse<AdCostProtectStatusGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AdCostProtectStatusGetGet");
    }

    if (adIds == null) {
      throw new ApiException("Missing the required parameter 'adIds' when calling openApi2AdCostProtectStatusGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AdCostProtectStatusGetV2Response>({
      method: "GET",
      path: "/open_api/2/ad/cost_protect_status/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_ids", value: adIds, collectionFormat: "csv" }
      ]
    });
  }
}


