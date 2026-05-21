// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsAipThirdSiteGetV2Response } from "../models";


export class ToolsAipThirdSiteGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAipThirdSiteGetGet(advertiserId: number, siteId: number): Promise<ToolsAipThirdSiteGetV2Response> {
    const response = await this.openApi2ToolsAipThirdSiteGetGetWithHttpInfo(advertiserId, siteId);
    return response.data;
  }

  async openApi2ToolsAipThirdSiteGetGetWithHttpInfo(advertiserId: number, siteId: number): Promise<ApiResponse<ToolsAipThirdSiteGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsAipThirdSiteGetGet");
    }

    if (siteId == null) {
      throw new ApiException("Missing the required parameter 'siteId' when calling openApi2ToolsAipThirdSiteGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAipThirdSiteGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/aip_third_site/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "site_id", value: siteId }
      ]
    });
  }
}


