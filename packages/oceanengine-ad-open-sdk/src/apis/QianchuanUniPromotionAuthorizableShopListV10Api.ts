// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAuthorizableShopListV10Filter, QianchuanUniPromotionAuthorizableShopListV10Response } from "../models";


export interface OpenApiV10QianchuanUniPromotionAuthorizableShopListGetRequest {
  advertiserId: number | string;
  awemeId?: number | string;
  filter?: QianchuanUniPromotionAuthorizableShopListV10Filter;
  page?: number;
  pageSize?: number;
}

export class QianchuanUniPromotionAuthorizableShopListV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAuthorizableShopListGet(request: OpenApiV10QianchuanUniPromotionAuthorizableShopListGetRequest): Promise<QianchuanUniPromotionAuthorizableShopListV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAuthorizableShopListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAuthorizableShopListGetWithHttpInfo(request: OpenApiV10QianchuanUniPromotionAuthorizableShopListGetRequest): Promise<ApiResponse<QianchuanUniPromotionAuthorizableShopListV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionAuthorizableShopListGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAuthorizableShopListV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/authorizable_shop/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "filter", value: request.filter },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


