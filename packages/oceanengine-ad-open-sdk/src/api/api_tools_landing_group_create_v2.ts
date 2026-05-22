// Generated from oceanengine/ad_open_sdk_go api/api_tools_landing_group_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsLandingGroupCreateV2Request, ToolsLandingGroupCreateV2Response } from "../models/index";


export interface ToolsLandingGroupCreateV2ApiOpenApi2ToolsLandingGroupCreatePostRequest {
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

  async openApi2ToolsLandingGroupCreatePost(request: ToolsLandingGroupCreateV2ApiOpenApi2ToolsLandingGroupCreatePostRequest): Promise<ToolsLandingGroupCreateV2Response> {
    const response = await this.openApi2ToolsLandingGroupCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsLandingGroupCreatePostWithHttpInfo(request: ToolsLandingGroupCreateV2ApiOpenApi2ToolsLandingGroupCreatePostRequest): Promise<ApiResponse<ToolsLandingGroupCreateV2Response>> {

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


