// Generated from oceanengine/ad_open_sdk_go api/api_promotion_bid_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PromotionBidUpdateV30Request, PromotionBidUpdateV30Response } from "../models/index";


export interface PromotionBidUpdateV30ApiOpenApiV30PromotionBidUpdatePostRequest {
  promotionBidUpdateV30Request?: PromotionBidUpdateV30Request;
}

export class PromotionBidUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionBidUpdatePost(request: PromotionBidUpdateV30ApiOpenApiV30PromotionBidUpdatePostRequest): Promise<PromotionBidUpdateV30Response> {
    const response = await this.openApiV30PromotionBidUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionBidUpdatePostWithHttpInfo(request: PromotionBidUpdateV30ApiOpenApiV30PromotionBidUpdatePostRequest): Promise<ApiResponse<PromotionBidUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionBidUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/bid/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.promotionBidUpdateV30Request
    });
  }
}


