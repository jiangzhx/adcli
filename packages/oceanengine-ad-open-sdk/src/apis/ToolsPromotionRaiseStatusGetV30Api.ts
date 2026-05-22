// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPromotionRaiseStatusGetV30Response } from "../models";


export interface OpenApiV30ToolsPromotionRaiseStatusGetGetRequest {
  advertiserId: number;
  promotionIds: number[];
}

export class ToolsPromotionRaiseStatusGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPromotionRaiseStatusGetGet(request: OpenApiV30ToolsPromotionRaiseStatusGetGetRequest): Promise<ToolsPromotionRaiseStatusGetV30Response> {
    const response = await this.openApiV30ToolsPromotionRaiseStatusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPromotionRaiseStatusGetGetWithHttpInfo(request: OpenApiV30ToolsPromotionRaiseStatusGetGetRequest): Promise<ApiResponse<ToolsPromotionRaiseStatusGetV30Response>> {
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


