// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsCommentTermsBannedAddV30Request, ToolsCommentTermsBannedAddV30Response } from "../models";


export class ToolsCommentTermsBannedAddV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentTermsBannedAddPost(toolsCommentTermsBannedAddV30Request: ToolsCommentTermsBannedAddV30Request): Promise<ToolsCommentTermsBannedAddV30Response> {
    const response = await this.openApiV30ToolsCommentTermsBannedAddPostWithHttpInfo(toolsCommentTermsBannedAddV30Request);
    return response.data;
  }

  async openApiV30ToolsCommentTermsBannedAddPostWithHttpInfo(toolsCommentTermsBannedAddV30Request: ToolsCommentTermsBannedAddV30Request): Promise<ApiResponse<ToolsCommentTermsBannedAddV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsCommentTermsBannedAddV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/comment/terms_banned/add/",
      queryParams: [

      ],
      body: toolsCommentTermsBannedAddV30Request
    });
  }
}


