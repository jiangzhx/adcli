// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsKeywordsBidRatioDeleteV30Request, ToolsKeywordsBidRatioDeleteV30Response } from "../models";


export class ToolsKeywordsBidRatioDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsKeywordsBidRatioDeletePost(request: ToolsKeywordsBidRatioDeleteV30Request): Promise<ToolsKeywordsBidRatioDeleteV30Response> {
    const response = await this.openApiV30ToolsKeywordsBidRatioDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsKeywordsBidRatioDeletePostWithHttpInfo(request: ToolsKeywordsBidRatioDeleteV30Request): Promise<ApiResponse<ToolsKeywordsBidRatioDeleteV30Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsKeywordsBidRatioDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/keywords_bid_ratio/delete/",
      queryParams: [

      ],
      body: request
    });
  }
}


