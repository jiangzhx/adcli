// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueLifeCallbackV2Request, ToolsClueLifeCallbackV2Response } from "../models";


export interface OpenApi2ToolsClueLifeCallbackPostRequest {
  toolsClueLifeCallbackV2Request?: ToolsClueLifeCallbackV2Request;
}

export class ToolsClueLifeCallbackV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueLifeCallbackPost(request: OpenApi2ToolsClueLifeCallbackPostRequest): Promise<ToolsClueLifeCallbackV2Response> {
    const response = await this.openApi2ToolsClueLifeCallbackPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueLifeCallbackPostWithHttpInfo(request: OpenApi2ToolsClueLifeCallbackPostRequest): Promise<ApiResponse<ToolsClueLifeCallbackV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueLifeCallbackV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/life/callback/",
      queryParams: [

      ],
      body: request.toolsClueLifeCallbackV2Request
    });
  }
}


