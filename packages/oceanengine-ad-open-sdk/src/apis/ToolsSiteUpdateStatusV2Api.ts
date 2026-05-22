// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsSiteUpdateStatusV2Request, ToolsSiteUpdateStatusV2Response } from "../models";


export class ToolsSiteUpdateStatusV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteUpdateStatusPost(xOrangeCaller: string, toolsSiteUpdateStatusV2Request: ToolsSiteUpdateStatusV2Request): Promise<ToolsSiteUpdateStatusV2Response> {
    const response = await this.openApi2ToolsSiteUpdateStatusPostWithHttpInfo(xOrangeCaller, toolsSiteUpdateStatusV2Request);
    return response.data;
  }

  async openApi2ToolsSiteUpdateStatusPostWithHttpInfo(xOrangeCaller: string, toolsSiteUpdateStatusV2Request: ToolsSiteUpdateStatusV2Request): Promise<ApiResponse<ToolsSiteUpdateStatusV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsSiteUpdateStatusV2Response>({
      method: "POST",
      path: "/open_api/2/tools/site/update_status/",
      queryParams: [

      ],
      body: toolsSiteUpdateStatusV2Request
    });
  }
}


