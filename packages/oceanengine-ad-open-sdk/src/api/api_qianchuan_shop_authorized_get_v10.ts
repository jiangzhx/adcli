// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_shop_authorized_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanShopAuthorizedGetV10Response } from "../models/index";


export interface QianchuanShopAuthorizedGetV10ApiOpenApiV10QianchuanShopAuthorizedGetGetRequest {
  advertiserId: number | string;
  page?: number;
  pageSize?: number;
}

export class QianchuanShopAuthorizedGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanShopAuthorizedGetGet(request: QianchuanShopAuthorizedGetV10ApiOpenApiV10QianchuanShopAuthorizedGetGetRequest): Promise<QianchuanShopAuthorizedGetV10Response> {
    const response = await this.openApiV10QianchuanShopAuthorizedGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanShopAuthorizedGetGetWithHttpInfo(request: QianchuanShopAuthorizedGetV10ApiOpenApiV10QianchuanShopAuthorizedGetGetRequest): Promise<ApiResponse<QianchuanShopAuthorizedGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanShopAuthorizedGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/shop/authorized/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


