// Generated from oceanengine/ad_open_sdk_go api/api_tools_promotion_raise_version_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPromotionRaiseVersionGetV30Response } from "../models/index";


export interface ToolsPromotionRaiseVersionGetV30ApiOpenApiV30ToolsPromotionRaiseVersionGetGetRequest {
  advertiserId: number | string;
  promotionId: number | string;
  page?: number;
  pageSize?: number;
}

export class ToolsPromotionRaiseVersionGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPromotionRaiseVersionGetGet(request: ToolsPromotionRaiseVersionGetV30ApiOpenApiV30ToolsPromotionRaiseVersionGetGetRequest): Promise<ToolsPromotionRaiseVersionGetV30Response> {
    const response = await this.openApiV30ToolsPromotionRaiseVersionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPromotionRaiseVersionGetGetWithHttpInfo(request: ToolsPromotionRaiseVersionGetV30ApiOpenApiV30ToolsPromotionRaiseVersionGetGetRequest): Promise<ApiResponse<ToolsPromotionRaiseVersionGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsPromotionRaiseVersionGetGet");
    }

    if (request.promotionId == null) {
      throw new ApiException("Missing the required parameter 'promotionId' when calling openApiV30ToolsPromotionRaiseVersionGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsPromotionRaiseVersionGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/promotion_raise_version/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "promotion_id", value: request.promotionId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


