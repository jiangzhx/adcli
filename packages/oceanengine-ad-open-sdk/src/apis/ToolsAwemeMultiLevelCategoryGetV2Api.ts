// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAwemeMultiLevelCategoryGetV2Behaviors, ToolsAwemeMultiLevelCategoryGetV2Response } from "../models";


export interface OpenApi2ToolsAwemeMultiLevelCategoryGetGetRequest {
  advertiserId?: number;
  behaviors?: ToolsAwemeMultiLevelCategoryGetV2Behaviors[];
}

export class ToolsAwemeMultiLevelCategoryGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAwemeMultiLevelCategoryGetGet(request: OpenApi2ToolsAwemeMultiLevelCategoryGetGetRequest): Promise<ToolsAwemeMultiLevelCategoryGetV2Response> {
    const response = await this.openApi2ToolsAwemeMultiLevelCategoryGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAwemeMultiLevelCategoryGetGetWithHttpInfo(request: OpenApi2ToolsAwemeMultiLevelCategoryGetGetRequest): Promise<ApiResponse<ToolsAwemeMultiLevelCategoryGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAwemeMultiLevelCategoryGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/aweme_multi_level_category/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "behaviors", value: request.behaviors, collectionFormat: "csv" }
      ]
    });
  }
}


