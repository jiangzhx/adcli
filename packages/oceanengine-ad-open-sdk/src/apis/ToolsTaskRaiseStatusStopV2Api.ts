// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsTaskRaiseStatusStopV2Request, ToolsTaskRaiseStatusStopV2Response } from "../models";


export class ToolsTaskRaiseStatusStopV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsTaskRaiseStatusStopPost(toolsTaskRaiseStatusStopV2Request: ToolsTaskRaiseStatusStopV2Request): Promise<ToolsTaskRaiseStatusStopV2Response> {
    const response = await this.openApi2ToolsTaskRaiseStatusStopPostWithHttpInfo(toolsTaskRaiseStatusStopV2Request);
    return response.data;
  }

  async openApi2ToolsTaskRaiseStatusStopPostWithHttpInfo(toolsTaskRaiseStatusStopV2Request: ToolsTaskRaiseStatusStopV2Request): Promise<ApiResponse<ToolsTaskRaiseStatusStopV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsTaskRaiseStatusStopV2Response>({
      method: "POST",
      path: "/open_api/2/tools/task_raise/status/stop/",
      queryParams: [

      ],
      body: toolsTaskRaiseStatusStopV2Request
    });
  }
}


