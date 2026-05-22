// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_uni_promotion_dimension_data_author_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportUniPromotionDimensionDataAuthorGetV10Dimension, QianchuanReportUniPromotionDimensionDataAuthorGetV10Filtering, QianchuanReportUniPromotionDimensionDataAuthorGetV10MarketingGoal, QianchuanReportUniPromotionDimensionDataAuthorGetV10Metrics, QianchuanReportUniPromotionDimensionDataAuthorGetV10OrderType, QianchuanReportUniPromotionDimensionDataAuthorGetV10Response } from "../models/index";


export interface QianchuanReportUniPromotionDimensionDataAuthorGetV10ApiOpenApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
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

  async openApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGet(request: QianchuanReportUniPromotionDimensionDataAuthorGetV10ApiOpenApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGetRequest): Promise<QianchuanReportUniPromotionDimensionDataAuthorGetV10Response> {
    const response = await this.openApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGetWithHttpInfo(request: QianchuanReportUniPromotionDimensionDataAuthorGetV10ApiOpenApiV10QianchuanReportUniPromotionDimensionDataAuthorGetGetRequest): Promise<ApiResponse<QianchuanReportUniPromotionDimensionDataAuthorGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.awemeId == null) {
      throw new ApiException("awemeId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportUniPromotionDimensionDataAuthorGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/uni_promotion/dimension_data/author/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "aweme_id", value: request.awemeId },
        { name: "metrics", value: request.metrics },
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


