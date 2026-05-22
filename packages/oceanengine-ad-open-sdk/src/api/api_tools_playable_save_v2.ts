// Generated from oceanengine/ad_open_sdk_go api/api_tools_playable_save_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPlayableSaveV2Request, ToolsPlayableSaveV2Response } from "../models/index";


export interface ToolsPlayableSaveV2ApiOpenApi2ToolsPlayableSavePostRequest {
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

  async openApi2ToolsPlayableSavePost(request: ToolsPlayableSaveV2ApiOpenApi2ToolsPlayableSavePostRequest): Promise<ToolsPlayableSaveV2Response> {
    const response = await this.openApi2ToolsPlayableSavePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPlayableSavePostWithHttpInfo(request: ToolsPlayableSaveV2ApiOpenApi2ToolsPlayableSavePostRequest): Promise<ApiResponse<ToolsPlayableSaveV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPlayableSaveV2Response>({
      method: "POST",
      path: "/open_api/2/tools/playable/save/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsPlayableSaveV2Request
    });
  }
}


