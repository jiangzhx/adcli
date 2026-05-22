// Generated from oceanengine/ad_open_sdk_go api/api_ad_reject_reason_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdRejectReasonV2Response } from "../models/index";


export interface AdRejectReasonV2ApiOpenApi2AdRejectReasonGetRequest {
  adIds?: number | string[];
  advertiserId?: number | string;
}

export class AdRejectReasonV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdRejectReasonGet(request: AdRejectReasonV2ApiOpenApi2AdRejectReasonGetRequest): Promise<AdRejectReasonV2Response> {
    const response = await this.openApi2AdRejectReasonGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdRejectReasonGetWithHttpInfo(request: AdRejectReasonV2ApiOpenApi2AdRejectReasonGetRequest): Promise<ApiResponse<AdRejectReasonV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdRejectReasonV2Response>({
      method: "GET",
      path: "/open_api/2/ad/reject_reason/",
      queryParams: [
        { name: "ad_ids", value: request.adIds },
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


