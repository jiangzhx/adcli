// Generated from oceanengine/ad_open_sdk_go api/api_promotion_material_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PromotionMaterialDeleteV30Request, PromotionMaterialDeleteV30Response } from "../models/index";


export interface PromotionMaterialDeleteV30ApiOpenApiV30PromotionMaterialDeletePostRequest {
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

  async openApiV30PromotionMaterialDeletePost(request: PromotionMaterialDeleteV30ApiOpenApiV30PromotionMaterialDeletePostRequest): Promise<PromotionMaterialDeleteV30Response> {
    const response = await this.openApiV30PromotionMaterialDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionMaterialDeletePostWithHttpInfo(request: PromotionMaterialDeleteV30ApiOpenApiV30PromotionMaterialDeletePostRequest): Promise<ApiResponse<PromotionMaterialDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionMaterialDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/material/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.promotionMaterialDeleteV30Request
    });
  }
}


