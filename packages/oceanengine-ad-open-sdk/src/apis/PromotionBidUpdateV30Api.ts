// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionBidUpdateV30Request, PromotionBidUpdateV30Response } from "../models";


export class PromotionBidUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionBidUpdatePost(promotionBidUpdateV30Request: PromotionBidUpdateV30Request): Promise<PromotionBidUpdateV30Response> {
    const response = await this.openApiV30PromotionBidUpdatePostWithHttpInfo(promotionBidUpdateV30Request);
    return response.data;
  }

  async openApiV30PromotionBidUpdatePostWithHttpInfo(promotionBidUpdateV30Request: PromotionBidUpdateV30Request): Promise<ApiResponse<PromotionBidUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionBidUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/bid/update/",
      queryParams: [

      ],
      body: promotionBidUpdateV30Request
    });
  }
}


