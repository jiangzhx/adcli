// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsThirdSitePreviewV2Response } from "../models";


export interface OpenApi2ToolsThirdSitePreviewGetRequest {
  advertiserId: number;
  siteId: number;
}

export class ToolsThirdSitePreviewV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsThirdSitePreviewGet(request: OpenApi2ToolsThirdSitePreviewGetRequest): Promise<ToolsThirdSitePreviewV2Response> {
    const response = await this.openApi2ToolsThirdSitePreviewGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsThirdSitePreviewGetWithHttpInfo(request: OpenApi2ToolsThirdSitePreviewGetRequest): Promise<ApiResponse<ToolsThirdSitePreviewV2Response>> {
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


