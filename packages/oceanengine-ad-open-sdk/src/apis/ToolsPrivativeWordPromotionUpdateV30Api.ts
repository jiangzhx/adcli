// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPrivativeWordPromotionUpdateV30Request, ToolsPrivativeWordPromotionUpdateV30Response } from "../models";


export interface OpenApiV30ToolsPrivativeWordPromotionUpdatePostRequest {
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

  async openApiV30ToolsPrivativeWordPromotionUpdatePost(request: OpenApiV30ToolsPrivativeWordPromotionUpdatePostRequest): Promise<ToolsPrivativeWordPromotionUpdateV30Response> {
    const response = await this.openApiV30ToolsPrivativeWordPromotionUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPrivativeWordPromotionUpdatePostWithHttpInfo(request: OpenApiV30ToolsPrivativeWordPromotionUpdatePostRequest): Promise<ApiResponse<ToolsPrivativeWordPromotionUpdateV30Response>> {

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


