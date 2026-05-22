// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsCluePrivateMessageCallbackV2Request, ToolsCluePrivateMessageCallbackV2Response } from "../models";


export class ToolsCluePrivateMessageCallbackV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsCluePrivateMessageCallbackPost(request: ToolsCluePrivateMessageCallbackV2Request): Promise<ToolsCluePrivateMessageCallbackV2Response> {
    const response = await this.openApi2ToolsCluePrivateMessageCallbackPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsCluePrivateMessageCallbackPostWithHttpInfo(request: ToolsCluePrivateMessageCallbackV2Request): Promise<ApiResponse<ToolsCluePrivateMessageCallbackV2Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsCluePrivateMessageCallbackV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/private_message/callback/",
      queryParams: [

      ],
      body: request
    });
  }
}


