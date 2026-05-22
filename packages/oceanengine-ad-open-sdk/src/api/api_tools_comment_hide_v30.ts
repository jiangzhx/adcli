// Generated from oceanengine/ad_open_sdk_go api/api_tools_comment_hide_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsCommentHideV30Request, ToolsCommentHideV30Response } from "../models/index";


export interface ToolsCommentHideV30ApiOpenApiV30ToolsCommentHidePostRequest {
  toolsCommentHideV30Request?: ToolsCommentHideV30Request;
}

export class ToolsCommentHideV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentHidePost(request: ToolsCommentHideV30ApiOpenApiV30ToolsCommentHidePostRequest): Promise<ToolsCommentHideV30Response> {
    const response = await this.openApiV30ToolsCommentHidePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsCommentHidePostWithHttpInfo(request: ToolsCommentHideV30ApiOpenApiV30ToolsCommentHidePostRequest): Promise<ApiResponse<ToolsCommentHideV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsCommentHideV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/comment/hide/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsCommentHideV30Request
    });
  }
}


