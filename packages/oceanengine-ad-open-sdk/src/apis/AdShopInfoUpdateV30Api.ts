// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdShopInfoUpdateV30Request, AdShopInfoUpdateV30Response } from "../models";


export interface OpenApiV30AdShopInfoUpdatePostRequest {
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

  async openApiV30AdShopInfoUpdatePost(request: OpenApiV30AdShopInfoUpdatePostRequest): Promise<AdShopInfoUpdateV30Response> {
    const response = await this.openApiV30AdShopInfoUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdShopInfoUpdatePostWithHttpInfo(request: OpenApiV30AdShopInfoUpdatePostRequest): Promise<ApiResponse<AdShopInfoUpdateV30Response>> {

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


