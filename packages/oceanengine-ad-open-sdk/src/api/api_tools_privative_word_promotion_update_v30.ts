// Generated from oceanengine/ad_open_sdk_go api/api_tools_privative_word_promotion_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPrivativeWordPromotionUpdateV30Request, ToolsPrivativeWordPromotionUpdateV30Response } from "../models/index";


export interface ToolsPrivativeWordPromotionUpdateV30ApiOpenApiV30ToolsPrivativeWordPromotionUpdatePostRequest {
  toolsPrivativeWordPromotionUpdateV30Request?: ToolsPrivativeWordPromotionUpdateV30Request;
}

export class ToolsPrivativeWordPromotionUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPrivativeWordPromotionUpdatePost(request: ToolsPrivativeWordPromotionUpdateV30ApiOpenApiV30ToolsPrivativeWordPromotionUpdatePostRequest): Promise<ToolsPrivativeWordPromotionUpdateV30Response> {
    const response = await this.openApiV30ToolsPrivativeWordPromotionUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPrivativeWordPromotionUpdatePostWithHttpInfo(request: ToolsPrivativeWordPromotionUpdateV30ApiOpenApiV30ToolsPrivativeWordPromotionUpdatePostRequest): Promise<ApiResponse<ToolsPrivativeWordPromotionUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordPromotionUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/privative_word/promotion/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsPrivativeWordPromotionUpdateV30Request
    });
  }
}


