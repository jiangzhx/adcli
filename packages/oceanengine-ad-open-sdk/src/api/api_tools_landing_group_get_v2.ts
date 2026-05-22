// Generated from oceanengine/ad_open_sdk_go api/api_tools_landing_group_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsLandingGroupGetV2Filtering, ToolsLandingGroupGetV2Response } from "../models/index";


export interface ToolsLandingGroupGetV2ApiOpenApi2ToolsLandingGroupGetGetRequest {
  advertiserId?: number | string;
  filtering?: ToolsLandingGroupGetV2Filtering;
  page?: number;
  pageSize?: number;
}

export class ToolsLandingGroupGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsLandingGroupGetGet(request: ToolsLandingGroupGetV2ApiOpenApi2ToolsLandingGroupGetGetRequest): Promise<ToolsLandingGroupGetV2Response> {
    const response = await this.openApi2ToolsLandingGroupGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsLandingGroupGetGetWithHttpInfo(request: ToolsLandingGroupGetV2ApiOpenApi2ToolsLandingGroupGetGetRequest): Promise<ApiResponse<ToolsLandingGroupGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsLandingGroupGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/landing_group/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


