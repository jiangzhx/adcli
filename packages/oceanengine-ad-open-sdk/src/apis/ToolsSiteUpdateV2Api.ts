// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsSiteUpdateV2Request, ToolsSiteUpdateV2Response } from "../models";


export class ToolsSiteUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteUpdatePost(xOrangeCaller: string, toolsSiteUpdateV2Request: ToolsSiteUpdateV2Request): Promise<ToolsSiteUpdateV2Response> {
    const response = await this.openApi2ToolsSiteUpdatePostWithHttpInfo(xOrangeCaller, toolsSiteUpdateV2Request);
    return response.data;
  }

  async openApi2ToolsSiteUpdatePostWithHttpInfo(xOrangeCaller: string, toolsSiteUpdateV2Request: ToolsSiteUpdateV2Request): Promise<ApiResponse<ToolsSiteUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsSiteUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/site/update/",
      queryParams: [

      ],
      body: toolsSiteUpdateV2Request
    });
  }
}


