// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsClueWebrtcTokenGetV2V30Request, ToolsClueWebrtcTokenGetV2V30Response } from "../models";


export class ToolsClueWebrtcTokenGetV2V30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsClueWebrtcTokenGetV2Post(toolsClueWebrtcTokenGetV2V30Request: ToolsClueWebrtcTokenGetV2V30Request): Promise<ToolsClueWebrtcTokenGetV2V30Response> {
    const response = await this.openApiV30ToolsClueWebrtcTokenGetV2PostWithHttpInfo(toolsClueWebrtcTokenGetV2V30Request);
    return response.data;
  }

  async openApiV30ToolsClueWebrtcTokenGetV2PostWithHttpInfo(toolsClueWebrtcTokenGetV2V30Request: ToolsClueWebrtcTokenGetV2V30Request): Promise<ApiResponse<ToolsClueWebrtcTokenGetV2V30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueWebrtcTokenGetV2V30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/clue/webrtc/token/get/v2/",
      queryParams: [

      ],
      body: toolsClueWebrtcTokenGetV2V30Request
    });
  }
}


