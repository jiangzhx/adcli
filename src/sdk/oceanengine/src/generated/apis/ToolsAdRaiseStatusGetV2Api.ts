// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsAdRaiseStatusGetV2Response } from "../models";


export class ToolsAdRaiseStatusGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAdRaiseStatusGetGet(adIds: number[], advertiserId: number): Promise<ToolsAdRaiseStatusGetV2Response> {
    const response = await this.openApi2ToolsAdRaiseStatusGetGetWithHttpInfo(adIds, advertiserId);
    return response.data;
  }

  async openApi2ToolsAdRaiseStatusGetGetWithHttpInfo(adIds: number[], advertiserId: number): Promise<ApiResponse<ToolsAdRaiseStatusGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAdRaiseStatusGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/ad_raise_status/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_ids", value: adIds, collectionFormat: "multi" }
      ]
    });
  }
}


