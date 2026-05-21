// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanUniPromotionAdMaterialGetV10Filtering, QianchuanUniPromotionAdMaterialGetV10OrderType, QianchuanUniPromotionAdMaterialGetV10PageSize, QianchuanUniPromotionAdMaterialGetV10Response } from "../models";


export class QianchuanUniPromotionAdMaterialGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdMaterialGetGet(advertiserId: number, adId: number, filtering: QianchuanUniPromotionAdMaterialGetV10Filtering, fields: string[], orderType: QianchuanUniPromotionAdMaterialGetV10OrderType, orderField: string, page: number, pageSize: QianchuanUniPromotionAdMaterialGetV10PageSize): Promise<QianchuanUniPromotionAdMaterialGetV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdMaterialGetGetWithHttpInfo(advertiserId, adId, filtering, fields, orderType, orderField, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdMaterialGetGetWithHttpInfo(advertiserId: number, adId: number, filtering: QianchuanUniPromotionAdMaterialGetV10Filtering, fields: string[], orderType: QianchuanUniPromotionAdMaterialGetV10OrderType, orderField: string, page: number, pageSize: QianchuanUniPromotionAdMaterialGetV10PageSize): Promise<ApiResponse<QianchuanUniPromotionAdMaterialGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionAdMaterialGetGet");
    }

    if (adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanUniPromotionAdMaterialGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanUniPromotionAdMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdMaterialGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/material/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_id", value: adId },
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


