// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueRobotTaskCancelV2Request, ToolsClueRobotTaskCancelV2Response } from "../models";


export class ToolsClueRobotTaskCancelV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueRobotTaskCancelPost(toolsClueRobotTaskCancelV2Request: ToolsClueRobotTaskCancelV2Request): Promise<ToolsClueRobotTaskCancelV2Response> {
    const response = await this.openApi2ToolsClueRobotTaskCancelPostWithHttpInfo(toolsClueRobotTaskCancelV2Request);
    return response.data;
  }

  async openApi2ToolsClueRobotTaskCancelPostWithHttpInfo(toolsClueRobotTaskCancelV2Request: ToolsClueRobotTaskCancelV2Request): Promise<ApiResponse<ToolsClueRobotTaskCancelV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueRobotTaskCancelV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/robot/task/cancel/",
      queryParams: [

      ],
      body: toolsClueRobotTaskCancelV2Request
    });
  }
}


