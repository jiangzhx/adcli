// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsKeywordsProjectInfoGetV30Response } from "../models";


export class ToolsKeywordsProjectInfoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsKeywordsProjectInfoGetGet(advertiserId: number, promotionWordId: string): Promise<ToolsKeywordsProjectInfoGetV30Response> {
    const response = await this.openApiV30ToolsKeywordsProjectInfoGetGetWithHttpInfo(advertiserId, promotionWordId);
    return response.data;
  }

  async openApiV30ToolsKeywordsProjectInfoGetGetWithHttpInfo(advertiserId: number, promotionWordId: string): Promise<ApiResponse<ToolsKeywordsProjectInfoGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsKeywordsProjectInfoGetGet");
    }

    if (promotionWordId == null) {
      throw new ApiException("Missing the required parameter 'promotionWordId' when calling openApiV30ToolsKeywordsProjectInfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsKeywordsProjectInfoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/keywords_project_info/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "promotion_word_id", value: promotionWordId }
      ]
    });
  }
}


