// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPlayableSaveV2Request, ToolsPlayableSaveV2Response } from "../models";


export interface OpenApi2ToolsPlayableSavePostRequest {
  toolsPlayableSaveV2Request?: ToolsPlayableSaveV2Request;
}

export class ToolsPlayableSaveV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPlayableSavePost(request: OpenApi2ToolsPlayableSavePostRequest): Promise<ToolsPlayableSaveV2Response> {
    const response = await this.openApi2ToolsPlayableSavePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPlayableSavePostWithHttpInfo(request: OpenApi2ToolsPlayableSavePostRequest): Promise<ApiResponse<ToolsPlayableSaveV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPlayableSaveV2Response>({
      method: "POST",
      path: "/open_api/2/tools/playable/save/",
      queryParams: [

      ],
      body: request.toolsPlayableSaveV2Request
    });
  }
}


