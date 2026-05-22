// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanReportUniPromotionDimensionDataAuthorGetV10Dimension, QianchuanReportUniPromotionDimensionDataAuthorGetV10Filtering, QianchuanReportUniPromotionDimensionDataAuthorGetV10MarketingGoal, QianchuanReportUniPromotionDimensionDataAuthorGetV10Metrics, QianchuanReportUniPromotionDimensionDataAuthorGetV10OrderType, QianchuanReportUniPromotionDimensionDataAuthorGetV10Response } from "../models";


export interface OpenApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGetRequest {
  advertiserId: number;
  awemeId: number;
  marketingGoal?: QianchuanReportUniPromotionDimensionDataAuthorGetV10MarketingGoal;
  metrics?: QianchuanReportUniPromotionDimensionDataAuthorGetV10Metrics[];
  startTime?: string;
  endTime?: string;
  dimension?: QianchuanReportUniPromotionDimensionDataAuthorGetV10Dimension;
  orderType?: QianchuanReportUniPromotionDimensionDataAuthorGetV10OrderType;
  orderField?: string;
  filtering?: QianchuanReportUniPromotionDimensionDataAuthorGetV10Filtering;
  page?: number;
  pageSize?: number;
}

export class QianchuanReportUniPromotionDimensionDataAuthorGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGet(request: OpenApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGetRequest): Promise<QianchuanReportUniPromotionDimensionDataAuthorGetV10Response> {
    const response = await this.openApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGetWithHttpInfo(request: OpenApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGetRequest): Promise<ApiResponse<QianchuanReportUniPromotionDimensionDataAuthorGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportUniPromotionDimensionDataAuthorGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/uni_promotion/dimension_data/author/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "aweme_id", value: request.awemeId },
        { name: "metrics", value: request.metrics, collectionFormat: "csv" },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "dimension", value: request.dimension },
        { name: "order_type", value: request.orderType },
        { name: "order_field", value: request.orderField },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


