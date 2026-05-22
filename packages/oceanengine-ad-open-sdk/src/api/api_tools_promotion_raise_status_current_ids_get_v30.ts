// Generated from oceanengine/ad_open_sdk_go api/api_tools_promotion_raise_status_current_ids_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPromotionRaiseStatusCurrentIdsGetV30Response } from "../models/index";


export interface ToolsPromotionRaiseStatusCurrentIdsGetV30ApiOpenApiV30ToolsPromotionRaiseStatusCurrentIdsGetGetRequest {
  advertiserId: number | string;
  promotionIds: number | string[];
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
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsPromotionRaiseStatusCurrentIdsGetGet");
    }

    if (request.promotionIds == null) {
      throw new ApiException("Missing the required parameter 'promotionIds' when calling openApiV30ToolsPromotionRaiseStatusCurrentIdsGetGet");
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


