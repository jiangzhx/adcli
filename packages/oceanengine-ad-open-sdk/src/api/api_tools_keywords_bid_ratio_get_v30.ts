// Generated from oceanengine/ad_open_sdk_go api/api_tools_keywords_bid_ratio_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsKeywordsBidRatioGetV30Filtering, ToolsKeywordsBidRatioGetV30Response } from "../models/index";


export interface ToolsKeywordsBidRatioGetV30ApiOpenApiV30ToolsKeywordsBidRatioGetGetRequest {
  advertiserId: number | string;
  filtering?: ToolsKeywordsBidRatioGetV30Filtering;
}

export class ToolsKeywordsBidRatioGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsKeywordsBidRatioGetGet(request: ToolsKeywordsBidRatioGetV30ApiOpenApiV30ToolsKeywordsBidRatioGetGetRequest): Promise<ToolsKeywordsBidRatioGetV30Response> {
    const response = await this.openApiV30ToolsKeywordsBidRatioGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsKeywordsBidRatioGetGetWithHttpInfo(request: ToolsKeywordsBidRatioGetV30ApiOpenApiV30ToolsKeywordsBidRatioGetGetRequest): Promise<ApiResponse<ToolsKeywordsBidRatioGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsKeywordsBidRatioGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/keywords_bid_ratio/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


