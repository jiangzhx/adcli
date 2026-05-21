// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsSiteFormsListV2Response } from "../models";


export class ToolsSiteFormsListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteFormsListGet(advertiserId: number, siteId: number): Promise<ToolsSiteFormsListV2Response> {
    const response = await this.openApi2ToolsSiteFormsListGetWithHttpInfo(advertiserId, siteId);
    return response.data;
  }

  async openApi2ToolsSiteFormsListGetWithHttpInfo(advertiserId: number, siteId: number): Promise<ApiResponse<ToolsSiteFormsListV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsSiteFormsListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/site/forms/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "site_id", value: siteId }
      ]
    });
  }
}


