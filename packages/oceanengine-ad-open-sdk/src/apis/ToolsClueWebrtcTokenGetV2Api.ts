// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueWebrtcTokenGetV2Request, ToolsClueWebrtcTokenGetV2Response } from "../models";


export interface OpenApi2ToolsClueWebrtcTokenGetPostRequest {
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

  async openApi2ToolsClueWebrtcTokenGetPost(request: OpenApi2ToolsClueWebrtcTokenGetPostRequest): Promise<ToolsClueWebrtcTokenGetV2Response> {
    const response = await this.openApi2ToolsClueWebrtcTokenGetPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueWebrtcTokenGetPostWithHttpInfo(request: OpenApi2ToolsClueWebrtcTokenGetPostRequest): Promise<ApiResponse<ToolsClueWebrtcTokenGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueWebrtcTokenGetV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/webrtc/token/get/",
      queryParams: [

      ],
      body: request.toolsClueWebrtcTokenGetV2Request
    });
  }
}


