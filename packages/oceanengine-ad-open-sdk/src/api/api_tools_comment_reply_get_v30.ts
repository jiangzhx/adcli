// Generated from oceanengine/ad_open_sdk_go api/api_tools_comment_reply_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsCommentReplyGetV30Response } from "../models/index";


export interface ToolsCommentReplyGetV30ApiOpenApiV30ToolsCommentReplyGetGetRequest {
  advertiserId: number | string;
  commentId: number | string;
  page?: number;
  pageSize?: number;
}

export class ToolsCommentReplyGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentReplyGetGet(request: ToolsCommentReplyGetV30ApiOpenApiV30ToolsCommentReplyGetGetRequest): Promise<ToolsCommentReplyGetV30Response> {
    const response = await this.openApiV30ToolsCommentReplyGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsCommentReplyGetGetWithHttpInfo(request: ToolsCommentReplyGetV30ApiOpenApiV30ToolsCommentReplyGetGetRequest): Promise<ApiResponse<ToolsCommentReplyGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.commentId == null) {
      throw new ApiException("commentId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsCommentReplyGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/comment_reply/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "comment_id", value: request.commentId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


