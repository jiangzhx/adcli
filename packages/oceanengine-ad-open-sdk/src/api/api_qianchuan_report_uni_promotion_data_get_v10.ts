// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_uni_promotion_data_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportUniPromotionDataGetV10DataTopic, QianchuanReportUniPromotionDataGetV10FiltersInner, QianchuanReportUniPromotionDataGetV10OrderByInner, QianchuanReportUniPromotionDataGetV10PageSize, QianchuanReportUniPromotionDataGetV10Response } from "../models/index";


export interface QianchuanReportUniPromotionDataGetV10ApiOpenApiV10QianchuanReportUniPromotionDataGetGetRequest {
  advertiserId: number | string;
  dataTopic: QianchuanReportUniPromotionDataGetV10DataTopic;
  dimensions: string[];
  metrics: string[];
  filters: QianchuanReportUniPromotionDataGetV10FiltersInner[];
  startTime: string;
  endTime: string;
  orderBy: QianchuanReportUniPromotionDataGetV10OrderByInner[];
  page?: number;
  pageSize?: QianchuanReportUniPromotionDataGetV10PageSize;
}

export class QianchuanReportUniPromotionDataGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportUniPromotionDataGetGet(request: QianchuanReportUniPromotionDataGetV10ApiOpenApiV10QianchuanReportUniPromotionDataGetGetRequest): Promise<QianchuanReportUniPromotionDataGetV10Response> {
    const response = await this.openApiV10QianchuanReportUniPromotionDataGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportUniPromotionDataGetGetWithHttpInfo(request: QianchuanReportUniPromotionDataGetV10ApiOpenApiV10QianchuanReportUniPromotionDataGetGetRequest): Promise<ApiResponse<QianchuanReportUniPromotionDataGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.dataTopic == null) {
      throw new ApiException("dataTopic is required and must be specified");
    }

    if (request.dimensions == null) {
      throw new ApiException("dimensions is required and must be specified");
    }

    if (request.metrics == null) {
      throw new ApiException("metrics is required and must be specified");
    }

    if (request.filters == null) {
      throw new ApiException("filters is required and must be specified");
    }

    if (request.startTime == null) {
      throw new ApiException("startTime is required and must be specified");
    }

    if (request.endTime == null) {
      throw new ApiException("endTime is required and must be specified");
    }

    if (request.orderBy == null) {
      throw new ApiException("orderBy is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportUniPromotionDataGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/uni_promotion/data/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "data_topic", value: request.dataTopic },
        { name: "dimensions", value: request.dimensions },
        { name: "metrics", value: request.metrics },
        { name: "filters", value: request.filters },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "order_by", value: request.orderBy },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


