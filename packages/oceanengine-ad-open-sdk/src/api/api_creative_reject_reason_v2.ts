// Generated from oceanengine/ad_open_sdk_go api/api_creative_reject_reason_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CreativeRejectReasonV2Response } from "../models/index";


export interface CreativeRejectReasonV2ApiOpenApi2CreativeRejectReasonGetRequest {
  advertiserId?: number | string;
  creativeIds?: number | string[];
}

export class CreativeRejectReasonV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CreativeRejectReasonGet(request: CreativeRejectReasonV2ApiOpenApi2CreativeRejectReasonGetRequest): Promise<CreativeRejectReasonV2Response> {
    const response = await this.openApi2CreativeRejectReasonGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2CreativeRejectReasonGetWithHttpInfo(request: CreativeRejectReasonV2ApiOpenApi2CreativeRejectReasonGetRequest): Promise<ApiResponse<CreativeRejectReasonV2Response>> {

    return this.apiClient.requestWithHttpInfo<CreativeRejectReasonV2Response>({
      method: "GET",
      path: "/open_api/2/creative/reject_reason/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "creative_ids", value: request.creativeIds }
      ]
    });
  }
}


