// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_life_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueLifeGetV2Request, ToolsClueLifeGetV2Response } from "../models/index";


export interface ToolsClueLifeGetV2ApiOpenApi2ToolsClueLifeGetPostRequest {
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

  async openApi2ToolsClueLifeGetPost(request: ToolsClueLifeGetV2ApiOpenApi2ToolsClueLifeGetPostRequest): Promise<ToolsClueLifeGetV2Response> {
    const response = await this.openApi2ToolsClueLifeGetPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueLifeGetPostWithHttpInfo(request: ToolsClueLifeGetV2ApiOpenApi2ToolsClueLifeGetPostRequest): Promise<ApiResponse<ToolsClueLifeGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueLifeGetV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/life/get/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsClueLifeGetV2Request
    });
  }
}


