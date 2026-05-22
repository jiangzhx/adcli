// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_micro_applet_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpMicroAppletUpdateV30Request, ToolsEbpMicroAppletUpdateV30Response } from "../models/index";


export interface ToolsEbpMicroAppletUpdateV30ApiOpenApiV30ToolsEbpMicroAppletUpdatePostRequest {
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

  async openApiV30ToolsEbpMicroAppletUpdatePost(request: ToolsEbpMicroAppletUpdateV30ApiOpenApiV30ToolsEbpMicroAppletUpdatePostRequest): Promise<ToolsEbpMicroAppletUpdateV30Response> {
    const response = await this.openApiV30ToolsEbpMicroAppletUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpMicroAppletUpdatePostWithHttpInfo(request: ToolsEbpMicroAppletUpdateV30ApiOpenApiV30ToolsEbpMicroAppletUpdatePostRequest): Promise<ApiResponse<ToolsEbpMicroAppletUpdateV30Response>> {

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


