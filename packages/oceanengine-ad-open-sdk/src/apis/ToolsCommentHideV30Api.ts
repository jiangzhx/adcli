// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsCommentHideV30Request, ToolsCommentHideV30Response } from "../models";


export class ToolsCommentHideV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentHidePost(toolsCommentHideV30Request: ToolsCommentHideV30Request): Promise<ToolsCommentHideV30Response> {
    const response = await this.openApiV30ToolsCommentHidePostWithHttpInfo(toolsCommentHideV30Request);
    return response.data;
  }

  async openApiV30ToolsCommentHidePostWithHttpInfo(toolsCommentHideV30Request: ToolsCommentHideV30Request): Promise<ApiResponse<ToolsCommentHideV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsCommentHideV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/comment/hide/",
      queryParams: [

      ],
      body: toolsCommentHideV30Request
    });
  }
}


