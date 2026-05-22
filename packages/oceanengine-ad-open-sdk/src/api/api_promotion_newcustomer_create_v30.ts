// Generated from oceanengine/ad_open_sdk_go api/api_promotion_newcustomer_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PromotionNewcustomerCreateV30Request, PromotionNewcustomerCreateV30Response } from "../models/index";


export interface PromotionNewcustomerCreateV30ApiOpenApiV30PromotionNewcustomerCreatePostRequest {
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

  async openApiV30PromotionNewcustomerCreatePost(request: PromotionNewcustomerCreateV30ApiOpenApiV30PromotionNewcustomerCreatePostRequest): Promise<PromotionNewcustomerCreateV30Response> {
    const response = await this.openApiV30PromotionNewcustomerCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionNewcustomerCreatePostWithHttpInfo(request: PromotionNewcustomerCreateV30ApiOpenApiV30PromotionNewcustomerCreatePostRequest): Promise<ApiResponse<PromotionNewcustomerCreateV30Response>> {

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


