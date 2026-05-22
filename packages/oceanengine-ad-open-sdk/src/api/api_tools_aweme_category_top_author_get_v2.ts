// Generated from oceanengine/ad_open_sdk_go api/api_tools_aweme_category_top_author_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAwemeCategoryTopAuthorGetV2Behaviors, ToolsAwemeCategoryTopAuthorGetV2Response } from "../models/index";


export interface ToolsAwemeCategoryTopAuthorGetV2ApiOpenApi2ToolsAwemeCategoryTopAuthorGetGetRequest {
  advertiserId?: number | string;
  behaviors?: ToolsAwemeCategoryTopAuthorGetV2Behaviors[];
  categoryId?: number | string;
}

export class ToolsAwemeCategoryTopAuthorGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAwemeCategoryTopAuthorGetGet(request: ToolsAwemeCategoryTopAuthorGetV2ApiOpenApi2ToolsAwemeCategoryTopAuthorGetGetRequest): Promise<ToolsAwemeCategoryTopAuthorGetV2Response> {
    const response = await this.openApi2ToolsAwemeCategoryTopAuthorGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAwemeCategoryTopAuthorGetGetWithHttpInfo(request: ToolsAwemeCategoryTopAuthorGetV2ApiOpenApi2ToolsAwemeCategoryTopAuthorGetGetRequest): Promise<ApiResponse<ToolsAwemeCategoryTopAuthorGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAwemeCategoryTopAuthorGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/aweme_category_top_author/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "behaviors", value: request.behaviors, collectionFormat: "csv" },
        { name: "category_id", value: request.categoryId }
      ]
    });
  }
}


