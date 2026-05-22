// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanShopGetV10Response } from "../models";


export class QianchuanShopGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanShopGetGet(shopIds: number[]): Promise<QianchuanShopGetV10Response> {
    const response = await this.openApiV10QianchuanShopGetGetWithHttpInfo(shopIds);
    return response.data;
  }

  async openApiV10QianchuanShopGetGetWithHttpInfo(shopIds: number[]): Promise<ApiResponse<QianchuanShopGetV10Response>> {
    if (shopIds == null) {
      throw new ApiException("Missing the required parameter 'shopIds' when calling openApiV10QianchuanShopGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanShopGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/shop/get/",
      queryParams: [
        { name: "shop_ids", value: shopIds, collectionFormat: "csv" }
      ]
    });
  }
}


