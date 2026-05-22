// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionStatusUpdateV30Request, PromotionStatusUpdateV30Response } from "../models";


export interface OpenApiV30PromotionStatusUpdatePostRequest {
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

  async openApiV30PromotionStatusUpdatePost(request: OpenApiV30PromotionStatusUpdatePostRequest): Promise<PromotionStatusUpdateV30Response> {
    const response = await this.openApiV30PromotionStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionStatusUpdatePostWithHttpInfo(request: OpenApiV30PromotionStatusUpdatePostRequest): Promise<ApiResponse<PromotionStatusUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionStatusUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/status/update/",
      queryParams: [

      ],
      body: request.promotionStatusUpdateV30Request
    });
  }
}


