// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanShopAdvertiserListV10Permission, QianchuanShopAdvertiserListV10Response } from "../models";


export class QianchuanShopAdvertiserListV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanShopAdvertiserListGet(shopId: number, permission: QianchuanShopAdvertiserListV10Permission[], page: number, pageSize: number): Promise<QianchuanShopAdvertiserListV10Response> {
    const response = await this.openApiV10QianchuanShopAdvertiserListGetWithHttpInfo(shopId, permission, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanShopAdvertiserListGetWithHttpInfo(shopId: number, permission: QianchuanShopAdvertiserListV10Permission[], page: number, pageSize: number): Promise<ApiResponse<QianchuanShopAdvertiserListV10Response>> {
    if (shopId == null) {
      throw new ApiException("Missing the required parameter 'shopId' when calling openApiV10QianchuanShopAdvertiserListGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanShopAdvertiserListV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/shop/advertiser/list/",
      queryParams: [
        { name: "shop_id", value: shopId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "permission", value: permission, collectionFormat: "csv" }
      ]
    });
  }
}


