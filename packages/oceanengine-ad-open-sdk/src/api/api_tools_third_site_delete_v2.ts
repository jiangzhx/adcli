// Generated from oceanengine/ad_open_sdk_go api/api_tools_third_site_delete_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsThirdSiteDeleteV2Request, ToolsThirdSiteDeleteV2Response } from "../models/index";


export interface ToolsThirdSiteDeleteV2ApiOpenApi2ToolsThirdSiteDeletePostRequest {
  toolsThirdSiteDeleteV2Request?: ToolsThirdSiteDeleteV2Request;
}

export class ToolsThirdSiteDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsThirdSiteDeletePost(request: ToolsThirdSiteDeleteV2ApiOpenApi2ToolsThirdSiteDeletePostRequest): Promise<ToolsThirdSiteDeleteV2Response> {
    const response = await this.openApi2ToolsThirdSiteDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsThirdSiteDeletePostWithHttpInfo(request: ToolsThirdSiteDeleteV2ApiOpenApi2ToolsThirdSiteDeletePostRequest): Promise<ApiResponse<ToolsThirdSiteDeleteV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsThirdSiteDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/tools/third_site/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsThirdSiteDeleteV2Request
    });
  }
}


