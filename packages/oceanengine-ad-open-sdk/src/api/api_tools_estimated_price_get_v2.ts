// Generated from oceanengine/ad_open_sdk_go api/api_tools_estimated_price_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEstimatedPriceGetV2Response } from "../models/index";


export interface ToolsEstimatedPriceGetV2ApiOpenApi2ToolsEstimatedPriceGetGetRequest {
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

  async openApi2ToolsEstimatedPriceGetGet(request: ToolsEstimatedPriceGetV2ApiOpenApi2ToolsEstimatedPriceGetGetRequest): Promise<ToolsEstimatedPriceGetV2Response> {
    const response = await this.openApi2ToolsEstimatedPriceGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsEstimatedPriceGetGetWithHttpInfo(request: ToolsEstimatedPriceGetV2ApiOpenApi2ToolsEstimatedPriceGetGetRequest): Promise<ApiResponse<ToolsEstimatedPriceGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEstimatedPriceGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/estimated_price/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


