// Generated from oceanengine/ad_open_sdk_go api/api_tools_comment_terms_banned_add_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsCommentTermsBannedAddV30Request, ToolsCommentTermsBannedAddV30Response } from "../models/index";


export interface ToolsCommentTermsBannedAddV30ApiOpenApiV30ToolsCommentTermsBannedAddPostRequest {
  toolsCommentTermsBannedAddV30Request?: ToolsCommentTermsBannedAddV30Request;
}

export class ToolsCommentTermsBannedAddV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentTermsBannedAddPost(request: ToolsCommentTermsBannedAddV30ApiOpenApiV30ToolsCommentTermsBannedAddPostRequest): Promise<ToolsCommentTermsBannedAddV30Response> {
    const response = await this.openApiV30ToolsCommentTermsBannedAddPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsCommentTermsBannedAddPostWithHttpInfo(request: ToolsCommentTermsBannedAddV30ApiOpenApiV30ToolsCommentTermsBannedAddPostRequest): Promise<ApiResponse<ToolsCommentTermsBannedAddV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsCommentTermsBannedAddV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/comment/terms_banned/add/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsCommentTermsBannedAddV30Request
    });
  }
}


