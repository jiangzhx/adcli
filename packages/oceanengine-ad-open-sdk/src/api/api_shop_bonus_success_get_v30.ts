// Generated from oceanengine/ad_open_sdk_go api/api_shop_bonus_success_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ShopBonusSuccessGetV30Response } from "../models/index";


export interface ShopBonusSuccessGetV30ApiOpenApiV30ShopBonusSuccessGetGetRequest {
  advertiserId: number | string;
  promotionId: number | string;
}

export class ShopBonusSuccessGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ShopBonusSuccessGetGet(request: ShopBonusSuccessGetV30ApiOpenApiV30ShopBonusSuccessGetGetRequest): Promise<ShopBonusSuccessGetV30Response> {
    const response = await this.openApiV30ShopBonusSuccessGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ShopBonusSuccessGetGetWithHttpInfo(request: ShopBonusSuccessGetV30ApiOpenApiV30ShopBonusSuccessGetGetRequest): Promise<ApiResponse<ShopBonusSuccessGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ShopBonusSuccessGetGet");
    }

    if (request.promotionId == null) {
      throw new ApiException("Missing the required parameter 'promotionId' when calling openApiV30ShopBonusSuccessGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ShopBonusSuccessGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shop_bonus_success/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "promotion_id", value: request.promotionId }
      ]
    });
  }
}


