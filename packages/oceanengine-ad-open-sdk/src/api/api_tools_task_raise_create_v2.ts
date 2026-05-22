// Generated from oceanengine/ad_open_sdk_go api/api_tools_task_raise_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsTaskRaiseCreateV2Request, ToolsTaskRaiseCreateV2Response } from "../models/index";


export interface ToolsTaskRaiseCreateV2ApiOpenApi2ToolsTaskRaiseCreatePostRequest {
  toolsTaskRaiseCreateV2Request?: ToolsTaskRaiseCreateV2Request;
}

export class ToolsTaskRaiseCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsTaskRaiseCreatePost(request: ToolsTaskRaiseCreateV2ApiOpenApi2ToolsTaskRaiseCreatePostRequest): Promise<ToolsTaskRaiseCreateV2Response> {
    const response = await this.openApi2ToolsTaskRaiseCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsTaskRaiseCreatePostWithHttpInfo(request: ToolsTaskRaiseCreateV2ApiOpenApi2ToolsTaskRaiseCreatePostRequest): Promise<ApiResponse<ToolsTaskRaiseCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsTaskRaiseCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/task_raise/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsTaskRaiseCreateV2Request
    });
  }
}


