// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsLandingGroupCreateV2Request, ToolsLandingGroupCreateV2Response } from "../models";


export class ToolsLandingGroupCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsLandingGroupCreatePost(xOrangeCaller: string, toolsLandingGroupCreateV2Request: ToolsLandingGroupCreateV2Request): Promise<ToolsLandingGroupCreateV2Response> {
    const response = await this.openApi2ToolsLandingGroupCreatePostWithHttpInfo(xOrangeCaller, toolsLandingGroupCreateV2Request);
    return response.data;
  }

  async openApi2ToolsLandingGroupCreatePostWithHttpInfo(xOrangeCaller: string, toolsLandingGroupCreateV2Request: ToolsLandingGroupCreateV2Request): Promise<ApiResponse<ToolsLandingGroupCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsLandingGroupCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/landing_group/create/",
      queryParams: [

      ],
      body: toolsLandingGroupCreateV2Request
    });
  }
}


