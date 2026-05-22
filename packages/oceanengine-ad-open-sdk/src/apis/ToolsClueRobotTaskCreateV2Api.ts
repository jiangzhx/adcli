// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueRobotTaskCreateV2Request, ToolsClueRobotTaskCreateV2Response } from "../models";


export interface OpenApi2ToolsClueRobotTaskCreatePostRequest {
  toolsClueRobotTaskCreateV2Request?: ToolsClueRobotTaskCreateV2Request;
}

export class ToolsClueRobotTaskCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueRobotTaskCreatePost(request: OpenApi2ToolsClueRobotTaskCreatePostRequest): Promise<ToolsClueRobotTaskCreateV2Response> {
    const response = await this.openApi2ToolsClueRobotTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueRobotTaskCreatePostWithHttpInfo(request: OpenApi2ToolsClueRobotTaskCreatePostRequest): Promise<ApiResponse<ToolsClueRobotTaskCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueRobotTaskCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/robot/task/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsClueRobotTaskCreateV2Request
    });
  }
}


