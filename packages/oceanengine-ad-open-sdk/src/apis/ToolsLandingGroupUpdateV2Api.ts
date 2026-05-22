// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsLandingGroupUpdateV2Request, ToolsLandingGroupUpdateV2Response } from "../models";


export interface OpenApi2ToolsLandingGroupUpdatePostRequest {
  xOrangeCaller?: string;
  toolsLandingGroupUpdateV2Request?: ToolsLandingGroupUpdateV2Request;
}

export class ToolsLandingGroupUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsLandingGroupUpdatePost(request: OpenApi2ToolsLandingGroupUpdatePostRequest): Promise<ToolsLandingGroupUpdateV2Response> {
    const response = await this.openApi2ToolsLandingGroupUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsLandingGroupUpdatePostWithHttpInfo(request: OpenApi2ToolsLandingGroupUpdatePostRequest): Promise<ApiResponse<ToolsLandingGroupUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsLandingGroupUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/landing_group/update/",
      queryParams: [

      ],
      body: request.toolsLandingGroupUpdateV2Request
    });
  }
}


