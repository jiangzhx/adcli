// Generated from oceanengine/ad_open_sdk_go api/api_tools_third_site_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsThirdSiteUpdateV2Request, ToolsThirdSiteUpdateV2Response } from "../models/index";


export interface ToolsThirdSiteUpdateV2ApiOpenApi2ToolsThirdSiteUpdatePostRequest {
  toolsThirdSiteUpdateV2Request?: ToolsThirdSiteUpdateV2Request;
}

export class ToolsThirdSiteUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsThirdSiteUpdatePost(request: ToolsThirdSiteUpdateV2ApiOpenApi2ToolsThirdSiteUpdatePostRequest): Promise<ToolsThirdSiteUpdateV2Response> {
    const response = await this.openApi2ToolsThirdSiteUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsThirdSiteUpdatePostWithHttpInfo(request: ToolsThirdSiteUpdateV2ApiOpenApi2ToolsThirdSiteUpdatePostRequest): Promise<ApiResponse<ToolsThirdSiteUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsThirdSiteUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/third_site/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsThirdSiteUpdateV2Request
    });
  }
}


