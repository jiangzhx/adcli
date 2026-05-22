// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsCommentReplyV30Request, ToolsCommentReplyV30Response } from "../models";


export interface OpenApiV30ToolsCommentReplyPostRequest {
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

  async openApiV30ToolsCommentReplyPost(request: OpenApiV30ToolsCommentReplyPostRequest): Promise<ToolsCommentReplyV30Response> {
    const response = await this.openApiV30ToolsCommentReplyPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsCommentReplyPostWithHttpInfo(request: OpenApiV30ToolsCommentReplyPostRequest): Promise<ApiResponse<ToolsCommentReplyV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsCommentReplyV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/comment/reply/",
      queryParams: [

      ],
      body: request.toolsCommentReplyV30Request
    });
  }
}


