// Generated from oceanengine/ad_open_sdk_go api/api_tools_landing_group_site_opt_status_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsLandingGroupSiteOptStatusUpdateV2Request, ToolsLandingGroupSiteOptStatusUpdateV2Response } from "../models/index";


export interface ToolsLandingGroupSiteOptStatusUpdateV2ApiOpenApi2ToolsLandingGroupSiteOptStatusUpdatePostRequest {
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

  async openApi2ToolsLandingGroupSiteOptStatusUpdatePost(request: ToolsLandingGroupSiteOptStatusUpdateV2ApiOpenApi2ToolsLandingGroupSiteOptStatusUpdatePostRequest): Promise<ToolsLandingGroupSiteOptStatusUpdateV2Response> {
    const response = await this.openApi2ToolsLandingGroupSiteOptStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsLandingGroupSiteOptStatusUpdatePostWithHttpInfo(request: ToolsLandingGroupSiteOptStatusUpdateV2ApiOpenApi2ToolsLandingGroupSiteOptStatusUpdatePostRequest): Promise<ApiResponse<ToolsLandingGroupSiteOptStatusUpdateV2Response>> {

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


