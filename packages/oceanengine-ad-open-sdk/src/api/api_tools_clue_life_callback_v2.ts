// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_life_callback_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueLifeCallbackV2Request, ToolsClueLifeCallbackV2Response } from "../models/index";


export interface ToolsClueLifeCallbackV2ApiOpenApi2ToolsClueLifeCallbackPostRequest {
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

  async openApi2ToolsClueLifeCallbackPost(request: ToolsClueLifeCallbackV2ApiOpenApi2ToolsClueLifeCallbackPostRequest): Promise<ToolsClueLifeCallbackV2Response> {
    const response = await this.openApi2ToolsClueLifeCallbackPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueLifeCallbackPostWithHttpInfo(request: ToolsClueLifeCallbackV2ApiOpenApi2ToolsClueLifeCallbackPostRequest): Promise<ApiResponse<ToolsClueLifeCallbackV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueLifeCallbackV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/life/callback/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsClueLifeCallbackV2Request
    });
  }
}


