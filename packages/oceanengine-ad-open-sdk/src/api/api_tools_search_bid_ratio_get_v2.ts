// Generated from oceanengine/ad_open_sdk_go api/api_tools_search_bid_ratio_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsSearchBidRatioGetV2Response } from "../models/index";


export interface ToolsSearchBidRatioGetV2ApiOpenApi2ToolsSearchBidRatioGetGetRequest {
  advertiserId: number | string;
  adId?: number | string;
}

export class ToolsSearchBidRatioGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSearchBidRatioGetGet(request: ToolsSearchBidRatioGetV2ApiOpenApi2ToolsSearchBidRatioGetGetRequest): Promise<ToolsSearchBidRatioGetV2Response> {
    const response = await this.openApi2ToolsSearchBidRatioGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSearchBidRatioGetGetWithHttpInfo(request: ToolsSearchBidRatioGetV2ApiOpenApi2ToolsSearchBidRatioGetGetRequest): Promise<ApiResponse<ToolsSearchBidRatioGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


