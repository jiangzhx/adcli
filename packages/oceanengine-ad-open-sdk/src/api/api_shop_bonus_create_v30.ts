// Generated from oceanengine/ad_open_sdk_go api/api_shop_bonus_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ShopBonusCreateV30Request, ShopBonusCreateV30Response } from "../models/index";


export interface ShopBonusCreateV30ApiOpenApiV30ShopBonusCreatePostRequest {
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

  async openApiV30ShopBonusCreatePost(request: ShopBonusCreateV30ApiOpenApiV30ShopBonusCreatePostRequest): Promise<ShopBonusCreateV30Response> {
    const response = await this.openApiV30ShopBonusCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ShopBonusCreatePostWithHttpInfo(request: ShopBonusCreateV30ApiOpenApiV30ShopBonusCreatePostRequest): Promise<ApiResponse<ShopBonusCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ShopBonusCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/shop_bonus/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.shopBonusCreateV30Request
    });
  }
}


