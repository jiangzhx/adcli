// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsPrivativeWordPromotionAddV30Request, ToolsPrivativeWordPromotionAddV30Response } from "../models";


export class ToolsPrivativeWordPromotionAddV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPrivativeWordPromotionAddPost(toolsPrivativeWordPromotionAddV30Request: ToolsPrivativeWordPromotionAddV30Request): Promise<ToolsPrivativeWordPromotionAddV30Response> {
    const response = await this.openApiV30ToolsPrivativeWordPromotionAddPostWithHttpInfo(toolsPrivativeWordPromotionAddV30Request);
    return response.data;
  }

  async openApiV30ToolsPrivativeWordPromotionAddPostWithHttpInfo(toolsPrivativeWordPromotionAddV30Request: ToolsPrivativeWordPromotionAddV30Request): Promise<ApiResponse<ToolsPrivativeWordPromotionAddV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordPromotionAddV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/privative_word/promotion/add/",
      queryParams: [

      ],
      body: toolsPrivativeWordPromotionAddV30Request
    });
  }
}


