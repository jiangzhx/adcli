// Generated from oceanengine/ad_open_sdk_go api/api_tools_aweme_multi_level_category_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAwemeMultiLevelCategoryGetV2Behaviors, ToolsAwemeMultiLevelCategoryGetV2Response } from "../models/index";


export interface ToolsAwemeMultiLevelCategoryGetV2ApiOpenApi2ToolsAwemeMultiLevelCategoryGetGetRequest {
  advertiserId?: number | string;
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

  async openApi2ToolsAwemeMultiLevelCategoryGetGet(request: ToolsAwemeMultiLevelCategoryGetV2ApiOpenApi2ToolsAwemeMultiLevelCategoryGetGetRequest): Promise<ToolsAwemeMultiLevelCategoryGetV2Response> {
    const response = await this.openApi2ToolsAwemeMultiLevelCategoryGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAwemeMultiLevelCategoryGetGetWithHttpInfo(request: ToolsAwemeMultiLevelCategoryGetV2ApiOpenApi2ToolsAwemeMultiLevelCategoryGetGetRequest): Promise<ApiResponse<ToolsAwemeMultiLevelCategoryGetV2Response>> {

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


