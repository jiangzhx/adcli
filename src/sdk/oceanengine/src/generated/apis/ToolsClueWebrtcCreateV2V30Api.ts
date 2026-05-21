// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsClueWebrtcCreateV2V30Request, ToolsClueWebrtcCreateV2V30Response } from "../models";


export class ToolsClueWebrtcCreateV2V30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsClueWebrtcCreateV2Post(toolsClueWebrtcCreateV2V30Request: ToolsClueWebrtcCreateV2V30Request): Promise<ToolsClueWebrtcCreateV2V30Response> {
    const response = await this.openApiV30ToolsClueWebrtcCreateV2PostWithHttpInfo(toolsClueWebrtcCreateV2V30Request);
    return response.data;
  }

  async openApiV30ToolsClueWebrtcCreateV2PostWithHttpInfo(toolsClueWebrtcCreateV2V30Request: ToolsClueWebrtcCreateV2V30Request): Promise<ApiResponse<ToolsClueWebrtcCreateV2V30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueWebrtcCreateV2V30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/clue/webrtc/create/v2/",
      queryParams: [

      ],
      body: toolsClueWebrtcCreateV2V30Request
    });
  }
}


