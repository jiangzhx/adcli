// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_info_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueInfoGetV2Response } from "../models/index";


export interface ToolsClueInfoGetV2ApiOpenApi2ToolsClueInfoGetGetRequest {
  advertiserIds: number | string[];
  clueIds: number | string[];
}

export class ToolsClueInfoGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueInfoGetGet(request: ToolsClueInfoGetV2ApiOpenApi2ToolsClueInfoGetGetRequest): Promise<ToolsClueInfoGetV2Response> {
    const response = await this.openApi2ToolsClueInfoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueInfoGetGetWithHttpInfo(request: ToolsClueInfoGetV2ApiOpenApi2ToolsClueInfoGetGetRequest): Promise<ApiResponse<ToolsClueInfoGetV2Response>> {
    if (request.advertiserIds == null) {
      throw new ApiException("Missing the required parameter 'advertiserIds' when calling openApi2ToolsClueInfoGetGet");
    }

    if (request.clueIds == null) {
      throw new ApiException("Missing the required parameter 'clueIds' when calling openApi2ToolsClueInfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueInfoGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue_info/get/",
      queryParams: [
        { name: "advertiser_ids", value: request.advertiserIds, collectionFormat: "csv" },
        { name: "clue_ids", value: request.clueIds, collectionFormat: "csv" }
      ]
    });
  }
}


