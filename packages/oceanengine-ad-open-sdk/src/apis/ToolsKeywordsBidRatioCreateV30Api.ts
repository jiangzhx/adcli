// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsKeywordsBidRatioCreateV30Request, ToolsKeywordsBidRatioCreateV30Response } from "../models";


export class ToolsKeywordsBidRatioCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsKeywordsBidRatioCreatePost(request: ToolsKeywordsBidRatioCreateV30Request): Promise<ToolsKeywordsBidRatioCreateV30Response> {
    const response = await this.openApiV30ToolsKeywordsBidRatioCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsKeywordsBidRatioCreatePostWithHttpInfo(request: ToolsKeywordsBidRatioCreateV30Request): Promise<ApiResponse<ToolsKeywordsBidRatioCreateV30Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsKeywordsBidRatioCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/keywords_bid_ratio/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


