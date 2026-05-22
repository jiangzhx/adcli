// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdRejectReasonV2Response } from "../models";


export class AdRejectReasonV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdRejectReasonGet(adIds: number[], advertiserId: number): Promise<AdRejectReasonV2Response> {
    const response = await this.openApi2AdRejectReasonGetWithHttpInfo(adIds, advertiserId);
    return response.data;
  }

  async openApi2AdRejectReasonGetWithHttpInfo(adIds: number[], advertiserId: number): Promise<ApiResponse<AdRejectReasonV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdRejectReasonV2Response>({
      method: "GET",
      path: "/open_api/2/ad/reject_reason/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_ids", value: adIds, collectionFormat: "multi" }
      ]
    });
  }
}


