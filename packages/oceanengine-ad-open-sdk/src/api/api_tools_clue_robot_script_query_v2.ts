// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_robot_script_query_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueRobotScriptQueryV2Request, ToolsClueRobotScriptQueryV2Response } from "../models/index";


export interface ToolsClueRobotScriptQueryV2ApiOpenApi2ToolsClueRobotScriptQueryPostRequest {
  toolsClueRobotScriptQueryV2Request?: ToolsClueRobotScriptQueryV2Request;
}

export class ToolsClueRobotScriptQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueRobotScriptQueryPost(request: ToolsClueRobotScriptQueryV2ApiOpenApi2ToolsClueRobotScriptQueryPostRequest): Promise<ToolsClueRobotScriptQueryV2Response> {
    const response = await this.openApi2ToolsClueRobotScriptQueryPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueRobotScriptQueryPostWithHttpInfo(request: ToolsClueRobotScriptQueryV2ApiOpenApi2ToolsClueRobotScriptQueryPostRequest): Promise<ApiResponse<ToolsClueRobotScriptQueryV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueRobotScriptQueryV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/robot/script/query/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsClueRobotScriptQueryV2Request
    });
  }
}


