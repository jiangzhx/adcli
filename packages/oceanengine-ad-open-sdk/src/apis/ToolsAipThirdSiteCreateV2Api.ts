// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAipThirdSiteCreateV2Request, ToolsAipThirdSiteCreateV2Response } from "../models";


export interface OpenApi2ToolsAipThirdSiteCreatePostRequest {
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

  async openApi2ToolsAipThirdSiteCreatePost(request: OpenApi2ToolsAipThirdSiteCreatePostRequest): Promise<ToolsAipThirdSiteCreateV2Response> {
    const response = await this.openApi2ToolsAipThirdSiteCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAipThirdSiteCreatePostWithHttpInfo(request: OpenApi2ToolsAipThirdSiteCreatePostRequest): Promise<ApiResponse<ToolsAipThirdSiteCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAipThirdSiteCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/aip_third_site/create/",
      queryParams: [

      ],
      body: request.toolsAipThirdSiteCreateV2Request
    });
  }
}


