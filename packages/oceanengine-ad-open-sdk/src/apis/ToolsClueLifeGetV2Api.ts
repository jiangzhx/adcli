// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueLifeGetV2Request, ToolsClueLifeGetV2Response } from "../models";


export class ToolsClueLifeGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueLifeGetPost(request: ToolsClueLifeGetV2Request): Promise<ToolsClueLifeGetV2Response> {
    const response = await this.openApi2ToolsClueLifeGetPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueLifeGetPostWithHttpInfo(request: ToolsClueLifeGetV2Request): Promise<ApiResponse<ToolsClueLifeGetV2Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsClueLifeGetV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/life/get/",
      queryParams: [

      ],
      body: request
    });
  }
}


