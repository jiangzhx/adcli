// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsThirdSiteDeleteV2Request, ToolsThirdSiteDeleteV2Response } from "../models";


export class ToolsThirdSiteDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsThirdSiteDeletePost(request: ToolsThirdSiteDeleteV2Request): Promise<ToolsThirdSiteDeleteV2Response> {
    const response = await this.openApi2ToolsThirdSiteDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsThirdSiteDeletePostWithHttpInfo(request: ToolsThirdSiteDeleteV2Request): Promise<ApiResponse<ToolsThirdSiteDeleteV2Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsThirdSiteDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/tools/third_site/delete/",
      queryParams: [

      ],
      body: request
    });
  }
}


