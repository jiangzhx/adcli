// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdProductGetV10Filtering, QianchuanUniPromotionAdProductGetV10OrderType, QianchuanUniPromotionAdProductGetV10PageSize, QianchuanUniPromotionAdProductGetV10Response } from "../models";


export class QianchuanUniPromotionAdProductGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdProductGetGet(advertiserId: number, adId: number, startDate: string, endDate: string, fields: string[], filtering: QianchuanUniPromotionAdProductGetV10Filtering, orderType: QianchuanUniPromotionAdProductGetV10OrderType, orderField: string, page: number, pageSize: QianchuanUniPromotionAdProductGetV10PageSize): Promise<QianchuanUniPromotionAdProductGetV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdProductGetGetWithHttpInfo(advertiserId, adId, startDate, endDate, fields, filtering, orderType, orderField, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdProductGetGetWithHttpInfo(advertiserId: number, adId: number, startDate: string, endDate: string, fields: string[], filtering: QianchuanUniPromotionAdProductGetV10Filtering, orderType: QianchuanUniPromotionAdProductGetV10OrderType, orderField: string, page: number, pageSize: QianchuanUniPromotionAdProductGetV10PageSize): Promise<ApiResponse<QianchuanUniPromotionAdProductGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionAdProductGetGet");
    }

    if (adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanUniPromotionAdProductGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanUniPromotionAdProductGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanUniPromotionAdProductGetGet");
    }

    if (fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanUniPromotionAdProductGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdProductGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/product/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_id", value: adId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "filtering", value: filtering },
        { name: "order_type", value: orderType },
        { name: "order_field", value: orderField },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


