// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsCreativeWordSelectV2Response } from "../models";


export class ToolsCreativeWordSelectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsCreativeWordSelectGet(advertiserId: number, creativeWordIds: number[]): Promise<ToolsCreativeWordSelectV2Response> {
    const response = await this.openApi2ToolsCreativeWordSelectGetWithHttpInfo(advertiserId, creativeWordIds);
    return response.data;
  }

  async openApi2ToolsCreativeWordSelectGetWithHttpInfo(advertiserId: number, creativeWordIds: number[]): Promise<ApiResponse<ToolsCreativeWordSelectV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsCreativeWordSelectGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsCreativeWordSelectV2Response>({
      method: "GET",
      path: "/open_api/2/tools/creative_word/select/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "creative_word_ids", value: creativeWordIds, collectionFormat: "csv" }
      ]
    });
  }
}


