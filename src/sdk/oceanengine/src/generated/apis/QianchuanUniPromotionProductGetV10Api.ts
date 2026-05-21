// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanUniPromotionProductGetV10Filtering, QianchuanUniPromotionProductGetV10OrderField, QianchuanUniPromotionProductGetV10OrderType, QianchuanUniPromotionProductGetV10Platfrom, QianchuanUniPromotionProductGetV10Response } from "../models";


export class QianchuanUniPromotionProductGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionProductGetGet(advertiserId: number, filtering: QianchuanUniPromotionProductGetV10Filtering, awemeId: number, orderField: QianchuanUniPromotionProductGetV10OrderField, orderType: QianchuanUniPromotionProductGetV10OrderType, page: number, pageSize: number, cursor: number, platfrom: QianchuanUniPromotionProductGetV10Platfrom): Promise<QianchuanUniPromotionProductGetV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionProductGetGetWithHttpInfo(advertiserId, filtering, awemeId, orderField, orderType, page, pageSize, cursor, platfrom);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionProductGetGetWithHttpInfo(advertiserId: number, filtering: QianchuanUniPromotionProductGetV10Filtering, awemeId: number, orderField: QianchuanUniPromotionProductGetV10OrderField, orderType: QianchuanUniPromotionProductGetV10OrderType, page: number, pageSize: number, cursor: number, platfrom: QianchuanUniPromotionProductGetV10Platfrom): Promise<ApiResponse<QianchuanUniPromotionProductGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionProductGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanUniPromotionProductGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionProductGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/product/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "filtering", value: filtering },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "cursor", value: cursor },
        { name: "platfrom", value: platfrom }
      ]
    });
  }
}


