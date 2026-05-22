// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPromotionRaiseStatusCurrentIdsGetV30Response } from "../models";


export interface OpenApiV30ToolsPromotionRaiseStatusCurrentIdsGetGetRequest {
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

  async openApiV30ToolsPromotionRaiseStatusCurrentIdsGetGet(request: OpenApiV30ToolsPromotionRaiseStatusCurrentIdsGetGetRequest): Promise<ToolsPromotionRaiseStatusCurrentIdsGetV30Response> {
    const response = await this.openApiV30ToolsPromotionRaiseStatusCurrentIdsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPromotionRaiseStatusCurrentIdsGetGetWithHttpInfo(request: OpenApiV30ToolsPromotionRaiseStatusCurrentIdsGetGetRequest): Promise<ApiResponse<ToolsPromotionRaiseStatusCurrentIdsGetV30Response>> {
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
        { name: "promotion_ids", value: request.promotionIds, collectionFormat: "csv" }
      ]
    });
  }
}


