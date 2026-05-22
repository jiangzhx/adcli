// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAwemeAuthAuthShareAdShareV2Request, ToolsAwemeAuthAuthShareAdShareV2Response } from "../models";


export class ToolsAwemeAuthAuthShareAdShareV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAwemeAuthAuthShareAdSharePost(toolsAwemeAuthAuthShareAdShareV2Request: ToolsAwemeAuthAuthShareAdShareV2Request): Promise<ToolsAwemeAuthAuthShareAdShareV2Response> {
    const response = await this.openApi2ToolsAwemeAuthAuthShareAdSharePostWithHttpInfo(toolsAwemeAuthAuthShareAdShareV2Request);
    return response.data;
  }

  async openApi2ToolsAwemeAuthAuthShareAdSharePostWithHttpInfo(toolsAwemeAuthAuthShareAdShareV2Request: ToolsAwemeAuthAuthShareAdShareV2Request): Promise<ApiResponse<ToolsAwemeAuthAuthShareAdShareV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAwemeAuthAuthShareAdShareV2Response>({
      method: "POST",
      path: "/open_api/2/tools/aweme_auth/auth_share/ad_share/",
      queryParams: [

      ],
      body: toolsAwemeAuthAuthShareAdShareV2Request
    });
  }
}


