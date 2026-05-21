// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsPrivativeWordPromotionUpdateV30Request, ToolsPrivativeWordPromotionUpdateV30Response } from "../models";


export class ToolsPrivativeWordPromotionUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPrivativeWordPromotionUpdatePost(toolsPrivativeWordPromotionUpdateV30Request: ToolsPrivativeWordPromotionUpdateV30Request): Promise<ToolsPrivativeWordPromotionUpdateV30Response> {
    const response = await this.openApiV30ToolsPrivativeWordPromotionUpdatePostWithHttpInfo(toolsPrivativeWordPromotionUpdateV30Request);
    return response.data;
  }

  async openApiV30ToolsPrivativeWordPromotionUpdatePostWithHttpInfo(toolsPrivativeWordPromotionUpdateV30Request: ToolsPrivativeWordPromotionUpdateV30Request): Promise<ApiResponse<ToolsPrivativeWordPromotionUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordPromotionUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/privative_word/promotion/update/",
      queryParams: [

      ],
      body: toolsPrivativeWordPromotionUpdateV30Request
    });
  }
}


