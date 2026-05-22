// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsCommentReplyV30Request, ToolsCommentReplyV30Response } from "../models";


export class ToolsCommentReplyV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentReplyPost(toolsCommentReplyV30Request: ToolsCommentReplyV30Request): Promise<ToolsCommentReplyV30Response> {
    const response = await this.openApiV30ToolsCommentReplyPostWithHttpInfo(toolsCommentReplyV30Request);
    return response.data;
  }

  async openApiV30ToolsCommentReplyPostWithHttpInfo(toolsCommentReplyV30Request: ToolsCommentReplyV30Request): Promise<ApiResponse<ToolsCommentReplyV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsCommentReplyV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/comment/reply/",
      queryParams: [

      ],
      body: toolsCommentReplyV30Request
    });
  }
}


