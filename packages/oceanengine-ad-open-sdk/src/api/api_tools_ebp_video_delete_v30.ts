// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_video_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpVideoDeleteV30Request, ToolsEbpVideoDeleteV30Response } from "../models/index";


export interface ToolsEbpVideoDeleteV30ApiOpenApiV30ToolsEbpVideoDeletePostRequest {
  toolsEbpVideoDeleteV30Request?: ToolsEbpVideoDeleteV30Request;
}

export class ToolsEbpVideoDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpVideoDeletePost(request: ToolsEbpVideoDeleteV30ApiOpenApiV30ToolsEbpVideoDeletePostRequest): Promise<ToolsEbpVideoDeleteV30Response> {
    const response = await this.openApiV30ToolsEbpVideoDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpVideoDeletePostWithHttpInfo(request: ToolsEbpVideoDeleteV30ApiOpenApiV30ToolsEbpVideoDeletePostRequest): Promise<ApiResponse<ToolsEbpVideoDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpVideoDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/video/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsEbpVideoDeleteV30Request
    });
  }
}


