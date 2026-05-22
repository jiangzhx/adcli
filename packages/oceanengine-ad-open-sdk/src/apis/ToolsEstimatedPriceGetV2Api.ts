// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEstimatedPriceGetV2Response } from "../models";


export interface OpenApi2ToolsEstimatedPriceGetGetRequest {
  advertiserId?: number | string;
}

export class ToolsEstimatedPriceGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsEstimatedPriceGetGet(request: OpenApi2ToolsEstimatedPriceGetGetRequest): Promise<ToolsEstimatedPriceGetV2Response> {
    const response = await this.openApi2ToolsEstimatedPriceGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsEstimatedPriceGetGetWithHttpInfo(request: OpenApi2ToolsEstimatedPriceGetGetRequest): Promise<ApiResponse<ToolsEstimatedPriceGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEstimatedPriceGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/estimated_price/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


