// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_shop_advertiser_list_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanShopAdvertiserListV10Permission, QianchuanShopAdvertiserListV10Response } from "../models/index";


export interface QianchuanShopAdvertiserListV10ApiOpenApiV10QianchuanShopAdvertiserListGetRequest {
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

  async openApiV10QianchuanShopAdvertiserListGet(request: QianchuanShopAdvertiserListV10ApiOpenApiV10QianchuanShopAdvertiserListGetRequest): Promise<QianchuanShopAdvertiserListV10Response> {
    const response = await this.openApiV10QianchuanShopAdvertiserListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanShopAdvertiserListGetWithHttpInfo(request: QianchuanShopAdvertiserListV10ApiOpenApiV10QianchuanShopAdvertiserListGetRequest): Promise<ApiResponse<QianchuanShopAdvertiserListV10Response>> {
    if (request.shopId == null) {
      throw new ApiException("shopId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanShopAdvertiserListV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/shop/advertiser/list/",
      queryParams: [
        { name: "shop_id", value: request.shopId },
        { name: "permission", value: request.permission },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


