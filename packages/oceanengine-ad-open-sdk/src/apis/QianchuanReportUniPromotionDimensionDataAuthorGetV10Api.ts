// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanReportUniPromotionDimensionDataAuthorGetV10Dimension, QianchuanReportUniPromotionDimensionDataAuthorGetV10Filtering, QianchuanReportUniPromotionDimensionDataAuthorGetV10MarketingGoal, QianchuanReportUniPromotionDimensionDataAuthorGetV10Metrics, QianchuanReportUniPromotionDimensionDataAuthorGetV10OrderType, QianchuanReportUniPromotionDimensionDataAuthorGetV10Response } from "../models";


export class QianchuanReportUniPromotionDimensionDataAuthorGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGet(advertiserId: number, awemeId: number, marketingGoal: QianchuanReportUniPromotionDimensionDataAuthorGetV10MarketingGoal, metrics: QianchuanReportUniPromotionDimensionDataAuthorGetV10Metrics[], startTime: string, endTime: string, dimension: QianchuanReportUniPromotionDimensionDataAuthorGetV10Dimension, orderType: QianchuanReportUniPromotionDimensionDataAuthorGetV10OrderType, orderField: string, filtering: QianchuanReportUniPromotionDimensionDataAuthorGetV10Filtering, page: number, pageSize: number): Promise<QianchuanReportUniPromotionDimensionDataAuthorGetV10Response> {
    const response = await this.openApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGetWithHttpInfo(advertiserId, awemeId, marketingGoal, metrics, startTime, endTime, dimension, orderType, orderField, filtering, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGetWithHttpInfo(advertiserId: number, awemeId: number, marketingGoal: QianchuanReportUniPromotionDimensionDataAuthorGetV10MarketingGoal, metrics: QianchuanReportUniPromotionDimensionDataAuthorGetV10Metrics[], startTime: string, endTime: string, dimension: QianchuanReportUniPromotionDimensionDataAuthorGetV10Dimension, orderType: QianchuanReportUniPromotionDimensionDataAuthorGetV10OrderType, orderField: string, filtering: QianchuanReportUniPromotionDimensionDataAuthorGetV10Filtering, page: number, pageSize: number): Promise<ApiResponse<QianchuanReportUniPromotionDimensionDataAuthorGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportUniPromotionDimensionDataAuthorGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/uni_promotion/dimension_data/author/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "marketing_goal", value: marketingGoal },
        { name: "aweme_id", value: awemeId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "dimension", value: dimension },
        { name: "order_type", value: orderType },
        { name: "order_field", value: orderField },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "metrics", value: metrics, collectionFormat: "csv" }
      ]
    });
  }
}


