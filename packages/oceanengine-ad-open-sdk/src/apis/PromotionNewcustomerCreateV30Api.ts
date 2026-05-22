// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionNewcustomerCreateV30Request, PromotionNewcustomerCreateV30Response } from "../models";


export interface OpenApiV30PromotionNewcustomerCreatePostRequest {
  promotionNewcustomerCreateV30Request?: PromotionNewcustomerCreateV30Request;
}

export class PromotionNewcustomerCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionNewcustomerCreatePost(request: OpenApiV30PromotionNewcustomerCreatePostRequest): Promise<PromotionNewcustomerCreateV30Response> {
    const response = await this.openApiV30PromotionNewcustomerCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionNewcustomerCreatePostWithHttpInfo(request: OpenApiV30PromotionNewcustomerCreatePostRequest): Promise<ApiResponse<PromotionNewcustomerCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionNewcustomerCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion_newcustomer/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.promotionNewcustomerCreateV30Request
    });
  }
}


