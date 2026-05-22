// Generated from oceanengine/ad_open_sdk_go api/api_tools_creative_word_select_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsCreativeWordSelectV2Response } from "../models/index";


export interface ToolsCreativeWordSelectV2ApiOpenApi2ToolsCreativeWordSelectGetRequest {
  advertiserId: number | string;
  creativeWordIds?: number | string[];
}

export class ToolsCreativeWordSelectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsCreativeWordSelectGet(request: ToolsCreativeWordSelectV2ApiOpenApi2ToolsCreativeWordSelectGetRequest): Promise<ToolsCreativeWordSelectV2Response> {
    const response = await this.openApi2ToolsCreativeWordSelectGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsCreativeWordSelectGetWithHttpInfo(request: ToolsCreativeWordSelectV2ApiOpenApi2ToolsCreativeWordSelectGetRequest): Promise<ApiResponse<ToolsCreativeWordSelectV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsCreativeWordSelectGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsCreativeWordSelectV2Response>({
      method: "GET",
      path: "/open_api/2/tools/creative_word/select/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "creative_word_ids", value: request.creativeWordIds }
      ]
    });
  }
}


