// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsSearchBidRatioGetV2Response } from "../models";


export interface OpenApi2ToolsSearchBidRatioGetGetRequest {
  advertiserId: number;
  adId?: number;
}

export class ToolsSearchBidRatioGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSearchBidRatioGetGet(request: OpenApi2ToolsSearchBidRatioGetGetRequest): Promise<ToolsSearchBidRatioGetV2Response> {
    const response = await this.openApi2ToolsSearchBidRatioGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSearchBidRatioGetGetWithHttpInfo(request: OpenApi2ToolsSearchBidRatioGetGetRequest): Promise<ApiResponse<ToolsSearchBidRatioGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsSearchBidRatioGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsSearchBidRatioGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/search_bid_ratio/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_id", value: request.adId }
      ]
    });
  }
}


