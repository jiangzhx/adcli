// Generated from oceanengine/ad_open_sdk_go api/api_tools_promotion_raise_set_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPromotionRaiseSetV30Request, ToolsPromotionRaiseSetV30Response } from "../models/index";


export interface ToolsPromotionRaiseSetV30ApiOpenApiV30ToolsPromotionRaiseSetPostRequest {
  toolsPromotionRaiseSetV30Request?: ToolsPromotionRaiseSetV30Request;
}

export class ToolsPromotionRaiseSetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPromotionRaiseSetPost(request: ToolsPromotionRaiseSetV30ApiOpenApiV30ToolsPromotionRaiseSetPostRequest): Promise<ToolsPromotionRaiseSetV30Response> {
    const response = await this.openApiV30ToolsPromotionRaiseSetPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPromotionRaiseSetPostWithHttpInfo(request: ToolsPromotionRaiseSetV30ApiOpenApiV30ToolsPromotionRaiseSetPostRequest): Promise<ApiResponse<ToolsPromotionRaiseSetV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPromotionRaiseSetV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/promotion_raise/set/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsPromotionRaiseSetV30Request
    });
  }
}


