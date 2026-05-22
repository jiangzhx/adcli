// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_webrtc_create_v2_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueWebrtcCreateV2V30Request, ToolsClueWebrtcCreateV2V30Response } from "../models/index";


export interface ToolsClueWebrtcCreateV2V30ApiOpenApiV30ToolsClueWebrtcCreateV2PostRequest {
  toolsClueWebrtcCreateV2V30Request?: ToolsClueWebrtcCreateV2V30Request;
}

export class ToolsClueWebrtcCreateV2V30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsClueWebrtcCreateV2Post(request: ToolsClueWebrtcCreateV2V30ApiOpenApiV30ToolsClueWebrtcCreateV2PostRequest): Promise<ToolsClueWebrtcCreateV2V30Response> {
    const response = await this.openApiV30ToolsClueWebrtcCreateV2PostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsClueWebrtcCreateV2PostWithHttpInfo(request: ToolsClueWebrtcCreateV2V30ApiOpenApiV30ToolsClueWebrtcCreateV2PostRequest): Promise<ApiResponse<ToolsClueWebrtcCreateV2V30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueWebrtcCreateV2V30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/clue/webrtc/create/v2/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsClueWebrtcCreateV2V30Request
    });
  }
}


