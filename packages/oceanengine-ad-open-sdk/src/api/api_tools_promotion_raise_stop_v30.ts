// Generated from oceanengine/ad_open_sdk_go api/api_tools_promotion_raise_stop_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPromotionRaiseStopV30Request, ToolsPromotionRaiseStopV30Response } from "../models/index";


export interface ToolsPromotionRaiseStopV30ApiOpenApiV30ToolsPromotionRaiseStopPostRequest {
  toolsPromotionRaiseStopV30Request?: ToolsPromotionRaiseStopV30Request;
}

export class ToolsPromotionRaiseStopV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPromotionRaiseStopPost(request: ToolsPromotionRaiseStopV30ApiOpenApiV30ToolsPromotionRaiseStopPostRequest): Promise<ToolsPromotionRaiseStopV30Response> {
    const response = await this.openApiV30ToolsPromotionRaiseStopPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPromotionRaiseStopPostWithHttpInfo(request: ToolsPromotionRaiseStopV30ApiOpenApiV30ToolsPromotionRaiseStopPostRequest): Promise<ApiResponse<ToolsPromotionRaiseStopV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPromotionRaiseStopV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/promotion_raise/stop/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsPromotionRaiseStopV30Request
    });
  }
}


