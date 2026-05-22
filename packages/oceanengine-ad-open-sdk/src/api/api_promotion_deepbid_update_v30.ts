// Generated from oceanengine/ad_open_sdk_go api/api_promotion_deepbid_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PromotionDeepbidUpdateV30Request, PromotionDeepbidUpdateV30Response } from "../models/index";


export interface PromotionDeepbidUpdateV30ApiOpenApiV30PromotionDeepbidUpdatePostRequest {
  promotionDeepbidUpdateV30Request?: PromotionDeepbidUpdateV30Request;
}

export class PromotionDeepbidUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionDeepbidUpdatePost(request: PromotionDeepbidUpdateV30ApiOpenApiV30PromotionDeepbidUpdatePostRequest): Promise<PromotionDeepbidUpdateV30Response> {
    const response = await this.openApiV30PromotionDeepbidUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionDeepbidUpdatePostWithHttpInfo(request: PromotionDeepbidUpdateV30ApiOpenApiV30PromotionDeepbidUpdatePostRequest): Promise<ApiResponse<PromotionDeepbidUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionDeepbidUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/deepbid/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.promotionDeepbidUpdateV30Request
    });
  }
}


