// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_micro_applet_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpMicroAppletCreateV30Request, ToolsEbpMicroAppletCreateV30Response } from "../models/index";


export interface ToolsEbpMicroAppletCreateV30ApiOpenApiV30ToolsEbpMicroAppletCreatePostRequest {
  toolsEbpMicroAppletCreateV30Request?: ToolsEbpMicroAppletCreateV30Request;
}

export class ToolsEbpMicroAppletCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMicroAppletCreatePost(request: ToolsEbpMicroAppletCreateV30ApiOpenApiV30ToolsEbpMicroAppletCreatePostRequest): Promise<ToolsEbpMicroAppletCreateV30Response> {
    const response = await this.openApiV30ToolsEbpMicroAppletCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpMicroAppletCreatePostWithHttpInfo(request: ToolsEbpMicroAppletCreateV30ApiOpenApiV30ToolsEbpMicroAppletCreatePostRequest): Promise<ApiResponse<ToolsEbpMicroAppletCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpMicroAppletCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/micro_applet/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsEbpMicroAppletCreateV30Request
    });
  }
}


