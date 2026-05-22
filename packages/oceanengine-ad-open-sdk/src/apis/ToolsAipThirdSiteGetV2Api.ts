// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAipThirdSiteGetV2Response } from "../models";


export interface OpenApi2ToolsAipThirdSiteGetGetRequest {
  advertiserId: number | string;
  siteId: number | string;
}

export class ToolsAipThirdSiteGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAipThirdSiteGetGet(request: OpenApi2ToolsAipThirdSiteGetGetRequest): Promise<ToolsAipThirdSiteGetV2Response> {
    const response = await this.openApi2ToolsAipThirdSiteGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAipThirdSiteGetGetWithHttpInfo(request: OpenApi2ToolsAipThirdSiteGetGetRequest): Promise<ApiResponse<ToolsAipThirdSiteGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsAipThirdSiteGetGet");
    }

    if (request.siteId == null) {
      throw new ApiException("Missing the required parameter 'siteId' when calling openApi2ToolsAipThirdSiteGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAipThirdSiteGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/aip_third_site/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "site_id", value: request.siteId }
      ]
    });
  }
}


