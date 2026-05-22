// Generated from oceanengine/ad_open_sdk_go api/api_tools_third_site_preview_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsThirdSitePreviewV2Response } from "../models/index";


export interface ToolsThirdSitePreviewV2ApiOpenApi2ToolsThirdSitePreviewGetRequest {
  advertiserId: number | string;
  siteId: number | string;
}

export class ToolsThirdSitePreviewV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsThirdSitePreviewGet(request: ToolsThirdSitePreviewV2ApiOpenApi2ToolsThirdSitePreviewGetRequest): Promise<ToolsThirdSitePreviewV2Response> {
    const response = await this.openApi2ToolsThirdSitePreviewGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsThirdSitePreviewGetWithHttpInfo(request: ToolsThirdSitePreviewV2ApiOpenApi2ToolsThirdSitePreviewGetRequest): Promise<ApiResponse<ToolsThirdSitePreviewV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsThirdSitePreviewGet");
    }

    if (request.siteId == null) {
      throw new ApiException("Missing the required parameter 'siteId' when calling openApi2ToolsThirdSitePreviewGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsThirdSitePreviewV2Response>({
      method: "GET",
      path: "/open_api/2/tools/third_site/preview/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "site_id", value: request.siteId }
      ]
    });
  }
}


