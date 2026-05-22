// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPlayableCreateV2Request, ToolsPlayableCreateV2Response } from "../models";


export class ToolsPlayableCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPlayableCreatePost(request: ToolsPlayableCreateV2Request): Promise<ToolsPlayableCreateV2Response> {
    const response = await this.openApi2ToolsPlayableCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPlayableCreatePostWithHttpInfo(request: ToolsPlayableCreateV2Request): Promise<ApiResponse<ToolsPlayableCreateV2Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsPlayableCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/playable/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


