// Generated from oceanengine/ad_open_sdk_go api/api_tools_keywords_project_info_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsKeywordsProjectInfoGetV30Response } from "../models/index";


export interface ToolsKeywordsProjectInfoGetV30ApiOpenApiV30ToolsKeywordsProjectInfoGetGetRequest {
  advertiserId: number | string;
  promotionWordId: string;
}

export class ToolsKeywordsProjectInfoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsKeywordsProjectInfoGetGet(request: ToolsKeywordsProjectInfoGetV30ApiOpenApiV30ToolsKeywordsProjectInfoGetGetRequest): Promise<ToolsKeywordsProjectInfoGetV30Response> {
    const response = await this.openApiV30ToolsKeywordsProjectInfoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsKeywordsProjectInfoGetGetWithHttpInfo(request: ToolsKeywordsProjectInfoGetV30ApiOpenApiV30ToolsKeywordsProjectInfoGetGetRequest): Promise<ApiResponse<ToolsKeywordsProjectInfoGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.promotionWordId == null) {
      throw new ApiException("promotionWordId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsKeywordsProjectInfoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/keywords_project_info/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "promotion_word_id", value: request.promotionWordId }
      ]
    });
  }
}


