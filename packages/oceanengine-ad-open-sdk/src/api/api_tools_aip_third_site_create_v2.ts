// Generated from oceanengine/ad_open_sdk_go api/api_tools_aip_third_site_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAipThirdSiteCreateV2Request, ToolsAipThirdSiteCreateV2Response } from "../models/index";


export interface ToolsAipThirdSiteCreateV2ApiOpenApi2ToolsAipThirdSiteCreatePostRequest {
  toolsAipThirdSiteCreateV2Request?: ToolsAipThirdSiteCreateV2Request;
}

export class ToolsAipThirdSiteCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAipThirdSiteCreatePost(request: ToolsAipThirdSiteCreateV2ApiOpenApi2ToolsAipThirdSiteCreatePostRequest): Promise<ToolsAipThirdSiteCreateV2Response> {
    const response = await this.openApi2ToolsAipThirdSiteCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAipThirdSiteCreatePostWithHttpInfo(request: ToolsAipThirdSiteCreateV2ApiOpenApi2ToolsAipThirdSiteCreatePostRequest): Promise<ApiResponse<ToolsAipThirdSiteCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAipThirdSiteCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/aip_third_site/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAipThirdSiteCreateV2Request
    });
  }
}


