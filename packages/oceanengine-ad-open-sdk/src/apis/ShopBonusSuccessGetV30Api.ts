// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ShopBonusSuccessGetV30Response } from "../models";


export interface OpenApiV30ShopBonusSuccessGetGetRequest {
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

  async openApiV30ShopBonusSuccessGetGet(request: OpenApiV30ShopBonusSuccessGetGetRequest): Promise<ShopBonusSuccessGetV30Response> {
    const response = await this.openApiV30ShopBonusSuccessGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ShopBonusSuccessGetGetWithHttpInfo(request: OpenApiV30ShopBonusSuccessGetGetRequest): Promise<ApiResponse<ShopBonusSuccessGetV30Response>> {
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


