// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_video_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpVideoUpdateV30Request, ToolsEbpVideoUpdateV30Response } from "../models/index";


export interface ToolsEbpVideoUpdateV30ApiOpenApiV30ToolsEbpVideoUpdatePostRequest {
  toolsEbpVideoUpdateV30Request?: ToolsEbpVideoUpdateV30Request;
}

export class ToolsEbpVideoUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpVideoUpdatePost(request: ToolsEbpVideoUpdateV30ApiOpenApiV30ToolsEbpVideoUpdatePostRequest): Promise<ToolsEbpVideoUpdateV30Response> {
    const response = await this.openApiV30ToolsEbpVideoUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpVideoUpdatePostWithHttpInfo(request: ToolsEbpVideoUpdateV30ApiOpenApiV30ToolsEbpVideoUpdatePostRequest): Promise<ApiResponse<ToolsEbpVideoUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpVideoUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/video/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsEbpVideoUpdateV30Request
    });
  }
}


