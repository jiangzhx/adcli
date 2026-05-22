// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpVideoDeleteV30Request, ToolsEbpVideoDeleteV30Response } from "../models";


export class ToolsEbpVideoDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpVideoDeletePost(request: ToolsEbpVideoDeleteV30Request): Promise<ToolsEbpVideoDeleteV30Response> {
    const response = await this.openApiV30ToolsEbpVideoDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpVideoDeletePostWithHttpInfo(request: ToolsEbpVideoDeleteV30Request): Promise<ApiResponse<ToolsEbpVideoDeleteV30Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsEbpVideoDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/video/delete/",
      queryParams: [

      ],
      body: request
    });
  }
}


