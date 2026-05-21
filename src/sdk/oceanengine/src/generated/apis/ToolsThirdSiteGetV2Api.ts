// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsThirdSiteGetV2Filtering, ToolsThirdSiteGetV2Response } from "../models";


export class ToolsThirdSiteGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsThirdSiteGetGet(advertiserId: number, filtering: ToolsThirdSiteGetV2Filtering, page: number, pageSize: number): Promise<ToolsThirdSiteGetV2Response> {
    const response = await this.openApi2ToolsThirdSiteGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApi2ToolsThirdSiteGetGetWithHttpInfo(advertiserId: number, filtering: ToolsThirdSiteGetV2Filtering, page: number, pageSize: number): Promise<ApiResponse<ToolsThirdSiteGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsThirdSiteGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/third_site/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


