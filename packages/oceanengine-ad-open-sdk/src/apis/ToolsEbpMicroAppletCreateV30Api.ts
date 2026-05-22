// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpMicroAppletCreateV30Request, ToolsEbpMicroAppletCreateV30Response } from "../models";


export interface OpenApiV30ToolsEbpMicroAppletCreatePostRequest {
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

  async openApiV30ToolsEbpMicroAppletCreatePost(request: OpenApiV30ToolsEbpMicroAppletCreatePostRequest): Promise<ToolsEbpMicroAppletCreateV30Response> {
    const response = await this.openApiV30ToolsEbpMicroAppletCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpMicroAppletCreatePostWithHttpInfo(request: OpenApiV30ToolsEbpMicroAppletCreatePostRequest): Promise<ApiResponse<ToolsEbpMicroAppletCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpMicroAppletCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/micro_applet/create/",
      queryParams: [

      ],
      body: request.toolsEbpMicroAppletCreateV30Request
    });
  }
}


