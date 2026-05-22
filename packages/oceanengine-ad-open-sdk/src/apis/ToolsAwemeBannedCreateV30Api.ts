// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAwemeBannedCreateV30Request, ToolsAwemeBannedCreateV30Response } from "../models";


export class ToolsAwemeBannedCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsAwemeBannedCreatePost(request: ToolsAwemeBannedCreateV30Request): Promise<ToolsAwemeBannedCreateV30Response> {
    const response = await this.openApiV30ToolsAwemeBannedCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsAwemeBannedCreatePostWithHttpInfo(request: ToolsAwemeBannedCreateV30Request): Promise<ApiResponse<ToolsAwemeBannedCreateV30Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsAwemeBannedCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/aweme_banned/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


