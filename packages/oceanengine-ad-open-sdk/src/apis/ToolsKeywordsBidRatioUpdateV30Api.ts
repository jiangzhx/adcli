// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsKeywordsBidRatioUpdateV30Request, ToolsKeywordsBidRatioUpdateV30Response } from "../models";


export class ToolsKeywordsBidRatioUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsKeywordsBidRatioUpdatePost(toolsKeywordsBidRatioUpdateV30Request: ToolsKeywordsBidRatioUpdateV30Request): Promise<ToolsKeywordsBidRatioUpdateV30Response> {
    const response = await this.openApiV30ToolsKeywordsBidRatioUpdatePostWithHttpInfo(toolsKeywordsBidRatioUpdateV30Request);
    return response.data;
  }

  async openApiV30ToolsKeywordsBidRatioUpdatePostWithHttpInfo(toolsKeywordsBidRatioUpdateV30Request: ToolsKeywordsBidRatioUpdateV30Request): Promise<ApiResponse<ToolsKeywordsBidRatioUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsKeywordsBidRatioUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/keywords_bid_ratio/update/",
      queryParams: [

      ],
      body: toolsKeywordsBidRatioUpdateV30Request
    });
  }
}


