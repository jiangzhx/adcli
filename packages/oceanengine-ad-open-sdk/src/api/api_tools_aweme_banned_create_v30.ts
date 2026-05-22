// Generated from oceanengine/ad_open_sdk_go api/api_tools_aweme_banned_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAwemeBannedCreateV30Request, ToolsAwemeBannedCreateV30Response } from "../models/index";


export interface ToolsAwemeBannedCreateV30ApiOpenApiV30ToolsAwemeBannedCreatePostRequest {
  toolsAwemeBannedCreateV30Request?: ToolsAwemeBannedCreateV30Request;
}

export class ToolsAwemeBannedCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsAwemeBannedCreatePost(request: ToolsAwemeBannedCreateV30ApiOpenApiV30ToolsAwemeBannedCreatePostRequest): Promise<ToolsAwemeBannedCreateV30Response> {
    const response = await this.openApiV30ToolsAwemeBannedCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsAwemeBannedCreatePostWithHttpInfo(request: ToolsAwemeBannedCreateV30ApiOpenApiV30ToolsAwemeBannedCreatePostRequest): Promise<ApiResponse<ToolsAwemeBannedCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAwemeBannedCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/aweme_banned/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAwemeBannedCreateV30Request
    });
  }
}


