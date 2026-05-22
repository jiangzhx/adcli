// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsCommentReplyGetV30Response } from "../models";


export class ToolsCommentReplyGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentReplyGetGet(advertiserId: number, commentId: number, page: number, pageSize: number): Promise<ToolsCommentReplyGetV30Response> {
    const response = await this.openApiV30ToolsCommentReplyGetGetWithHttpInfo(advertiserId, commentId, page, pageSize);
    return response.data;
  }

  async openApiV30ToolsCommentReplyGetGetWithHttpInfo(advertiserId: number, commentId: number, page: number, pageSize: number): Promise<ApiResponse<ToolsCommentReplyGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsCommentReplyGetGet");
    }

    if (commentId == null) {
      throw new ApiException("Missing the required parameter 'commentId' when calling openApiV30ToolsCommentReplyGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsCommentReplyGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/comment_reply/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "comment_id", value: commentId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


