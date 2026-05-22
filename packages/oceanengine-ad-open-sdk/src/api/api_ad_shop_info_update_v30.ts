// Generated from oceanengine/ad_open_sdk_go api/api_ad_shop_info_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdShopInfoUpdateV30Request, AdShopInfoUpdateV30Response } from "../models/index";


export interface AdShopInfoUpdateV30ApiOpenApiV30AdShopInfoUpdatePostRequest {
  adShopInfoUpdateV30Request?: AdShopInfoUpdateV30Request;
}

export class AdShopInfoUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdShopInfoUpdatePost(request: AdShopInfoUpdateV30ApiOpenApiV30AdShopInfoUpdatePostRequest): Promise<AdShopInfoUpdateV30Response> {
    const response = await this.openApiV30AdShopInfoUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdShopInfoUpdatePostWithHttpInfo(request: AdShopInfoUpdateV30ApiOpenApiV30AdShopInfoUpdatePostRequest): Promise<ApiResponse<AdShopInfoUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<AdShopInfoUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/ad/shop_info/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.adShopInfoUpdateV30Request
    });
  }
}


