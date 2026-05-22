// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsTaskRaiseCreateV2Request, ToolsTaskRaiseCreateV2Response } from "../models";


export class ToolsTaskRaiseCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsTaskRaiseCreatePost(toolsTaskRaiseCreateV2Request: ToolsTaskRaiseCreateV2Request): Promise<ToolsTaskRaiseCreateV2Response> {
    const response = await this.openApi2ToolsTaskRaiseCreatePostWithHttpInfo(toolsTaskRaiseCreateV2Request);
    return response.data;
  }

  async openApi2ToolsTaskRaiseCreatePostWithHttpInfo(toolsTaskRaiseCreateV2Request: ToolsTaskRaiseCreateV2Request): Promise<ApiResponse<ToolsTaskRaiseCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsTaskRaiseCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/task_raise/create/",
      queryParams: [

      ],
      body: toolsTaskRaiseCreateV2Request
    });
  }
}


