// Generated from oceanengine/ad_open_sdk_go api/api_tools_promotion_raise_status_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPromotionRaiseStatusGetV30Response } from "../models/index";


export interface ToolsPromotionRaiseStatusGetV30ApiOpenApiV30ToolsPromotionRaiseStatusGetGetRequest {
  advertiserId: number | string;
  promotionIds: (number | string)[];
}

export class ToolsPromotionRaiseStatusGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPromotionRaiseStatusGetGet(request: ToolsPromotionRaiseStatusGetV30ApiOpenApiV30ToolsPromotionRaiseStatusGetGetRequest): Promise<ToolsPromotionRaiseStatusGetV30Response> {
    const response = await this.openApiV30ToolsPromotionRaiseStatusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPromotionRaiseStatusGetGetWithHttpInfo(request: ToolsPromotionRaiseStatusGetV30ApiOpenApiV30ToolsPromotionRaiseStatusGetGetRequest): Promise<ApiResponse<ToolsPromotionRaiseStatusGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.promotionIds == null) {
      throw new ApiException("promotionIds is required and must be specified");
    }

    if (request.promotionIds != null && request.promotionIds.length < 1) {
      throw new ApiException("promotionIds must have at least 1 elements");
    }

    if (request.promotionIds != null && request.promotionIds.length > 1) {
      throw new ApiException("promotionIds must have less than 1 elements");
    }
    return this.apiClient.requestWithHttpInfo<ToolsPromotionRaiseStatusGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/promotion_raise_status/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "promotion_ids", value: request.promotionIds }
      ]
    });
  }
}


