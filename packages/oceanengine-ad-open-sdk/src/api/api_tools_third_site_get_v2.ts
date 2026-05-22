// Generated from oceanengine/ad_open_sdk_go api/api_tools_third_site_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsThirdSiteGetV2Filtering, ToolsThirdSiteGetV2Response } from "../models/index";


export interface ToolsThirdSiteGetV2ApiOpenApi2ToolsThirdSiteGetGetRequest {
  advertiserId?: number | string;
  filtering?: ToolsThirdSiteGetV2Filtering;
  page?: number;
  pageSize?: number;
}

export class ToolsThirdSiteGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsThirdSiteGetGet(request: ToolsThirdSiteGetV2ApiOpenApi2ToolsThirdSiteGetGetRequest): Promise<ToolsThirdSiteGetV2Response> {
    const response = await this.openApi2ToolsThirdSiteGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsThirdSiteGetGetWithHttpInfo(request: ToolsThirdSiteGetV2ApiOpenApi2ToolsThirdSiteGetGetRequest): Promise<ApiResponse<ToolsThirdSiteGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsThirdSiteGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/third_site/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


