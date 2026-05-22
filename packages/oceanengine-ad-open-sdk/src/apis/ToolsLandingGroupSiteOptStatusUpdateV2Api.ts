// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsLandingGroupSiteOptStatusUpdateV2Request, ToolsLandingGroupSiteOptStatusUpdateV2Response } from "../models";


export class ToolsLandingGroupSiteOptStatusUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsLandingGroupSiteOptStatusUpdatePost(xOrangeCaller: string, toolsLandingGroupSiteOptStatusUpdateV2Request: ToolsLandingGroupSiteOptStatusUpdateV2Request): Promise<ToolsLandingGroupSiteOptStatusUpdateV2Response> {
    const response = await this.openApi2ToolsLandingGroupSiteOptStatusUpdatePostWithHttpInfo(xOrangeCaller, toolsLandingGroupSiteOptStatusUpdateV2Request);
    return response.data;
  }

  async openApi2ToolsLandingGroupSiteOptStatusUpdatePostWithHttpInfo(xOrangeCaller: string, toolsLandingGroupSiteOptStatusUpdateV2Request: ToolsLandingGroupSiteOptStatusUpdateV2Request): Promise<ApiResponse<ToolsLandingGroupSiteOptStatusUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsLandingGroupSiteOptStatusUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/landing_group/site_opt_status/update/",
      queryParams: [

      ],
      body: toolsLandingGroupSiteOptStatusUpdateV2Request
    });
  }
}


