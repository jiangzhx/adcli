// Generated from oceanengine/ad_open_sdk_go api/api_tools_playable_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPlayableCreateV2Request, ToolsPlayableCreateV2Response } from "../models/index";


export interface ToolsPlayableCreateV2ApiOpenApi2ToolsPlayableCreatePostRequest {
  toolsPlayableCreateV2Request?: ToolsPlayableCreateV2Request;
}

export class ToolsPlayableCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPlayableCreatePost(request: ToolsPlayableCreateV2ApiOpenApi2ToolsPlayableCreatePostRequest): Promise<ToolsPlayableCreateV2Response> {
    const response = await this.openApi2ToolsPlayableCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPlayableCreatePostWithHttpInfo(request: ToolsPlayableCreateV2ApiOpenApi2ToolsPlayableCreatePostRequest): Promise<ApiResponse<ToolsPlayableCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPlayableCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/playable/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsPlayableCreateV2Request
    });
  }
}


