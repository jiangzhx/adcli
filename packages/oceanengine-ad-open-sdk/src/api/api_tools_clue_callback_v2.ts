// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_callback_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueCallbackV2Request, ToolsClueCallbackV2Response } from "../models/index";


export interface ToolsClueCallbackV2ApiOpenApi2ToolsClueCallbackPostRequest {
  toolsClueCallbackV2Request?: ToolsClueCallbackV2Request;
}

export class ToolsClueCallbackV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueCallbackPost(request: ToolsClueCallbackV2ApiOpenApi2ToolsClueCallbackPostRequest): Promise<ToolsClueCallbackV2Response> {
    const response = await this.openApi2ToolsClueCallbackPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueCallbackPostWithHttpInfo(request: ToolsClueCallbackV2ApiOpenApi2ToolsClueCallbackPostRequest): Promise<ApiResponse<ToolsClueCallbackV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueCallbackV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/callback/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsClueCallbackV2Request
    });
  }
}


