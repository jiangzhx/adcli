// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEstimatedPriceGetV2Response } from "../models";


export class ToolsEstimatedPriceGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsEstimatedPriceGetGet(advertiserId: number): Promise<ToolsEstimatedPriceGetV2Response> {
    const response = await this.openApi2ToolsEstimatedPriceGetGetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApi2ToolsEstimatedPriceGetGetWithHttpInfo(advertiserId: number): Promise<ApiResponse<ToolsEstimatedPriceGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEstimatedPriceGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/estimated_price/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


