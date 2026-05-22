// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanShopAdvertiserListV10Permission, QianchuanShopAdvertiserListV10Response } from "../models";


export interface OpenApiV10QianchuanShopAdvertiserListGetRequest {
  shopId: number | string;
  permission?: QianchuanShopAdvertiserListV10Permission[];
  page?: number;
  pageSize?: number;
}

export class QianchuanShopAdvertiserListV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanShopAdvertiserListGet(request: OpenApiV10QianchuanShopAdvertiserListGetRequest): Promise<QianchuanShopAdvertiserListV10Response> {
    const response = await this.openApiV10QianchuanShopAdvertiserListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanShopAdvertiserListGetWithHttpInfo(request: OpenApiV10QianchuanShopAdvertiserListGetRequest): Promise<ApiResponse<QianchuanShopAdvertiserListV10Response>> {
    if (request.shopId == null) {
      throw new ApiException("Missing the required parameter 'shopId' when calling openApiV10QianchuanShopAdvertiserListGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanShopAdvertiserListV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/shop/advertiser/list/",
      queryParams: [
        { name: "shop_id", value: request.shopId },
        { name: "permission", value: request.permission, collectionFormat: "csv" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


