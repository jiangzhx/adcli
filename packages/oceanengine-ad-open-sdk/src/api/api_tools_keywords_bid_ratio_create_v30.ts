// Generated from oceanengine/ad_open_sdk_go api/api_tools_keywords_bid_ratio_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsKeywordsBidRatioCreateV30Request, ToolsKeywordsBidRatioCreateV30Response } from "../models/index";


export interface ToolsKeywordsBidRatioCreateV30ApiOpenApiV30ToolsKeywordsBidRatioCreatePostRequest {
  toolsKeywordsBidRatioCreateV30Request?: ToolsKeywordsBidRatioCreateV30Request;
}

export class ToolsKeywordsBidRatioCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsKeywordsBidRatioCreatePost(request: ToolsKeywordsBidRatioCreateV30ApiOpenApiV30ToolsKeywordsBidRatioCreatePostRequest): Promise<ToolsKeywordsBidRatioCreateV30Response> {
    const response = await this.openApiV30ToolsKeywordsBidRatioCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsKeywordsBidRatioCreatePostWithHttpInfo(request: ToolsKeywordsBidRatioCreateV30ApiOpenApiV30ToolsKeywordsBidRatioCreatePostRequest): Promise<ApiResponse<ToolsKeywordsBidRatioCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsKeywordsBidRatioCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/keywords_bid_ratio/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsKeywordsBidRatioCreateV30Request
    });
  }
}


