// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionCostProtectStatusGetV30Response } from "../models";


export interface OpenApiV30PromotionCostProtectStatusGetGetRequest {
  advertiserId: number | string;
  promotionIds: number | string[];
}

export class PromotionCostProtectStatusGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionCostProtectStatusGetGet(request: OpenApiV30PromotionCostProtectStatusGetGetRequest): Promise<PromotionCostProtectStatusGetV30Response> {
    const response = await this.openApiV30PromotionCostProtectStatusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionCostProtectStatusGetGetWithHttpInfo(request: OpenApiV30PromotionCostProtectStatusGetGetRequest): Promise<ApiResponse<PromotionCostProtectStatusGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30PromotionCostProtectStatusGetGet");
    }

    if (request.promotionIds == null) {
      throw new ApiException("Missing the required parameter 'promotionIds' when calling openApiV30PromotionCostProtectStatusGetGet");
    }
    return this.apiClient.requestWithHttpInfo<PromotionCostProtectStatusGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/promotion/cost_protect_status/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "promotion_ids", value: request.promotionIds, collectionFormat: "csv" }
      ]
    });
  }
}


