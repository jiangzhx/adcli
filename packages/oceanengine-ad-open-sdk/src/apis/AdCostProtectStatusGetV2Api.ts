// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdCostProtectStatusGetV2Response } from "../models";


export interface OpenApi2AdCostProtectStatusGetGetRequest {
  advertiserId: number;
  adIds: number[];
}

export class AdCostProtectStatusGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdCostProtectStatusGetGet(request: OpenApi2AdCostProtectStatusGetGetRequest): Promise<AdCostProtectStatusGetV2Response> {
    const response = await this.openApi2AdCostProtectStatusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdCostProtectStatusGetGetWithHttpInfo(request: OpenApi2AdCostProtectStatusGetGetRequest): Promise<ApiResponse<AdCostProtectStatusGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AdCostProtectStatusGetGet");
    }

    if (request.adIds == null) {
      throw new ApiException("Missing the required parameter 'adIds' when calling openApi2AdCostProtectStatusGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AdCostProtectStatusGetV2Response>({
      method: "GET",
      path: "/open_api/2/ad/cost_protect_status/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_ids", value: request.adIds, collectionFormat: "csv" }
      ]
    });
  }
}


