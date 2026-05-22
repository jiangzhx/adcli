// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionMaterialDeleteV30Request, PromotionMaterialDeleteV30Response } from "../models";


export interface OpenApiV30PromotionMaterialDeletePostRequest {
  promotionMaterialDeleteV30Request?: PromotionMaterialDeleteV30Request;
}

export class PromotionMaterialDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionMaterialDeletePost(request: OpenApiV30PromotionMaterialDeletePostRequest): Promise<PromotionMaterialDeleteV30Response> {
    const response = await this.openApiV30PromotionMaterialDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionMaterialDeletePostWithHttpInfo(request: OpenApiV30PromotionMaterialDeletePostRequest): Promise<ApiResponse<PromotionMaterialDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionMaterialDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/material/delete/",
      queryParams: [

      ],
      body: request.promotionMaterialDeleteV30Request
    });
  }
}


