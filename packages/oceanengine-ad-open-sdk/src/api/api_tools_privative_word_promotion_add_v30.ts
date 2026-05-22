// Generated from oceanengine/ad_open_sdk_go api/api_tools_privative_word_promotion_add_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPrivativeWordPromotionAddV30Request, ToolsPrivativeWordPromotionAddV30Response } from "../models/index";


export interface ToolsPrivativeWordPromotionAddV30ApiOpenApiV30ToolsPrivativeWordPromotionAddPostRequest {
  toolsPrivativeWordPromotionAddV30Request?: ToolsPrivativeWordPromotionAddV30Request;
}

export class ToolsPrivativeWordPromotionAddV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPrivativeWordPromotionAddPost(request: ToolsPrivativeWordPromotionAddV30ApiOpenApiV30ToolsPrivativeWordPromotionAddPostRequest): Promise<ToolsPrivativeWordPromotionAddV30Response> {
    const response = await this.openApiV30ToolsPrivativeWordPromotionAddPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPrivativeWordPromotionAddPostWithHttpInfo(request: ToolsPrivativeWordPromotionAddV30ApiOpenApiV30ToolsPrivativeWordPromotionAddPostRequest): Promise<ApiResponse<ToolsPrivativeWordPromotionAddV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordPromotionAddV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/privative_word/promotion/add/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsPrivativeWordPromotionAddV30Request
    });
  }
}


