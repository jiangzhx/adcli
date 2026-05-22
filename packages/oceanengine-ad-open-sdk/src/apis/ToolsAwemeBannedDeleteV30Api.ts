// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAwemeBannedDeleteV30Request, ToolsAwemeBannedDeleteV30Response } from "../models";


export interface OpenApiV30ToolsAwemeBannedDeletePostRequest {
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

  async openApiV30ToolsAwemeBannedDeletePost(request: OpenApiV30ToolsAwemeBannedDeletePostRequest): Promise<ToolsAwemeBannedDeleteV30Response> {
    const response = await this.openApiV30ToolsAwemeBannedDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsAwemeBannedDeletePostWithHttpInfo(request: OpenApiV30ToolsAwemeBannedDeletePostRequest): Promise<ApiResponse<ToolsAwemeBannedDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAwemeBannedDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/aweme_banned/delete/",
      queryParams: [

      ],
      body: request.toolsAwemeBannedDeleteV30Request
    });
  }
}


