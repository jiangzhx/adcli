// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueExtInfoCallbackV2Request, ToolsClueExtInfoCallbackV2Response } from "../models";


export class ToolsClueExtInfoCallbackV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueExtInfoCallbackPost(toolsClueExtInfoCallbackV2Request: ToolsClueExtInfoCallbackV2Request): Promise<ToolsClueExtInfoCallbackV2Response> {
    const response = await this.openApi2ToolsClueExtInfoCallbackPostWithHttpInfo(toolsClueExtInfoCallbackV2Request);
    return response.data;
  }

  async openApi2ToolsClueExtInfoCallbackPostWithHttpInfo(toolsClueExtInfoCallbackV2Request: ToolsClueExtInfoCallbackV2Request): Promise<ApiResponse<ToolsClueExtInfoCallbackV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueExtInfoCallbackV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/ext_info/callback/",
      queryParams: [

      ],
      body: toolsClueExtInfoCallbackV2Request
    });
  }
}


