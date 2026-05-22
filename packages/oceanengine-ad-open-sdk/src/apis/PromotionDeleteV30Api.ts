// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionDeleteV30Request, PromotionDeleteV30Response } from "../models";


export interface OpenApiV30PromotionDeletePostRequest {
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

  async openApiV30PromotionDeletePost(request: OpenApiV30PromotionDeletePostRequest): Promise<PromotionDeleteV30Response> {
    const response = await this.openApiV30PromotionDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionDeletePostWithHttpInfo(request: OpenApiV30PromotionDeletePostRequest): Promise<ApiResponse<PromotionDeleteV30Response>> {

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


