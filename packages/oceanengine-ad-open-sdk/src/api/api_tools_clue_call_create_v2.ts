// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_call_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueCallCreateV2Request, ToolsClueCallCreateV2Response } from "../models/index";


export interface ToolsClueCallCreateV2ApiOpenApi2ToolsClueCallCreatePostRequest {
  toolsClueCallCreateV2Request?: ToolsClueCallCreateV2Request;
}

export class ToolsClueCallCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueCallCreatePost(request: ToolsClueCallCreateV2ApiOpenApi2ToolsClueCallCreatePostRequest): Promise<ToolsClueCallCreateV2Response> {
    const response = await this.openApi2ToolsClueCallCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueCallCreatePostWithHttpInfo(request: ToolsClueCallCreateV2ApiOpenApi2ToolsClueCallCreatePostRequest): Promise<ApiResponse<ToolsClueCallCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueCallCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/call/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsClueCallCreateV2Request
    });
  }
}


