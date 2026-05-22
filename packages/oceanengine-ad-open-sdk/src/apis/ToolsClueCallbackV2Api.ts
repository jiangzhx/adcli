// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueCallbackV2Request, ToolsClueCallbackV2Response } from "../models";


export class ToolsClueCallbackV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueCallbackPost(toolsClueCallbackV2Request: ToolsClueCallbackV2Request): Promise<ToolsClueCallbackV2Response> {
    const response = await this.openApi2ToolsClueCallbackPostWithHttpInfo(toolsClueCallbackV2Request);
    return response.data;
  }

  async openApi2ToolsClueCallbackPostWithHttpInfo(toolsClueCallbackV2Request: ToolsClueCallbackV2Request): Promise<ApiResponse<ToolsClueCallbackV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueCallbackV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/callback/",
      queryParams: [

      ],
      body: toolsClueCallbackV2Request
    });
  }
}


