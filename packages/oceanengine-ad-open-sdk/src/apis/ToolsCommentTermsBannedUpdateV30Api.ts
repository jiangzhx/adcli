// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsCommentTermsBannedUpdateV30Request, ToolsCommentTermsBannedUpdateV30Response } from "../models";


export interface OpenApiV30ToolsCommentTermsBannedUpdatePostRequest {
  toolsCommentTermsBannedUpdateV30Request?: ToolsCommentTermsBannedUpdateV30Request;
}

export class ToolsCommentTermsBannedUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentTermsBannedUpdatePost(request: OpenApiV30ToolsCommentTermsBannedUpdatePostRequest): Promise<ToolsCommentTermsBannedUpdateV30Response> {
    const response = await this.openApiV30ToolsCommentTermsBannedUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsCommentTermsBannedUpdatePostWithHttpInfo(request: OpenApiV30ToolsCommentTermsBannedUpdatePostRequest): Promise<ApiResponse<ToolsCommentTermsBannedUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsCommentTermsBannedUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/comment/terms_banned/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsCommentTermsBannedUpdateV30Request
    });
  }
}


