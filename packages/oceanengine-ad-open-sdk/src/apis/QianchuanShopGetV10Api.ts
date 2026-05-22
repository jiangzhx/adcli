// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanShopGetV10Response } from "../models";


export interface OpenApiV10QianchuanShopGetGetRequest {
  shopIds: number | string[];
}

export class QianchuanShopGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanShopGetGet(request: OpenApiV10QianchuanShopGetGetRequest): Promise<QianchuanShopGetV10Response> {
    const response = await this.openApiV10QianchuanShopGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanShopGetGetWithHttpInfo(request: OpenApiV10QianchuanShopGetGetRequest): Promise<ApiResponse<QianchuanShopGetV10Response>> {
    if (request.shopIds == null) {
      throw new ApiException("Missing the required parameter 'shopIds' when calling openApiV10QianchuanShopGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanShopGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/shop/get/",
      queryParams: [
        { name: "shop_ids", value: request.shopIds, collectionFormat: "csv" }
      ]
    });
  }
}


