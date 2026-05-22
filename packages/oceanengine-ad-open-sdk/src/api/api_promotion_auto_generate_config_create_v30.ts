// Generated from oceanengine/ad_open_sdk_go api/api_promotion_auto_generate_config_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PromotionAutoGenerateConfigCreateV30Request, PromotionAutoGenerateConfigCreateV30Response } from "../models/index";


export interface PromotionAutoGenerateConfigCreateV30ApiOpenApiV30PromotionAutoGenerateConfigCreatePostRequest {
  promotionAutoGenerateConfigCreateV30Request?: PromotionAutoGenerateConfigCreateV30Request;
}

export class PromotionAutoGenerateConfigCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionAutoGenerateConfigCreatePost(request: PromotionAutoGenerateConfigCreateV30ApiOpenApiV30PromotionAutoGenerateConfigCreatePostRequest): Promise<PromotionAutoGenerateConfigCreateV30Response> {
    const response = await this.openApiV30PromotionAutoGenerateConfigCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionAutoGenerateConfigCreatePostWithHttpInfo(request: PromotionAutoGenerateConfigCreateV30ApiOpenApiV30PromotionAutoGenerateConfigCreatePostRequest): Promise<ApiResponse<PromotionAutoGenerateConfigCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionAutoGenerateConfigCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/auto_generate_config/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.promotionAutoGenerateConfigCreateV30Request
    });
  }
}


