// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpMicroAppletUpdateV30Request, ToolsEbpMicroAppletUpdateV30Response } from "../models";


export interface OpenApiV30ToolsEbpMicroAppletUpdatePostRequest {
  toolsEbpMicroAppletUpdateV30Request?: ToolsEbpMicroAppletUpdateV30Request;
}

export class ToolsEbpMicroAppletUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMicroAppletUpdatePost(request: OpenApiV30ToolsEbpMicroAppletUpdatePostRequest): Promise<ToolsEbpMicroAppletUpdateV30Response> {
    const response = await this.openApiV30ToolsEbpMicroAppletUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpMicroAppletUpdatePostWithHttpInfo(request: OpenApiV30ToolsEbpMicroAppletUpdatePostRequest): Promise<ApiResponse<ToolsEbpMicroAppletUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpMicroAppletUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/micro_applet/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsEbpMicroAppletUpdateV30Request
    });
  }
}


