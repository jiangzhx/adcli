// Generated from oceanengine/ad_open_sdk_go api/api_tools_keywords_bid_ratio_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsKeywordsBidRatioUpdateV30Request, ToolsKeywordsBidRatioUpdateV30Response } from "../models/index";


export interface ToolsKeywordsBidRatioUpdateV30ApiOpenApiV30ToolsKeywordsBidRatioUpdatePostRequest {
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

  async openApiV30ToolsKeywordsBidRatioUpdatePost(request: ToolsKeywordsBidRatioUpdateV30ApiOpenApiV30ToolsKeywordsBidRatioUpdatePostRequest): Promise<ToolsKeywordsBidRatioUpdateV30Response> {
    const response = await this.openApiV30ToolsKeywordsBidRatioUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsKeywordsBidRatioUpdatePostWithHttpInfo(request: ToolsKeywordsBidRatioUpdateV30ApiOpenApiV30ToolsKeywordsBidRatioUpdatePostRequest): Promise<ApiResponse<ToolsKeywordsBidRatioUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsKeywordsBidRatioUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/keywords_bid_ratio/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsKeywordsBidRatioUpdateV30Request
    });
  }
}


