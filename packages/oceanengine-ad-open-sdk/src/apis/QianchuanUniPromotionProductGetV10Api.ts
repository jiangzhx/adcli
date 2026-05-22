// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionProductGetV10Filtering, QianchuanUniPromotionProductGetV10OrderField, QianchuanUniPromotionProductGetV10OrderType, QianchuanUniPromotionProductGetV10Platfrom, QianchuanUniPromotionProductGetV10Response } from "../models";


export interface OpenApiV10QianchuanUniPromotionProductGetGetRequest {
  advertiserId: number;
  filtering: QianchuanUniPromotionProductGetV10Filtering;
  awemeId?: number;
  orderField?: QianchuanUniPromotionProductGetV10OrderField;
  orderType?: QianchuanUniPromotionProductGetV10OrderType;
  page?: number;
  pageSize?: number;
  cursor?: number;
  platfrom?: QianchuanUniPromotionProductGetV10Platfrom;
}

export class QianchuanUniPromotionProductGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionProductGetGet(request: OpenApiV10QianchuanUniPromotionProductGetGetRequest): Promise<QianchuanUniPromotionProductGetV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionProductGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionProductGetGetWithHttpInfo(request: OpenApiV10QianchuanUniPromotionProductGetGetRequest): Promise<ApiResponse<QianchuanUniPromotionProductGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionProductGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanUniPromotionProductGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionProductGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/product/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "filtering", value: request.filtering },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "cursor", value: request.cursor },
        { name: "platfrom", value: request.platfrom }
      ]
    });
  }
}


