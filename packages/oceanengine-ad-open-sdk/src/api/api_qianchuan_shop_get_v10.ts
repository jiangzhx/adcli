// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_shop_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanShopGetV10Response } from "../models/index";


export interface QianchuanShopGetV10ApiOpenApiV10QianchuanShopGetGetRequest {
  shopIds: (number | string)[];
}

export class QianchuanShopGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanShopGetGet(request: QianchuanShopGetV10ApiOpenApiV10QianchuanShopGetGetRequest): Promise<QianchuanShopGetV10Response> {
    const response = await this.openApiV10QianchuanShopGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanShopGetGetWithHttpInfo(request: QianchuanShopGetV10ApiOpenApiV10QianchuanShopGetGetRequest): Promise<ApiResponse<QianchuanShopGetV10Response>> {
    if (request.shopIds == null) {
      throw new ApiException("shopIds is required and must be specified");
    }

    if (request.shopIds != null && request.shopIds.length < 1) {
      throw new ApiException("shopIds must have at least 1 elements");
    }

    if (request.shopIds != null && request.shopIds.length > 10) {
      throw new ApiException("shopIds must have less than 10 elements");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanShopGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/shop/get/",
      queryParams: [
        { name: "shop_ids", value: request.shopIds }
      ]
    });
  }
}


