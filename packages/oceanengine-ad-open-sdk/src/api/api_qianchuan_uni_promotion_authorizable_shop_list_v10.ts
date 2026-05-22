// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_authorizable_shop_list_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAuthorizableShopListV10Filter, QianchuanUniPromotionAuthorizableShopListV10Response } from "../models/index";


export interface QianchuanUniPromotionAuthorizableShopListV10ApiOpenApiV10QianchuanUniPromotionAuthorizableShopListGetRequest {
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

  async openApiV10QianchuanUniPromotionAuthorizableShopListGet(request: QianchuanUniPromotionAuthorizableShopListV10ApiOpenApiV10QianchuanUniPromotionAuthorizableShopListGetRequest): Promise<QianchuanUniPromotionAuthorizableShopListV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAuthorizableShopListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAuthorizableShopListGetWithHttpInfo(request: QianchuanUniPromotionAuthorizableShopListV10ApiOpenApiV10QianchuanUniPromotionAuthorizableShopListGetRequest): Promise<ApiResponse<QianchuanUniPromotionAuthorizableShopListV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


