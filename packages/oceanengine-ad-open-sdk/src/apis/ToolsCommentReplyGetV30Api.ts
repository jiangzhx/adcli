// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsCommentReplyGetV30Response } from "../models";


export interface OpenApiV30ToolsCommentReplyGetGetRequest {
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

  async openApiV30ToolsCommentReplyGetGet(request: OpenApiV30ToolsCommentReplyGetGetRequest): Promise<ToolsCommentReplyGetV30Response> {
    const response = await this.openApiV30ToolsCommentReplyGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsCommentReplyGetGetWithHttpInfo(request: OpenApiV30ToolsCommentReplyGetGetRequest): Promise<ApiResponse<ToolsCommentReplyGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsCommentReplyGetGet");
    }

    if (request.commentId == null) {
      throw new ApiException("Missing the required parameter 'commentId' when calling openApiV30ToolsCommentReplyGetGet");
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


