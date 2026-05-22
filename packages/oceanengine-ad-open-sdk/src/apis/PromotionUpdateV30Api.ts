// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionUpdateV30Request, PromotionUpdateV30Response } from "../models";


export interface OpenApiV30PromotionUpdatePostRequest {
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

  async openApiV30PromotionUpdatePost(request: OpenApiV30PromotionUpdatePostRequest): Promise<PromotionUpdateV30Response> {
    const response = await this.openApiV30PromotionUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionUpdatePostWithHttpInfo(request: OpenApiV30PromotionUpdatePostRequest): Promise<ApiResponse<PromotionUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/update/",
      queryParams: [

      ],
      body: request.promotionUpdateV30Request
    });
  }
}


