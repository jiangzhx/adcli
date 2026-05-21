// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsPrivativeWordGetV2Filtering, ToolsPrivativeWordGetV2Response } from "../models";


export class ToolsPrivativeWordGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPrivativeWordGetGet(advertiserId: number, filtering: ToolsPrivativeWordGetV2Filtering): Promise<ToolsPrivativeWordGetV2Response> {
    const response = await this.openApi2ToolsPrivativeWordGetGetWithHttpInfo(advertiserId, filtering);
    return response.data;
  }

  async openApi2ToolsPrivativeWordGetGetWithHttpInfo(advertiserId: number, filtering: ToolsPrivativeWordGetV2Filtering): Promise<ApiResponse<ToolsPrivativeWordGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/privative_word/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


