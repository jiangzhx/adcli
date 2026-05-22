// Generated from oceanengine/ad_open_sdk_go api/api_promotion_shop_info_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PromotionShopInfoUpdateV30Request, PromotionShopInfoUpdateV30Response } from "../models/index";


export interface PromotionShopInfoUpdateV30ApiOpenApiV30PromotionShopInfoUpdatePostRequest {
  promotionShopInfoUpdateV30Request?: PromotionShopInfoUpdateV30Request;
}

export class PromotionShopInfoUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionShopInfoUpdatePost(request: PromotionShopInfoUpdateV30ApiOpenApiV30PromotionShopInfoUpdatePostRequest): Promise<PromotionShopInfoUpdateV30Response> {
    const response = await this.openApiV30PromotionShopInfoUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionShopInfoUpdatePostWithHttpInfo(request: PromotionShopInfoUpdateV30ApiOpenApiV30PromotionShopInfoUpdatePostRequest): Promise<ApiResponse<PromotionShopInfoUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionShopInfoUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/shop_info/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.promotionShopInfoUpdateV30Request
    });
  }
}


