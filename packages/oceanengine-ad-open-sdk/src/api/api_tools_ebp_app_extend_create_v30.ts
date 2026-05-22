// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_app_extend_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpAppExtendCreateV30Request, ToolsEbpAppExtendCreateV30Response } from "../models/index";


export interface ToolsEbpAppExtendCreateV30ApiOpenApiV30ToolsEbpAppExtendCreatePostRequest {
  toolsEbpAppExtendCreateV30Request?: ToolsEbpAppExtendCreateV30Request;
}

export class ToolsEbpAppExtendCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAppExtendCreatePost(request: ToolsEbpAppExtendCreateV30ApiOpenApiV30ToolsEbpAppExtendCreatePostRequest): Promise<ToolsEbpAppExtendCreateV30Response> {
    const response = await this.openApiV30ToolsEbpAppExtendCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpAppExtendCreatePostWithHttpInfo(request: ToolsEbpAppExtendCreateV30ApiOpenApiV30ToolsEbpAppExtendCreatePostRequest): Promise<ApiResponse<ToolsEbpAppExtendCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpAppExtendCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/app_extend/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsEbpAppExtendCreateV30Request
    });
  }
}


