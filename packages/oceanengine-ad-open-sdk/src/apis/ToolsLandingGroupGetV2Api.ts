// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsLandingGroupGetV2Filtering, ToolsLandingGroupGetV2Response } from "../models";


export interface OpenApi2ToolsLandingGroupGetGetRequest {
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

  async openApi2ToolsLandingGroupGetGet(request: OpenApi2ToolsLandingGroupGetGetRequest): Promise<ToolsLandingGroupGetV2Response> {
    const response = await this.openApi2ToolsLandingGroupGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsLandingGroupGetGetWithHttpInfo(request: OpenApi2ToolsLandingGroupGetGetRequest): Promise<ApiResponse<ToolsLandingGroupGetV2Response>> {

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


