// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsAipThirdSiteCreateV2Request, ToolsAipThirdSiteCreateV2Response } from "../models";


export class ToolsAipThirdSiteCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAipThirdSiteCreatePost(toolsAipThirdSiteCreateV2Request: ToolsAipThirdSiteCreateV2Request): Promise<ToolsAipThirdSiteCreateV2Response> {
    const response = await this.openApi2ToolsAipThirdSiteCreatePostWithHttpInfo(toolsAipThirdSiteCreateV2Request);
    return response.data;
  }

  async openApi2ToolsAipThirdSiteCreatePostWithHttpInfo(toolsAipThirdSiteCreateV2Request: ToolsAipThirdSiteCreateV2Request): Promise<ApiResponse<ToolsAipThirdSiteCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAipThirdSiteCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/aip_third_site/create/",
      queryParams: [

      ],
      body: toolsAipThirdSiteCreateV2Request
    });
  }
}


