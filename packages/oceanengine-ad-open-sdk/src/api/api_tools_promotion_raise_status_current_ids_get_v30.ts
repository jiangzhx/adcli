// Generated from oceanengine/ad_open_sdk_go api/api_tools_promotion_raise_status_current_ids_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPromotionRaiseStatusCurrentIdsGetV30Response } from "../models/index";


export interface ToolsPromotionRaiseStatusCurrentIdsGetV30ApiOpenApiV30ToolsPromotionRaiseStatusCurrentIdsGetGetRequest {
  advertiserId: number | string;
  promotionIds: (number | string)[];
}

export class ToolsPromotionRaiseStatusCurrentIdsGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPromotionRaiseStatusCurrentIdsGetGet(request: ToolsPromotionRaiseStatusCurrentIdsGetV30ApiOpenApiV30ToolsPromotionRaiseStatusCurrentIdsGetGetRequest): Promise<ToolsPromotionRaiseStatusCurrentIdsGetV30Response> {
    const response = await this.openApiV30ToolsPromotionRaiseStatusCurrentIdsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPromotionRaiseStatusCurrentIdsGetGetWithHttpInfo(request: ToolsPromotionRaiseStatusCurrentIdsGetV30ApiOpenApiV30ToolsPromotionRaiseStatusCurrentIdsGetGetRequest): Promise<ApiResponse<ToolsPromotionRaiseStatusCurrentIdsGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.promotionIds == null) {
      throw new ApiException("promotionIds is required and must be specified");
    }

    if (request.promotionIds != null && request.promotionIds.length < 1) {
      throw new ApiException("promotionIds must have at least 1 elements");
    }

    if (request.promotionIds != null && request.promotionIds.length > 100) {
      throw new ApiException("promotionIds must have less than 100 elements");
    }
    return this.apiClient.requestWithHttpInfo<ToolsPromotionRaiseStatusCurrentIdsGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/promotion_raise_status_current_ids/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "promotion_ids", value: request.promotionIds }
      ]
    });
  }
}


