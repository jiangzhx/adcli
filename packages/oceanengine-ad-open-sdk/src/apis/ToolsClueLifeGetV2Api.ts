// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueLifeGetV2Request, ToolsClueLifeGetV2Response } from "../models";


export interface OpenApi2ToolsClueLifeGetPostRequest {
  toolsClueLifeGetV2Request?: ToolsClueLifeGetV2Request;
}

export class ToolsClueLifeGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueLifeGetPost(request: OpenApi2ToolsClueLifeGetPostRequest): Promise<ToolsClueLifeGetV2Response> {
    const response = await this.openApi2ToolsClueLifeGetPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueLifeGetPostWithHttpInfo(request: OpenApi2ToolsClueLifeGetPostRequest): Promise<ApiResponse<ToolsClueLifeGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueLifeGetV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/life/get/",
      queryParams: [

      ],
      body: request.toolsClueLifeGetV2Request
    });
  }
}


