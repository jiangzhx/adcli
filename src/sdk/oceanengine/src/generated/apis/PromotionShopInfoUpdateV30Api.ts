// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { PromotionShopInfoUpdateV30Request, PromotionShopInfoUpdateV30Response } from "../models";


export class PromotionShopInfoUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionShopInfoUpdatePost(promotionShopInfoUpdateV30Request: PromotionShopInfoUpdateV30Request): Promise<PromotionShopInfoUpdateV30Response> {
    const response = await this.openApiV30PromotionShopInfoUpdatePostWithHttpInfo(promotionShopInfoUpdateV30Request);
    return response.data;
  }

  async openApiV30PromotionShopInfoUpdatePostWithHttpInfo(promotionShopInfoUpdateV30Request: PromotionShopInfoUpdateV30Request): Promise<ApiResponse<PromotionShopInfoUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionShopInfoUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/shop_info/update/",
      queryParams: [

      ],
      body: promotionShopInfoUpdateV30Request
    });
  }
}


