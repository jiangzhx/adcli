// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsAwemeMultiLevelCategoryGetV2Behaviors, ToolsAwemeMultiLevelCategoryGetV2Response } from "../models";


export class ToolsAwemeMultiLevelCategoryGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAwemeMultiLevelCategoryGetGet(advertiserId: number, behaviors: ToolsAwemeMultiLevelCategoryGetV2Behaviors[]): Promise<ToolsAwemeMultiLevelCategoryGetV2Response> {
    const response = await this.openApi2ToolsAwemeMultiLevelCategoryGetGetWithHttpInfo(advertiserId, behaviors);
    return response.data;
  }

  async openApi2ToolsAwemeMultiLevelCategoryGetGetWithHttpInfo(advertiserId: number, behaviors: ToolsAwemeMultiLevelCategoryGetV2Behaviors[]): Promise<ApiResponse<ToolsAwemeMultiLevelCategoryGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAwemeMultiLevelCategoryGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/aweme_multi_level_category/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "behaviors", value: behaviors, collectionFormat: "multi" }
      ]
    });
  }
}


