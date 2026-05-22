// Generated from oceanengine/ad_open_sdk_go api/api_promotion_status_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PromotionStatusUpdateV30Request, PromotionStatusUpdateV30Response } from "../models/index";


export interface PromotionStatusUpdateV30ApiOpenApiV30PromotionStatusUpdatePostRequest {
  promotionStatusUpdateV30Request?: PromotionStatusUpdateV30Request;
}

export class PromotionStatusUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionStatusUpdatePost(request: PromotionStatusUpdateV30ApiOpenApiV30PromotionStatusUpdatePostRequest): Promise<PromotionStatusUpdateV30Response> {
    const response = await this.openApiV30PromotionStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionStatusUpdatePostWithHttpInfo(request: PromotionStatusUpdateV30ApiOpenApiV30PromotionStatusUpdatePostRequest): Promise<ApiResponse<PromotionStatusUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionStatusUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/status/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.promotionStatusUpdateV30Request
    });
  }
}


