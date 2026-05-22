// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeRejectReasonV2Response } from "../models";


export class CreativeRejectReasonV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CreativeRejectReasonGet(advertiserId: number, creativeIds: number[]): Promise<CreativeRejectReasonV2Response> {
    const response = await this.openApi2CreativeRejectReasonGetWithHttpInfo(advertiserId, creativeIds);
    return response.data;
  }

  async openApi2CreativeRejectReasonGetWithHttpInfo(advertiserId: number, creativeIds: number[]): Promise<ApiResponse<CreativeRejectReasonV2Response>> {

    return this.apiClient.requestWithHttpInfo<CreativeRejectReasonV2Response>({
      method: "GET",
      path: "/open_api/2/creative/reject_reason/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "creative_ids", value: creativeIds, collectionFormat: "multi" }
      ]
    });
  }
}


