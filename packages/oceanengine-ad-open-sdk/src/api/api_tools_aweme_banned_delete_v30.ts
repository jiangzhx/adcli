// Generated from oceanengine/ad_open_sdk_go api/api_tools_aweme_banned_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAwemeBannedDeleteV30Request, ToolsAwemeBannedDeleteV30Response } from "../models/index";


export interface ToolsAwemeBannedDeleteV30ApiOpenApiV30ToolsAwemeBannedDeletePostRequest {
  toolsAwemeBannedDeleteV30Request?: ToolsAwemeBannedDeleteV30Request;
}

export class ToolsAwemeBannedDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsAwemeBannedDeletePost(request: ToolsAwemeBannedDeleteV30ApiOpenApiV30ToolsAwemeBannedDeletePostRequest): Promise<ToolsAwemeBannedDeleteV30Response> {
    const response = await this.openApiV30ToolsAwemeBannedDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsAwemeBannedDeletePostWithHttpInfo(request: ToolsAwemeBannedDeleteV30ApiOpenApiV30ToolsAwemeBannedDeletePostRequest): Promise<ApiResponse<ToolsAwemeBannedDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAwemeBannedDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/aweme_banned/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAwemeBannedDeleteV30Request
    });
  }
}


