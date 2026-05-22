// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_webrtc_token_get_v2_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueWebrtcTokenGetV2V30Request, ToolsClueWebrtcTokenGetV2V30Response } from "../models/index";


export interface ToolsClueWebrtcTokenGetV2V30ApiOpenApiV30ToolsClueWebrtcTokenGetV2PostRequest {
  toolsClueWebrtcTokenGetV2V30Request?: ToolsClueWebrtcTokenGetV2V30Request;
}

export class ToolsClueWebrtcTokenGetV2V30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsClueWebrtcTokenGetV2Post(request: ToolsClueWebrtcTokenGetV2V30ApiOpenApiV30ToolsClueWebrtcTokenGetV2PostRequest): Promise<ToolsClueWebrtcTokenGetV2V30Response> {
    const response = await this.openApiV30ToolsClueWebrtcTokenGetV2PostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsClueWebrtcTokenGetV2PostWithHttpInfo(request: ToolsClueWebrtcTokenGetV2V30ApiOpenApiV30ToolsClueWebrtcTokenGetV2PostRequest): Promise<ApiResponse<ToolsClueWebrtcTokenGetV2V30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueWebrtcTokenGetV2V30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/clue/webrtc/token/get/v2/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsClueWebrtcTokenGetV2V30Request
    });
  }
}


