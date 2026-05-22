// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsKeywordsBidRatioGetV30Filtering, ToolsKeywordsBidRatioGetV30Response } from "../models";


export interface OpenApiV30ToolsKeywordsBidRatioGetGetRequest {
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

  async openApiV30ToolsKeywordsBidRatioGetGet(request: OpenApiV30ToolsKeywordsBidRatioGetGetRequest): Promise<ToolsKeywordsBidRatioGetV30Response> {
    const response = await this.openApiV30ToolsKeywordsBidRatioGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsKeywordsBidRatioGetGetWithHttpInfo(request: OpenApiV30ToolsKeywordsBidRatioGetGetRequest): Promise<ApiResponse<ToolsKeywordsBidRatioGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsKeywordsBidRatioGetGet");
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


