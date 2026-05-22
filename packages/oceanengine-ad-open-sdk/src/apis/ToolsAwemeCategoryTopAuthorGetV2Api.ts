// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAwemeCategoryTopAuthorGetV2Behaviors, ToolsAwemeCategoryTopAuthorGetV2Response } from "../models";


export class ToolsAwemeCategoryTopAuthorGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAwemeCategoryTopAuthorGetGet(advertiserId: number, behaviors: ToolsAwemeCategoryTopAuthorGetV2Behaviors[], categoryId: number): Promise<ToolsAwemeCategoryTopAuthorGetV2Response> {
    const response = await this.openApi2ToolsAwemeCategoryTopAuthorGetGetWithHttpInfo(advertiserId, behaviors, categoryId);
    return response.data;
  }

  async openApi2ToolsAwemeCategoryTopAuthorGetGetWithHttpInfo(advertiserId: number, behaviors: ToolsAwemeCategoryTopAuthorGetV2Behaviors[], categoryId: number): Promise<ApiResponse<ToolsAwemeCategoryTopAuthorGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAwemeCategoryTopAuthorGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/aweme_category_top_author/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "category_id", value: categoryId },
        { name: "behaviors", value: behaviors, collectionFormat: "multi" }
      ]
    });
  }
}


