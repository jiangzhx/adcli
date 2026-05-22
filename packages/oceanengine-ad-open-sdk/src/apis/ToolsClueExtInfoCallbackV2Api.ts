// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueExtInfoCallbackV2Request, ToolsClueExtInfoCallbackV2Response } from "../models";


export interface OpenApi2ToolsClueExtInfoCallbackPostRequest {
  toolsClueExtInfoCallbackV2Request?: ToolsClueExtInfoCallbackV2Request;
}

export class ToolsClueExtInfoCallbackV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueExtInfoCallbackPost(request: OpenApi2ToolsClueExtInfoCallbackPostRequest): Promise<ToolsClueExtInfoCallbackV2Response> {
    const response = await this.openApi2ToolsClueExtInfoCallbackPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueExtInfoCallbackPostWithHttpInfo(request: OpenApi2ToolsClueExtInfoCallbackPostRequest): Promise<ApiResponse<ToolsClueExtInfoCallbackV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueExtInfoCallbackV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/ext_info/callback/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsClueExtInfoCallbackV2Request
    });
  }
}


