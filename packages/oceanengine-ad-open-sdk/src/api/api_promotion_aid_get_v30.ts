// Generated from oceanengine/ad_open_sdk_go api/api_promotion_aid_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PromotionAidGetV30Response } from "../models/index";


export interface PromotionAidGetV30ApiOpenApiV30PromotionAidGetGetRequest {
  advertiserId: number | string;
  promotionIds: number | string[];
}

export class PromotionAidGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionAidGetGet(request: PromotionAidGetV30ApiOpenApiV30PromotionAidGetGetRequest): Promise<PromotionAidGetV30Response> {
    const response = await this.openApiV30PromotionAidGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionAidGetGetWithHttpInfo(request: PromotionAidGetV30ApiOpenApiV30PromotionAidGetGetRequest): Promise<ApiResponse<PromotionAidGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30PromotionAidGetGet");
    }

    if (request.promotionIds == null) {
      throw new ApiException("Missing the required parameter 'promotionIds' when calling openApiV30PromotionAidGetGet");
    }
    return this.apiClient.requestWithHttpInfo<PromotionAidGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/promotion/aid/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "promotion_ids", value: request.promotionIds }
      ]
    });
  }
}


