// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ShopBonusCreateV30Request, ShopBonusCreateV30Response } from "../models";


export interface OpenApiV30ShopBonusCreatePostRequest {
  shopBonusCreateV30Request?: ShopBonusCreateV30Request;
}

export class ShopBonusCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ShopBonusCreatePost(request: OpenApiV30ShopBonusCreatePostRequest): Promise<ShopBonusCreateV30Response> {
    const response = await this.openApiV30ShopBonusCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ShopBonusCreatePostWithHttpInfo(request: OpenApiV30ShopBonusCreatePostRequest): Promise<ApiResponse<ShopBonusCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ShopBonusCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/shop_bonus/create/",
      queryParams: [

      ],
      body: request.shopBonusCreateV30Request
    });
  }
}


