// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsClueWebrtcTokenGetV2Request, ToolsClueWebrtcTokenGetV2Response } from "../models";


export class ToolsClueWebrtcTokenGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueWebrtcTokenGetPost(toolsClueWebrtcTokenGetV2Request: ToolsClueWebrtcTokenGetV2Request): Promise<ToolsClueWebrtcTokenGetV2Response> {
    const response = await this.openApi2ToolsClueWebrtcTokenGetPostWithHttpInfo(toolsClueWebrtcTokenGetV2Request);
    return response.data;
  }

  async openApi2ToolsClueWebrtcTokenGetPostWithHttpInfo(toolsClueWebrtcTokenGetV2Request: ToolsClueWebrtcTokenGetV2Request): Promise<ApiResponse<ToolsClueWebrtcTokenGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueWebrtcTokenGetV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/webrtc/token/get/",
      queryParams: [

      ],
      body: toolsClueWebrtcTokenGetV2Request
    });
  }
}


