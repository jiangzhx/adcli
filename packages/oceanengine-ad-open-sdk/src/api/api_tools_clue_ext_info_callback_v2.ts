// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_ext_info_callback_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueExtInfoCallbackV2Request, ToolsClueExtInfoCallbackV2Response } from "../models/index";


export interface ToolsClueExtInfoCallbackV2ApiOpenApi2ToolsClueExtInfoCallbackPostRequest {
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

  async openApi2ToolsClueExtInfoCallbackPost(request: ToolsClueExtInfoCallbackV2ApiOpenApi2ToolsClueExtInfoCallbackPostRequest): Promise<ToolsClueExtInfoCallbackV2Response> {
    const response = await this.openApi2ToolsClueExtInfoCallbackPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueExtInfoCallbackPostWithHttpInfo(request: ToolsClueExtInfoCallbackV2ApiOpenApi2ToolsClueExtInfoCallbackPostRequest): Promise<ApiResponse<ToolsClueExtInfoCallbackV2Response>> {

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


