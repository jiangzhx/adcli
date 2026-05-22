// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsKeywordsBidRatioUpdateV30Request, ToolsKeywordsBidRatioUpdateV30Response } from "../models";


export interface OpenApiV30ToolsKeywordsBidRatioUpdatePostRequest {
  toolsKeywordsBidRatioUpdateV30Request?: ToolsKeywordsBidRatioUpdateV30Request;
}

export class ToolsKeywordsBidRatioUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsKeywordsBidRatioUpdatePost(request: OpenApiV30ToolsKeywordsBidRatioUpdatePostRequest): Promise<ToolsKeywordsBidRatioUpdateV30Response> {
    const response = await this.openApiV30ToolsKeywordsBidRatioUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsKeywordsBidRatioUpdatePostWithHttpInfo(request: OpenApiV30ToolsKeywordsBidRatioUpdatePostRequest): Promise<ApiResponse<ToolsKeywordsBidRatioUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsKeywordsBidRatioUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/keywords_bid_ratio/update/",
      queryParams: [

      ],
      body: request.toolsKeywordsBidRatioUpdateV30Request
    });
  }
}


