// Generated from oceanengine/ad_open_sdk_go api/api_tools_aweme_auth_auth_share_ad_share_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAwemeAuthAuthShareAdShareV2Request, ToolsAwemeAuthAuthShareAdShareV2Response } from "../models/index";


export interface ToolsAwemeAuthAuthShareAdShareV2ApiOpenApi2ToolsAwemeAuthAuthShareAdSharePostRequest {
  toolsAwemeAuthAuthShareAdShareV2Request?: ToolsAwemeAuthAuthShareAdShareV2Request;
}

export class ToolsAwemeAuthAuthShareAdShareV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAwemeAuthAuthShareAdSharePost(request: ToolsAwemeAuthAuthShareAdShareV2ApiOpenApi2ToolsAwemeAuthAuthShareAdSharePostRequest): Promise<ToolsAwemeAuthAuthShareAdShareV2Response> {
    const response = await this.openApi2ToolsAwemeAuthAuthShareAdSharePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAwemeAuthAuthShareAdSharePostWithHttpInfo(request: ToolsAwemeAuthAuthShareAdShareV2ApiOpenApi2ToolsAwemeAuthAuthShareAdSharePostRequest): Promise<ApiResponse<ToolsAwemeAuthAuthShareAdShareV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAwemeAuthAuthShareAdShareV2Response>({
      method: "POST",
      path: "/open_api/2/tools/aweme_auth/auth_share/ad_share/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAwemeAuthAuthShareAdShareV2Request
    });
  }
}


