// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsClueCallCreateV2Request, ToolsClueCallCreateV2Response } from "../models";


export class ToolsClueCallCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueCallCreatePost(toolsClueCallCreateV2Request: ToolsClueCallCreateV2Request): Promise<ToolsClueCallCreateV2Response> {
    const response = await this.openApi2ToolsClueCallCreatePostWithHttpInfo(toolsClueCallCreateV2Request);
    return response.data;
  }

  async openApi2ToolsClueCallCreatePostWithHttpInfo(toolsClueCallCreateV2Request: ToolsClueCallCreateV2Request): Promise<ApiResponse<ToolsClueCallCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueCallCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/call/create/",
      queryParams: [

      ],
      body: toolsClueCallCreateV2Request
    });
  }
}


