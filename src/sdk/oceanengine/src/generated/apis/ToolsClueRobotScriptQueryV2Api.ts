// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsClueRobotScriptQueryV2Request, ToolsClueRobotScriptQueryV2Response } from "../models";


export class ToolsClueRobotScriptQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueRobotScriptQueryPost(toolsClueRobotScriptQueryV2Request: ToolsClueRobotScriptQueryV2Request): Promise<ToolsClueRobotScriptQueryV2Response> {
    const response = await this.openApi2ToolsClueRobotScriptQueryPostWithHttpInfo(toolsClueRobotScriptQueryV2Request);
    return response.data;
  }

  async openApi2ToolsClueRobotScriptQueryPostWithHttpInfo(toolsClueRobotScriptQueryV2Request: ToolsClueRobotScriptQueryV2Request): Promise<ApiResponse<ToolsClueRobotScriptQueryV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueRobotScriptQueryV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/robot/script/query/",
      queryParams: [

      ],
      body: toolsClueRobotScriptQueryV2Request
    });
  }
}


