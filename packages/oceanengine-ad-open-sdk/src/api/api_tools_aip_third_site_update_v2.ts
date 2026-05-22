// Generated from oceanengine/ad_open_sdk_go api/api_tools_aip_third_site_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAipThirdSiteUpdateV2Request, ToolsAipThirdSiteUpdateV2Response } from "../models/index";


export interface ToolsAipThirdSiteUpdateV2ApiOpenApi2ToolsAipThirdSiteUpdatePostRequest {
  toolsAipThirdSiteUpdateV2Request?: ToolsAipThirdSiteUpdateV2Request;
}

export class ToolsAipThirdSiteUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAipThirdSiteUpdatePost(request: ToolsAipThirdSiteUpdateV2ApiOpenApi2ToolsAipThirdSiteUpdatePostRequest): Promise<ToolsAipThirdSiteUpdateV2Response> {
    const response = await this.openApi2ToolsAipThirdSiteUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAipThirdSiteUpdatePostWithHttpInfo(request: ToolsAipThirdSiteUpdateV2ApiOpenApi2ToolsAipThirdSiteUpdatePostRequest): Promise<ApiResponse<ToolsAipThirdSiteUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAipThirdSiteUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/aip_third_site/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAipThirdSiteUpdateV2Request
    });
  }
}


