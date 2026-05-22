// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsSiteCreateV2Request, ToolsSiteCreateV2Response } from "../models";


export class ToolsSiteCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteCreatePost(xOrangeCaller: string, toolsSiteCreateV2Request: ToolsSiteCreateV2Request): Promise<ToolsSiteCreateV2Response> {
    const response = await this.openApi2ToolsSiteCreatePostWithHttpInfo(xOrangeCaller, toolsSiteCreateV2Request);
    return response.data;
  }

  async openApi2ToolsSiteCreatePostWithHttpInfo(xOrangeCaller: string, toolsSiteCreateV2Request: ToolsSiteCreateV2Request): Promise<ApiResponse<ToolsSiteCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsSiteCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/site/create/",
      queryParams: [

      ],
      body: toolsSiteCreateV2Request
    });
  }
}


