// Generated from oceanengine/ad_open_sdk_go api/api_tools_comment_terms_banned_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsCommentTermsBannedDeleteV30Request, ToolsCommentTermsBannedDeleteV30Response } from "../models/index";


export interface ToolsCommentTermsBannedDeleteV30ApiOpenApiV30ToolsCommentTermsBannedDeletePostRequest {
  toolsCommentTermsBannedDeleteV30Request?: ToolsCommentTermsBannedDeleteV30Request;
}

export class ToolsCommentTermsBannedDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentTermsBannedDeletePost(request: ToolsCommentTermsBannedDeleteV30ApiOpenApiV30ToolsCommentTermsBannedDeletePostRequest): Promise<ToolsCommentTermsBannedDeleteV30Response> {
    const response = await this.openApiV30ToolsCommentTermsBannedDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsCommentTermsBannedDeletePostWithHttpInfo(request: ToolsCommentTermsBannedDeleteV30ApiOpenApiV30ToolsCommentTermsBannedDeletePostRequest): Promise<ApiResponse<ToolsCommentTermsBannedDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsCommentTermsBannedDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/comment/terms_banned/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsCommentTermsBannedDeleteV30Request
    });
  }
}


