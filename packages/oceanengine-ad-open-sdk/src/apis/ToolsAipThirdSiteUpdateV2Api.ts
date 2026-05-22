// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAipThirdSiteUpdateV2Request, ToolsAipThirdSiteUpdateV2Response } from "../models";


export class ToolsAipThirdSiteUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAipThirdSiteUpdatePost(request: ToolsAipThirdSiteUpdateV2Request): Promise<ToolsAipThirdSiteUpdateV2Response> {
    const response = await this.openApi2ToolsAipThirdSiteUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAipThirdSiteUpdatePostWithHttpInfo(request: ToolsAipThirdSiteUpdateV2Request): Promise<ApiResponse<ToolsAipThirdSiteUpdateV2Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsAipThirdSiteUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/aip_third_site/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


