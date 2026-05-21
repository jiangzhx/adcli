// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsLandingGroupGetV2Filtering, ToolsLandingGroupGetV2Response } from "../models";


export class ToolsLandingGroupGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsLandingGroupGetGet(advertiserId: number, filtering: ToolsLandingGroupGetV2Filtering, page: number, pageSize: number): Promise<ToolsLandingGroupGetV2Response> {
    const response = await this.openApi2ToolsLandingGroupGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApi2ToolsLandingGroupGetGetWithHttpInfo(advertiserId: number, filtering: ToolsLandingGroupGetV2Filtering, page: number, pageSize: number): Promise<ApiResponse<ToolsLandingGroupGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsLandingGroupGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/landing_group/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


