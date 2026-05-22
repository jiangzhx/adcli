// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsThirdSiteUpdateV2Request, ToolsThirdSiteUpdateV2Response } from "../models";


export class ToolsThirdSiteUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsThirdSiteUpdatePost(toolsThirdSiteUpdateV2Request: ToolsThirdSiteUpdateV2Request): Promise<ToolsThirdSiteUpdateV2Response> {
    const response = await this.openApi2ToolsThirdSiteUpdatePostWithHttpInfo(toolsThirdSiteUpdateV2Request);
    return response.data;
  }

  async openApi2ToolsThirdSiteUpdatePostWithHttpInfo(toolsThirdSiteUpdateV2Request: ToolsThirdSiteUpdateV2Request): Promise<ApiResponse<ToolsThirdSiteUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsThirdSiteUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/third_site/update/",
      queryParams: [

      ],
      body: toolsThirdSiteUpdateV2Request
    });
  }
}


