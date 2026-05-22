// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsCommentTermsBannedDeleteV30Request, ToolsCommentTermsBannedDeleteV30Response } from "../models";


export class ToolsCommentTermsBannedDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentTermsBannedDeletePost(request: ToolsCommentTermsBannedDeleteV30Request): Promise<ToolsCommentTermsBannedDeleteV30Response> {
    const response = await this.openApiV30ToolsCommentTermsBannedDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsCommentTermsBannedDeletePostWithHttpInfo(request: ToolsCommentTermsBannedDeleteV30Request): Promise<ApiResponse<ToolsCommentTermsBannedDeleteV30Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsCommentTermsBannedDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/comment/terms_banned/delete/",
      queryParams: [

      ],
      body: request
    });
  }
}


