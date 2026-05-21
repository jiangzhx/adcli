// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AdShopInfoUpdateV30Request, AdShopInfoUpdateV30Response } from "../models";


export class AdShopInfoUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdShopInfoUpdatePost(adShopInfoUpdateV30Request: AdShopInfoUpdateV30Request): Promise<AdShopInfoUpdateV30Response> {
    const response = await this.openApiV30AdShopInfoUpdatePostWithHttpInfo(adShopInfoUpdateV30Request);
    return response.data;
  }

  async openApiV30AdShopInfoUpdatePostWithHttpInfo(adShopInfoUpdateV30Request: AdShopInfoUpdateV30Request): Promise<ApiResponse<AdShopInfoUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<AdShopInfoUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/ad/shop_info/update/",
      queryParams: [

      ],
      body: adShopInfoUpdateV30Request
    });
  }
}


