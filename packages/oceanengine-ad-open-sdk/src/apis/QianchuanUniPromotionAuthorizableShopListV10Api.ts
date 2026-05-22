// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAuthorizableShopListV10Filter, QianchuanUniPromotionAuthorizableShopListV10Response } from "../models";


export class QianchuanUniPromotionAuthorizableShopListV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAuthorizableShopListGet(advertiserId: number, awemeId: number, filter: QianchuanUniPromotionAuthorizableShopListV10Filter, page: number, pageSize: number): Promise<QianchuanUniPromotionAuthorizableShopListV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAuthorizableShopListGetWithHttpInfo(advertiserId, awemeId, filter, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAuthorizableShopListGetWithHttpInfo(advertiserId: number, awemeId: number, filter: QianchuanUniPromotionAuthorizableShopListV10Filter, page: number, pageSize: number): Promise<ApiResponse<QianchuanUniPromotionAuthorizableShopListV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionAuthorizableShopListGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAuthorizableShopListV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/authorizable_shop/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "filter", value: filter },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


