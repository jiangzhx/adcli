// Generated from oceanengine/ad_open_sdk_go api/api_tools_aweme_auth_cancel_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAwemeAuthCancelV2Request, ToolsAwemeAuthCancelV2Response } from "../models/index";


export interface ToolsAwemeAuthCancelV2ApiOpenApi2ToolsAwemeAuthCancelPostRequest {
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

  async openApi2ToolsAwemeAuthCancelPost(request: ToolsAwemeAuthCancelV2ApiOpenApi2ToolsAwemeAuthCancelPostRequest): Promise<ToolsAwemeAuthCancelV2Response> {
    const response = await this.openApi2ToolsAwemeAuthCancelPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAwemeAuthCancelPostWithHttpInfo(request: ToolsAwemeAuthCancelV2ApiOpenApi2ToolsAwemeAuthCancelPostRequest): Promise<ApiResponse<ToolsAwemeAuthCancelV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAwemeAuthCancelV2Response>({
      method: "POST",
      path: "/open_api/2/tools/aweme_auth/cancel/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAwemeAuthCancelV2Request
    });
  }
}


