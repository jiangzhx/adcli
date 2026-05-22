// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsKeywordsBidRatioGetV30Filtering, ToolsKeywordsBidRatioGetV30Response } from "../models";


export class ToolsKeywordsBidRatioGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsKeywordsBidRatioGetGet(advertiserId: number, filtering: ToolsKeywordsBidRatioGetV30Filtering): Promise<ToolsKeywordsBidRatioGetV30Response> {
    const response = await this.openApiV30ToolsKeywordsBidRatioGetGetWithHttpInfo(advertiserId, filtering);
    return response.data;
  }

  async openApiV30ToolsKeywordsBidRatioGetGetWithHttpInfo(advertiserId: number, filtering: ToolsKeywordsBidRatioGetV30Filtering): Promise<ApiResponse<ToolsKeywordsBidRatioGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsKeywordsBidRatioGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsKeywordsBidRatioGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/keywords_bid_ratio/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


