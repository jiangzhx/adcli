// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionEasyUpdateV30Request, PromotionEasyUpdateV30Response } from "../models";


export interface OpenApiV30PromotionEasyUpdatePostRequest {
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

  async openApiV30PromotionEasyUpdatePost(request: OpenApiV30PromotionEasyUpdatePostRequest): Promise<PromotionEasyUpdateV30Response> {
    const response = await this.openApiV30PromotionEasyUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionEasyUpdatePostWithHttpInfo(request: OpenApiV30PromotionEasyUpdatePostRequest): Promise<ApiResponse<PromotionEasyUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionEasyUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion_easy/update/",
      queryParams: [

      ],
      body: request.promotionEasyUpdateV30Request
    });
  }
}


