// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsSearchBidRatioGetV2Response } from "../models";


export class ToolsSearchBidRatioGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSearchBidRatioGetGet(advertiserId: number, adId: number): Promise<ToolsSearchBidRatioGetV2Response> {
    const response = await this.openApi2ToolsSearchBidRatioGetGetWithHttpInfo(advertiserId, adId);
    return response.data;
  }

  async openApi2ToolsSearchBidRatioGetGetWithHttpInfo(advertiserId: number, adId: number): Promise<ApiResponse<ToolsSearchBidRatioGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsSearchBidRatioGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsSearchBidRatioGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/search_bid_ratio/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_id", value: adId }
      ]
    });
  }
}


