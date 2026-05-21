// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsAwemeAuthCancelV2Request, ToolsAwemeAuthCancelV2Response } from "../models";


export class ToolsAwemeAuthCancelV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAwemeAuthCancelPost(toolsAwemeAuthCancelV2Request: ToolsAwemeAuthCancelV2Request): Promise<ToolsAwemeAuthCancelV2Response> {
    const response = await this.openApi2ToolsAwemeAuthCancelPostWithHttpInfo(toolsAwemeAuthCancelV2Request);
    return response.data;
  }

  async openApi2ToolsAwemeAuthCancelPostWithHttpInfo(toolsAwemeAuthCancelV2Request: ToolsAwemeAuthCancelV2Request): Promise<ApiResponse<ToolsAwemeAuthCancelV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAwemeAuthCancelV2Response>({
      method: "POST",
      path: "/open_api/2/tools/aweme_auth/cancel/",
      queryParams: [

      ],
      body: toolsAwemeAuthCancelV2Request
    });
  }
}


