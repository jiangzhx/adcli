// Generated from oceanengine/ad_open_sdk_go api/api_promotion_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PromotionDeleteV30Request, PromotionDeleteV30Response } from "../models/index";


export interface PromotionDeleteV30ApiOpenApiV30PromotionDeletePostRequest {
  promotionDeleteV30Request?: PromotionDeleteV30Request;
}

export class PromotionDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionDeletePost(request: PromotionDeleteV30ApiOpenApiV30PromotionDeletePostRequest): Promise<PromotionDeleteV30Response> {
    const response = await this.openApiV30PromotionDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionDeletePostWithHttpInfo(request: PromotionDeleteV30ApiOpenApiV30PromotionDeletePostRequest): Promise<ApiResponse<PromotionDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.promotionDeleteV30Request
    });
  }
}


