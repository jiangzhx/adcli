// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_product_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionProductGetV10Filtering, QianchuanUniPromotionProductGetV10OrderField, QianchuanUniPromotionProductGetV10OrderType, QianchuanUniPromotionProductGetV10Platfrom, QianchuanUniPromotionProductGetV10Response } from "../models/index";


export interface QianchuanUniPromotionProductGetV10ApiOpenApiV10QianchuanUniPromotionProductGetGetRequest {
  advertiserId: number | string;
  filtering: QianchuanUniPromotionProductGetV10Filtering;
  awemeId?: number | string;
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

  async openApiV10QianchuanUniPromotionProductGetGet(request: QianchuanUniPromotionProductGetV10ApiOpenApiV10QianchuanUniPromotionProductGetGetRequest): Promise<QianchuanUniPromotionProductGetV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionProductGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionProductGetGetWithHttpInfo(request: QianchuanUniPromotionProductGetV10ApiOpenApiV10QianchuanUniPromotionProductGetGetRequest): Promise<ApiResponse<QianchuanUniPromotionProductGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 0) {
      throw new ApiException("advertiserId must be greater than 0");
    }

    if (request.filtering == null) {
      throw new ApiException("filtering is required and must be specified");
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


