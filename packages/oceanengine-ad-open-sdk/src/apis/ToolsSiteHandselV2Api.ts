// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsSiteHandselV2Request, ToolsSiteHandselV2Response } from "../models";


export class ToolsSiteHandselV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteHandselPost(xOrangeCaller: string, toolsSiteHandselV2Request: ToolsSiteHandselV2Request): Promise<ToolsSiteHandselV2Response> {
    const response = await this.openApi2ToolsSiteHandselPostWithHttpInfo(xOrangeCaller, toolsSiteHandselV2Request);
    return response.data;
  }

  async openApi2ToolsSiteHandselPostWithHttpInfo(xOrangeCaller: string, toolsSiteHandselV2Request: ToolsSiteHandselV2Request): Promise<ApiResponse<ToolsSiteHandselV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsSiteHandselV2Response>({
      method: "POST",
      path: "/open_api/2/tools/site/handsel/",
      queryParams: [

      ],
      body: toolsSiteHandselV2Request
    });
  }
}


