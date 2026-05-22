// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPromotionRaiseSetV30Request, ToolsPromotionRaiseSetV30Response } from "../models";


export class ToolsPromotionRaiseSetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPromotionRaiseSetPost(request: ToolsPromotionRaiseSetV30Request): Promise<ToolsPromotionRaiseSetV30Response> {
    const response = await this.openApiV30ToolsPromotionRaiseSetPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPromotionRaiseSetPostWithHttpInfo(request: ToolsPromotionRaiseSetV30Request): Promise<ApiResponse<ToolsPromotionRaiseSetV30Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsPromotionRaiseSetV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/promotion_raise/set/",
      queryParams: [

      ],
      body: request
    });
  }
}


