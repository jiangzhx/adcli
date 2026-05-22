// Generated from oceanengine/ad_open_sdk_go api/api_tools_promotion_raise_status_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPromotionRaiseStatusGetV30Response } from "../models/index";


export interface ToolsPromotionRaiseStatusGetV30ApiOpenApiV30ToolsPromotionRaiseStatusGetGetRequest {
  advertiserId: number | string;
  promotionIds: number | string[];
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
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsPromotionRaiseStatusGetGet");
    }

    if (request.promotionIds == null) {
      throw new ApiException("Missing the required parameter 'promotionIds' when calling openApiV30ToolsPromotionRaiseStatusGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsPromotionRaiseStatusGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/promotion_raise_status/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "promotion_ids", value: request.promotionIds, collectionFormat: "csv" }
      ]
    });
  }
}


