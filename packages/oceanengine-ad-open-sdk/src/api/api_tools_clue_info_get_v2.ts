// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_info_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueInfoGetV2Response } from "../models/index";


export interface ToolsClueInfoGetV2ApiOpenApi2ToolsClueInfoGetGetRequest {
  advertiserIds: (number | string)[];
  clueIds: (number | string)[];
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
      throw new ApiException("advertiserIds is required and must be specified");
    }

    if (request.advertiserIds != null && request.advertiserIds.length < 1) {
      throw new ApiException("advertiserIds must have at least 1 elements");
    }

    if (request.advertiserIds != null && request.advertiserIds.length > 100) {
      throw new ApiException("advertiserIds must have less than 100 elements");
    }

    if (request.clueIds == null) {
      throw new ApiException("clueIds is required and must be specified");
    }

    if (request.clueIds != null && request.clueIds.length < 1) {
      throw new ApiException("clueIds must have at least 1 elements");
    }

    if (request.clueIds != null && request.clueIds.length > 100) {
      throw new ApiException("clueIds must have less than 100 elements");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueInfoGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue_info/get/",
      queryParams: [
        { name: "advertiser_ids", value: request.advertiserIds },
        { name: "clue_ids", value: request.clueIds }
      ]
    });
  }
}


