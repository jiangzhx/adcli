// Generated from oceanengine/ad_open_sdk_go api/api_tools_comment_stick_on_top_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsCommentStickOnTopV30Request, ToolsCommentStickOnTopV30Response } from "../models/index";


export interface ToolsCommentStickOnTopV30ApiOpenApiV30ToolsCommentStickOnTopPostRequest {
  toolsCommentStickOnTopV30Request?: ToolsCommentStickOnTopV30Request;
}

export class ToolsCommentStickOnTopV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentStickOnTopPost(request: ToolsCommentStickOnTopV30ApiOpenApiV30ToolsCommentStickOnTopPostRequest): Promise<ToolsCommentStickOnTopV30Response> {
    const response = await this.openApiV30ToolsCommentStickOnTopPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsCommentStickOnTopPostWithHttpInfo(request: ToolsCommentStickOnTopV30ApiOpenApiV30ToolsCommentStickOnTopPostRequest): Promise<ApiResponse<ToolsCommentStickOnTopV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsCommentStickOnTopV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/comment/stick_on_top/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsCommentStickOnTopV30Request
    });
  }
}


