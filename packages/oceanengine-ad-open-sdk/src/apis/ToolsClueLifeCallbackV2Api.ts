// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueLifeCallbackV2Request, ToolsClueLifeCallbackV2Response } from "../models";


export class ToolsClueLifeCallbackV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueLifeCallbackPost(request: ToolsClueLifeCallbackV2Request): Promise<ToolsClueLifeCallbackV2Response> {
    const response = await this.openApi2ToolsClueLifeCallbackPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueLifeCallbackPostWithHttpInfo(request: ToolsClueLifeCallbackV2Request): Promise<ApiResponse<ToolsClueLifeCallbackV2Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsClueLifeCallbackV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/life/callback/",
      queryParams: [

      ],
      body: request
    });
  }
}


