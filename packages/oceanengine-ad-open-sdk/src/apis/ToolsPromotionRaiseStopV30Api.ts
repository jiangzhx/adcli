// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPromotionRaiseStopV30Request, ToolsPromotionRaiseStopV30Response } from "../models";


export class ToolsPromotionRaiseStopV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPromotionRaiseStopPost(toolsPromotionRaiseStopV30Request: ToolsPromotionRaiseStopV30Request): Promise<ToolsPromotionRaiseStopV30Response> {
    const response = await this.openApiV30ToolsPromotionRaiseStopPostWithHttpInfo(toolsPromotionRaiseStopV30Request);
    return response.data;
  }

  async openApiV30ToolsPromotionRaiseStopPostWithHttpInfo(toolsPromotionRaiseStopV30Request: ToolsPromotionRaiseStopV30Request): Promise<ApiResponse<ToolsPromotionRaiseStopV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPromotionRaiseStopV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/promotion_raise/stop/",
      queryParams: [

      ],
      body: toolsPromotionRaiseStopV30Request
    });
  }
}


