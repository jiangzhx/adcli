// Generated from oceanengine/ad_open_sdk_go api/api_promotion_name_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PromotionNameUpdateV30Request, PromotionNameUpdateV30Response } from "../models/index";


export interface PromotionNameUpdateV30ApiOpenApiV30PromotionNameUpdatePostRequest {
  promotionNameUpdateV30Request?: PromotionNameUpdateV30Request;
}

export class PromotionNameUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionNameUpdatePost(request: PromotionNameUpdateV30ApiOpenApiV30PromotionNameUpdatePostRequest): Promise<PromotionNameUpdateV30Response> {
    const response = await this.openApiV30PromotionNameUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionNameUpdatePostWithHttpInfo(request: PromotionNameUpdateV30ApiOpenApiV30PromotionNameUpdatePostRequest): Promise<ApiResponse<PromotionNameUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionNameUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion_name/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.promotionNameUpdateV30Request
    });
  }
}


