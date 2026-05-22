// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_private_message_callback_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsCluePrivateMessageCallbackV2Request, ToolsCluePrivateMessageCallbackV2Response } from "../models/index";


export interface ToolsCluePrivateMessageCallbackV2ApiOpenApi2ToolsCluePrivateMessageCallbackPostRequest {
  toolsCluePrivateMessageCallbackV2Request?: ToolsCluePrivateMessageCallbackV2Request;
}

export class ToolsCluePrivateMessageCallbackV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsCluePrivateMessageCallbackPost(request: ToolsCluePrivateMessageCallbackV2ApiOpenApi2ToolsCluePrivateMessageCallbackPostRequest): Promise<ToolsCluePrivateMessageCallbackV2Response> {
    const response = await this.openApi2ToolsCluePrivateMessageCallbackPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsCluePrivateMessageCallbackPostWithHttpInfo(request: ToolsCluePrivateMessageCallbackV2ApiOpenApi2ToolsCluePrivateMessageCallbackPostRequest): Promise<ApiResponse<ToolsCluePrivateMessageCallbackV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsCluePrivateMessageCallbackV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/private_message/callback/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsCluePrivateMessageCallbackV2Request
    });
  }
}


