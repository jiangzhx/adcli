// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsSiteReadV2Response } from "../models";


export class ToolsSiteReadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteReadGet(xOrangeCaller: string, advertiserId: string, siteId: string): Promise<ToolsSiteReadV2Response> {
    const response = await this.openApi2ToolsSiteReadGetWithHttpInfo(xOrangeCaller, advertiserId, siteId);
    return response.data;
  }

  async openApi2ToolsSiteReadGetWithHttpInfo(xOrangeCaller: string, advertiserId: string, siteId: string): Promise<ApiResponse<ToolsSiteReadV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsSiteReadV2Response>({
      method: "GET",
      path: "/open_api/2/tools/site/read/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "site_id", value: siteId }
      ]
    });
  }
}


