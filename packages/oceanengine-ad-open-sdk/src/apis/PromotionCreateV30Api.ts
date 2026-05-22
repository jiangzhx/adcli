// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionCreateV30Request, PromotionCreateV30Response } from "../models";


export interface OpenApiV30PromotionCreatePostRequest {
  promotionCreateV30Request?: PromotionCreateV30Request;
}

export class PromotionCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionCreatePost(request: OpenApiV30PromotionCreatePostRequest): Promise<PromotionCreateV30Response> {
    const response = await this.openApiV30PromotionCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionCreatePostWithHttpInfo(request: OpenApiV30PromotionCreatePostRequest): Promise<ApiResponse<PromotionCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.promotionCreateV30Request
    });
  }
}


