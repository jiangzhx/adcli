// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsCreativeWordSelectV2Response } from "../models";


export interface OpenApi2ToolsCreativeWordSelectGetRequest {
  advertiserId: number;
  creativeWordIds?: number[];
}

export class ToolsCreativeWordSelectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsCreativeWordSelectGet(request: OpenApi2ToolsCreativeWordSelectGetRequest): Promise<ToolsCreativeWordSelectV2Response> {
    const response = await this.openApi2ToolsCreativeWordSelectGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsCreativeWordSelectGetWithHttpInfo(request: OpenApi2ToolsCreativeWordSelectGetRequest): Promise<ApiResponse<ToolsCreativeWordSelectV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsCreativeWordSelectGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsCreativeWordSelectV2Response>({
      method: "GET",
      path: "/open_api/2/tools/creative_word/select/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "creative_word_ids", value: request.creativeWordIds, collectionFormat: "csv" }
      ]
    });
  }
}


