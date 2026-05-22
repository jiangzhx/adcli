// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsLandingGroupSiteOptStatusUpdateV2Request, ToolsLandingGroupSiteOptStatusUpdateV2Response } from "../models";


export interface OpenApi2ToolsLandingGroupSiteOptStatusUpdatePostRequest {
  xOrangeCaller?: string;
  toolsLandingGroupSiteOptStatusUpdateV2Request?: ToolsLandingGroupSiteOptStatusUpdateV2Request;
}

export class ToolsLandingGroupSiteOptStatusUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsLandingGroupSiteOptStatusUpdatePost(request: OpenApi2ToolsLandingGroupSiteOptStatusUpdatePostRequest): Promise<ToolsLandingGroupSiteOptStatusUpdateV2Response> {
    const response = await this.openApi2ToolsLandingGroupSiteOptStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsLandingGroupSiteOptStatusUpdatePostWithHttpInfo(request: OpenApi2ToolsLandingGroupSiteOptStatusUpdatePostRequest): Promise<ApiResponse<ToolsLandingGroupSiteOptStatusUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsLandingGroupSiteOptStatusUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/landing_group/site_opt_status/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsLandingGroupSiteOptStatusUpdateV2Request
    });
  }
}


