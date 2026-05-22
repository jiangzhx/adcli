// Generated from oceanengine/ad_open_sdk_go api/api_ad_cost_protect_status_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdCostProtectStatusGetV2Response } from "../models/index";


export interface AdCostProtectStatusGetV2ApiOpenApi2AdCostProtectStatusGetGetRequest {
  advertiserId: number | string;
  adIds: number | string[];
}

export class AdCostProtectStatusGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdCostProtectStatusGetGet(request: AdCostProtectStatusGetV2ApiOpenApi2AdCostProtectStatusGetGetRequest): Promise<AdCostProtectStatusGetV2Response> {
    const response = await this.openApi2AdCostProtectStatusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdCostProtectStatusGetGetWithHttpInfo(request: AdCostProtectStatusGetV2ApiOpenApi2AdCostProtectStatusGetGetRequest): Promise<ApiResponse<AdCostProtectStatusGetV2Response>> {
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


