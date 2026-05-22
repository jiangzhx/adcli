// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsCommentStickOnTopV30Request, ToolsCommentStickOnTopV30Response } from "../models";


export interface OpenApiV30ToolsCommentStickOnTopPostRequest {
  toolsCommentStickOnTopV30Request?: ToolsCommentStickOnTopV30Request;
}

export class ToolsCommentStickOnTopV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentStickOnTopPost(request: OpenApiV30ToolsCommentStickOnTopPostRequest): Promise<ToolsCommentStickOnTopV30Response> {
    const response = await this.openApiV30ToolsCommentStickOnTopPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsCommentStickOnTopPostWithHttpInfo(request: OpenApiV30ToolsCommentStickOnTopPostRequest): Promise<ApiResponse<ToolsCommentStickOnTopV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsCommentStickOnTopV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/comment/stick_on_top/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsCommentStickOnTopV30Request
    });
  }
}


