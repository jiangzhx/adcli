// Generated from oceanengine/ad_open_sdk_go api/api_tools_playable_grant_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPlayableGrantV2Request, ToolsPlayableGrantV2Response } from "../models/index";


export interface ToolsPlayableGrantV2ApiOpenApi2ToolsPlayableGrantPostRequest {
  toolsPlayableGrantV2Request?: ToolsPlayableGrantV2Request;
}

export class ToolsPlayableGrantV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPlayableGrantPost(request: ToolsPlayableGrantV2ApiOpenApi2ToolsPlayableGrantPostRequest): Promise<ToolsPlayableGrantV2Response> {
    const response = await this.openApi2ToolsPlayableGrantPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPlayableGrantPostWithHttpInfo(request: ToolsPlayableGrantV2ApiOpenApi2ToolsPlayableGrantPostRequest): Promise<ApiResponse<ToolsPlayableGrantV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPlayableGrantV2Response>({
      method: "POST",
      path: "/open_api/2/tools/playable/grant/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsPlayableGrantV2Request
    });
  }
}


