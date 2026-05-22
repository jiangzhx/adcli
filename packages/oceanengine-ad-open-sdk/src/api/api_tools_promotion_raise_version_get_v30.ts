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
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.promotionId == null) {
      throw new ApiException("promotionId is required and must be specified");
    }

    if (request.promotionId != null && Number(request.promotionId) < 1) {
      throw new ApiException("promotionId must be greater than 1");
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


