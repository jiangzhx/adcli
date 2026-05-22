// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_uni_promotion_ad_material_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeUniPromotionAdMaterialGetV10Filter, QianchuanAwemeUniPromotionAdMaterialGetV10OrderField, QianchuanAwemeUniPromotionAdMaterialGetV10OrderType, QianchuanAwemeUniPromotionAdMaterialGetV10PageSize, QianchuanAwemeUniPromotionAdMaterialGetV10Response } from "../models/index";


export interface QianchuanAwemeUniPromotionAdMaterialGetV10ApiOpenApiV10QianchuanAwemeUniPromotionAdMaterialGetGetRequest {
  advertiserId: number | string;
  orderId: number | string;
  filter: QianchuanAwemeUniPromotionAdMaterialGetV10Filter;
  orderType?: QianchuanAwemeUniPromotionAdMaterialGetV10OrderType;
  orderField?: QianchuanAwemeUniPromotionAdMaterialGetV10OrderField;
  page?: number;
  pageSize?: QianchuanAwemeUniPromotionAdMaterialGetV10PageSize;
}

export class QianchuanAwemeUniPromotionAdMaterialGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionAdMaterialGetGet(request: QianchuanAwemeUniPromotionAdMaterialGetV10ApiOpenApiV10QianchuanAwemeUniPromotionAdMaterialGetGetRequest): Promise<QianchuanAwemeUniPromotionAdMaterialGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionAdMaterialGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionAdMaterialGetGetWithHttpInfo(request: QianchuanAwemeUniPromotionAdMaterialGetV10ApiOpenApiV10QianchuanAwemeUniPromotionAdMaterialGetGetRequest): Promise<ApiResponse<QianchuanAwemeUniPromotionAdMaterialGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeUniPromotionAdMaterialGetGet");
    }

    if (request.orderId == null) {
      throw new ApiException("Missing the required parameter 'orderId' when calling openApiV10QianchuanAwemeUniPromotionAdMaterialGetGet");
    }

    if (request.filter == null) {
      throw new ApiException("Missing the required parameter 'filter' when calling openApiV10QianchuanAwemeUniPromotionAdMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionAdMaterialGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/ad/material/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "order_id", value: request.orderId },
        { name: "filter", value: request.filter },
        { name: "order_type", value: request.orderType },
        { name: "order_field", value: request.orderField },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


