// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_webrtc_token_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueWebrtcTokenGetV2Request, ToolsClueWebrtcTokenGetV2Response } from "../models/index";


export interface ToolsClueWebrtcTokenGetV2ApiOpenApi2ToolsClueWebrtcTokenGetPostRequest {
  toolsClueWebrtcTokenGetV2Request?: ToolsClueWebrtcTokenGetV2Request;
}

export class ToolsClueWebrtcTokenGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueWebrtcTokenGetPost(request: ToolsClueWebrtcTokenGetV2ApiOpenApi2ToolsClueWebrtcTokenGetPostRequest): Promise<ToolsClueWebrtcTokenGetV2Response> {
    const response = await this.openApi2ToolsClueWebrtcTokenGetPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueWebrtcTokenGetPostWithHttpInfo(request: ToolsClueWebrtcTokenGetV2ApiOpenApi2ToolsClueWebrtcTokenGetPostRequest): Promise<ApiResponse<ToolsClueWebrtcTokenGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueWebrtcTokenGetV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/webrtc/token/get/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsClueWebrtcTokenGetV2Request
    });
  }
}


