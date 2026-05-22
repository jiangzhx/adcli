// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_product_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdProductGetV10Filtering, QianchuanUniPromotionAdProductGetV10OrderType, QianchuanUniPromotionAdProductGetV10PageSize, QianchuanUniPromotionAdProductGetV10Response } from "../models/index";


export interface QianchuanUniPromotionAdProductGetV10ApiOpenApiV10QianchuanUniPromotionAdProductGetGetRequest {
  advertiserId: number | string;
  adId: number | string;
  startDate: string;
  endDate: string;
  fields: string[];
  filtering?: QianchuanUniPromotionAdProductGetV10Filtering;
  orderType?: QianchuanUniPromotionAdProductGetV10OrderType;
  orderField?: string;
  page?: number;
  pageSize?: QianchuanUniPromotionAdProductGetV10PageSize;
}

export class QianchuanUniPromotionAdProductGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdProductGetGet(request: QianchuanUniPromotionAdProductGetV10ApiOpenApiV10QianchuanUniPromotionAdProductGetGetRequest): Promise<QianchuanUniPromotionAdProductGetV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdProductGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdProductGetGetWithHttpInfo(request: QianchuanUniPromotionAdProductGetV10ApiOpenApiV10QianchuanUniPromotionAdProductGetGetRequest): Promise<ApiResponse<QianchuanUniPromotionAdProductGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.adId == null) {
      throw new ApiException("adId is required and must be specified");
    }

    if (request.startDate == null) {
      throw new ApiException("startDate is required and must be specified");
    }

    if (request.endDate == null) {
      throw new ApiException("endDate is required and must be specified");
    }

    if (request.fields == null) {
      throw new ApiException("fields is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdProductGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/product/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_id", value: request.adId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "filtering", value: request.filtering },
        { name: "fields", value: request.fields },
        { name: "order_type", value: request.orderType },
        { name: "order_field", value: request.orderField },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


