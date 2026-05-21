// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsClueInfoGetV2Response } from "../models";


export class ToolsClueInfoGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueInfoGetGet(advertiserIds: number[], clueIds: number[]): Promise<ToolsClueInfoGetV2Response> {
    const response = await this.openApi2ToolsClueInfoGetGetWithHttpInfo(advertiserIds, clueIds);
    return response.data;
  }

  async openApi2ToolsClueInfoGetGetWithHttpInfo(advertiserIds: number[], clueIds: number[]): Promise<ApiResponse<ToolsClueInfoGetV2Response>> {
    if (advertiserIds == null) {
      throw new ApiException("Missing the required parameter 'advertiserIds' when calling openApi2ToolsClueInfoGetGet");
    }

    if (clueIds == null) {
      throw new ApiException("Missing the required parameter 'clueIds' when calling openApi2ToolsClueInfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueInfoGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue_info/get/",
      queryParams: [
        { name: "advertiser_ids", value: advertiserIds, collectionFormat: "csv" },
        { name: "clue_ids", value: clueIds, collectionFormat: "csv" }
      ]
    });
  }
}


