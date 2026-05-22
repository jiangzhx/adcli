// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueRobotTaskCancelV2Request, ToolsClueRobotTaskCancelV2Response } from "../models";


export interface OpenApi2ToolsClueRobotTaskCancelPostRequest {
  toolsClueRobotTaskCancelV2Request?: ToolsClueRobotTaskCancelV2Request;
}

export class ToolsClueRobotTaskCancelV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueRobotTaskCancelPost(request: OpenApi2ToolsClueRobotTaskCancelPostRequest): Promise<ToolsClueRobotTaskCancelV2Response> {
    const response = await this.openApi2ToolsClueRobotTaskCancelPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueRobotTaskCancelPostWithHttpInfo(request: OpenApi2ToolsClueRobotTaskCancelPostRequest): Promise<ApiResponse<ToolsClueRobotTaskCancelV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueRobotTaskCancelV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/robot/task/cancel/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsClueRobotTaskCancelV2Request
    });
  }
}


