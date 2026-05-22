// Generated from oceanengine/ad_open_sdk_go api/api_tools_landing_group_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsLandingGroupUpdateV2Request, ToolsLandingGroupUpdateV2Response } from "../models/index";


export interface ToolsLandingGroupUpdateV2ApiOpenApi2ToolsLandingGroupUpdatePostRequest {
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

  async openApi2ToolsLandingGroupUpdatePost(request: ToolsLandingGroupUpdateV2ApiOpenApi2ToolsLandingGroupUpdatePostRequest): Promise<ToolsLandingGroupUpdateV2Response> {
    const response = await this.openApi2ToolsLandingGroupUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsLandingGroupUpdatePostWithHttpInfo(request: ToolsLandingGroupUpdateV2ApiOpenApi2ToolsLandingGroupUpdatePostRequest): Promise<ApiResponse<ToolsLandingGroupUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsLandingGroupUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/landing_group/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsLandingGroupUpdateV2Request
    });
  }
}


