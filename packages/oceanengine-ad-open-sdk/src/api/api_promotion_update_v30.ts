// Generated from oceanengine/ad_open_sdk_go api/api_promotion_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PromotionUpdateV30Request, PromotionUpdateV30Response } from "../models/index";


export interface PromotionUpdateV30ApiOpenApiV30PromotionUpdatePostRequest {
  promotionUpdateV30Request?: PromotionUpdateV30Request;
}

export class PromotionUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionUpdatePost(request: PromotionUpdateV30ApiOpenApiV30PromotionUpdatePostRequest): Promise<PromotionUpdateV30Response> {
    const response = await this.openApiV30PromotionUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionUpdatePostWithHttpInfo(request: PromotionUpdateV30ApiOpenApiV30PromotionUpdatePostRequest): Promise<ApiResponse<PromotionUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.promotionUpdateV30Request
    });
  }
}


