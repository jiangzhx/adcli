// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAwemeAuthCancelV2Request, ToolsAwemeAuthCancelV2Response } from "../models";


export interface OpenApi2ToolsAwemeAuthCancelPostRequest {
  toolsAwemeAuthCancelV2Request?: ToolsAwemeAuthCancelV2Request;
}

export class ToolsAwemeAuthCancelV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAwemeAuthCancelPost(request: OpenApi2ToolsAwemeAuthCancelPostRequest): Promise<ToolsAwemeAuthCancelV2Response> {
    const response = await this.openApi2ToolsAwemeAuthCancelPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAwemeAuthCancelPostWithHttpInfo(request: OpenApi2ToolsAwemeAuthCancelPostRequest): Promise<ApiResponse<ToolsAwemeAuthCancelV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAwemeAuthCancelV2Response>({
      method: "POST",
      path: "/open_api/2/tools/aweme_auth/cancel/",
      queryParams: [

      ],
      body: request.toolsAwemeAuthCancelV2Request
    });
  }
}


