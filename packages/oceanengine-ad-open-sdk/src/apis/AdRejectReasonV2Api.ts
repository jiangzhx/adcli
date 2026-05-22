// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdRejectReasonV2Response } from "../models";


export interface OpenApi2AdRejectReasonGetRequest {
  adIds?: number[];
  advertiserId?: number;
}

export class AdRejectReasonV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdRejectReasonGet(request: OpenApi2AdRejectReasonGetRequest): Promise<AdRejectReasonV2Response> {
    const response = await this.openApi2AdRejectReasonGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdRejectReasonGetWithHttpInfo(request: OpenApi2AdRejectReasonGetRequest): Promise<ApiResponse<AdRejectReasonV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdRejectReasonV2Response>({
      method: "GET",
      path: "/open_api/2/ad/reject_reason/",
      queryParams: [
        { name: "ad_ids", value: request.adIds, collectionFormat: "csv" },
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


