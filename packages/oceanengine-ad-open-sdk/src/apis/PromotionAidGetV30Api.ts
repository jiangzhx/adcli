// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionAidGetV30Response } from "../models";


export class PromotionAidGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionAidGetGet(advertiserId: number, promotionIds: number[]): Promise<PromotionAidGetV30Response> {
    const response = await this.openApiV30PromotionAidGetGetWithHttpInfo(advertiserId, promotionIds);
    return response.data;
  }

  async openApiV30PromotionAidGetGetWithHttpInfo(advertiserId: number, promotionIds: number[]): Promise<ApiResponse<PromotionAidGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30PromotionAidGetGet");
    }

    if (promotionIds == null) {
      throw new ApiException("Missing the required parameter 'promotionIds' when calling openApiV30PromotionAidGetGet");
    }
    return this.apiClient.requestWithHttpInfo<PromotionAidGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/promotion/aid/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "promotion_ids", value: promotionIds, collectionFormat: "csv" }
      ]
    });
  }
}


