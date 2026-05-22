// Generated from oceanengine/ad_open_sdk_go api/api_promotion_easy_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PromotionEasyUpdateV30Request, PromotionEasyUpdateV30Response } from "../models/index";


export interface PromotionEasyUpdateV30ApiOpenApiV30PromotionEasyUpdatePostRequest {
  promotionEasyUpdateV30Request?: PromotionEasyUpdateV30Request;
}

export class PromotionEasyUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionEasyUpdatePost(request: PromotionEasyUpdateV30ApiOpenApiV30PromotionEasyUpdatePostRequest): Promise<PromotionEasyUpdateV30Response> {
    const response = await this.openApiV30PromotionEasyUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionEasyUpdatePostWithHttpInfo(request: PromotionEasyUpdateV30ApiOpenApiV30PromotionEasyUpdatePostRequest): Promise<ApiResponse<PromotionEasyUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionEasyUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion_easy/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.promotionEasyUpdateV30Request
    });
  }
}


