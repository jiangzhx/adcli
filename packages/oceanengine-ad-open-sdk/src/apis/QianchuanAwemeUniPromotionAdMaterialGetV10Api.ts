// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeUniPromotionAdMaterialGetV10Filter, QianchuanAwemeUniPromotionAdMaterialGetV10OrderField, QianchuanAwemeUniPromotionAdMaterialGetV10OrderType, QianchuanAwemeUniPromotionAdMaterialGetV10PageSize, QianchuanAwemeUniPromotionAdMaterialGetV10Response } from "../models";


export class QianchuanAwemeUniPromotionAdMaterialGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionAdMaterialGetGet(advertiserId: number, orderId: number, filter: QianchuanAwemeUniPromotionAdMaterialGetV10Filter, orderType: QianchuanAwemeUniPromotionAdMaterialGetV10OrderType, orderField: QianchuanAwemeUniPromotionAdMaterialGetV10OrderField, page: number, pageSize: QianchuanAwemeUniPromotionAdMaterialGetV10PageSize): Promise<QianchuanAwemeUniPromotionAdMaterialGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionAdMaterialGetGetWithHttpInfo(advertiserId, orderId, filter, orderType, orderField, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionAdMaterialGetGetWithHttpInfo(advertiserId: number, orderId: number, filter: QianchuanAwemeUniPromotionAdMaterialGetV10Filter, orderType: QianchuanAwemeUniPromotionAdMaterialGetV10OrderType, orderField: QianchuanAwemeUniPromotionAdMaterialGetV10OrderField, page: number, pageSize: QianchuanAwemeUniPromotionAdMaterialGetV10PageSize): Promise<ApiResponse<QianchuanAwemeUniPromotionAdMaterialGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeUniPromotionAdMaterialGetGet");
    }

    if (orderId == null) {
      throw new ApiException("Missing the required parameter 'orderId' when calling openApiV10QianchuanAwemeUniPromotionAdMaterialGetGet");
    }

    if (filter == null) {
      throw new ApiException("Missing the required parameter 'filter' when calling openApiV10QianchuanAwemeUniPromotionAdMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionAdMaterialGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/ad/material/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "order_id", value: orderId },
        { name: "filter", value: filter },
        { name: "order_type", value: orderType },
        { name: "order_field", value: orderField },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


