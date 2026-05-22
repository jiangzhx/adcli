// Generated from oceanengine/ad_open_sdk_go api/api_tools_comment_reply_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsCommentReplyV30Request, ToolsCommentReplyV30Response } from "../models/index";


export interface ToolsCommentReplyV30ApiOpenApiV30ToolsCommentReplyPostRequest {
  toolsCommentReplyV30Request?: ToolsCommentReplyV30Request;
}

export class ToolsCommentReplyV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentReplyPost(request: ToolsCommentReplyV30ApiOpenApiV30ToolsCommentReplyPostRequest): Promise<ToolsCommentReplyV30Response> {
    const response = await this.openApiV30ToolsCommentReplyPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsCommentReplyPostWithHttpInfo(request: ToolsCommentReplyV30ApiOpenApiV30ToolsCommentReplyPostRequest): Promise<ApiResponse<ToolsCommentReplyV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsCommentReplyV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/comment/reply/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsCommentReplyV30Request
    });
  }
}


