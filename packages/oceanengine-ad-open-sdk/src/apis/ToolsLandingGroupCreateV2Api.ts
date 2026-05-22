// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsLandingGroupCreateV2Request, ToolsLandingGroupCreateV2Response } from "../models";


export interface OpenApi2ToolsLandingGroupCreatePostRequest {
  xOrangeCaller?: string;
  toolsLandingGroupCreateV2Request?: ToolsLandingGroupCreateV2Request;
}

export class ToolsLandingGroupCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsLandingGroupCreatePost(request: OpenApi2ToolsLandingGroupCreatePostRequest): Promise<ToolsLandingGroupCreateV2Response> {
    const response = await this.openApi2ToolsLandingGroupCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsLandingGroupCreatePostWithHttpInfo(request: OpenApi2ToolsLandingGroupCreatePostRequest): Promise<ApiResponse<ToolsLandingGroupCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsLandingGroupCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/landing_group/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsLandingGroupCreateV2Request
    });
  }
}


