// Generated from oceanengine/ad_open_sdk_go api/api_tools_task_raise_status_stop_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsTaskRaiseStatusStopV2Request, ToolsTaskRaiseStatusStopV2Response } from "../models/index";


export interface ToolsTaskRaiseStatusStopV2ApiOpenApi2ToolsTaskRaiseStatusStopPostRequest {
  toolsTaskRaiseStatusStopV2Request?: ToolsTaskRaiseStatusStopV2Request;
}

export class ToolsTaskRaiseStatusStopV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsTaskRaiseStatusStopPost(request: ToolsTaskRaiseStatusStopV2ApiOpenApi2ToolsTaskRaiseStatusStopPostRequest): Promise<ToolsTaskRaiseStatusStopV2Response> {
    const response = await this.openApi2ToolsTaskRaiseStatusStopPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsTaskRaiseStatusStopPostWithHttpInfo(request: ToolsTaskRaiseStatusStopV2ApiOpenApi2ToolsTaskRaiseStatusStopPostRequest): Promise<ApiResponse<ToolsTaskRaiseStatusStopV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsTaskRaiseStatusStopV2Response>({
      method: "POST",
      path: "/open_api/2/tools/task_raise/status/stop/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsTaskRaiseStatusStopV2Request
    });
  }
}


