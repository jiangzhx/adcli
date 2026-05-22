// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanReportUniPromotionDataGetV10DataTopic, QianchuanReportUniPromotionDataGetV10FiltersInner, QianchuanReportUniPromotionDataGetV10OrderByInner, QianchuanReportUniPromotionDataGetV10PageSize, QianchuanReportUniPromotionDataGetV10Response } from "../models";


export interface OpenApiV10QianchuanReportUniPromotionDataGetGetRequest {
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

  async openApiV10QianchuanReportUniPromotionDataGetGet(request: OpenApiV10QianchuanReportUniPromotionDataGetGetRequest): Promise<QianchuanReportUniPromotionDataGetV10Response> {
    const response = await this.openApiV10QianchuanReportUniPromotionDataGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportUniPromotionDataGetGetWithHttpInfo(request: OpenApiV10QianchuanReportUniPromotionDataGetGetRequest): Promise<ApiResponse<QianchuanReportUniPromotionDataGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportUniPromotionDataGetGet");
    }

    if (request.dataTopic == null) {
      throw new ApiException("Missing the required parameter 'dataTopic' when calling openApiV10QianchuanReportUniPromotionDataGetGet");
    }

    if (request.dimensions == null) {
      throw new ApiException("Missing the required parameter 'dimensions' when calling openApiV10QianchuanReportUniPromotionDataGetGet");
    }

    if (request.metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV10QianchuanReportUniPromotionDataGetGet");
    }

    if (request.filters == null) {
      throw new ApiException("Missing the required parameter 'filters' when calling openApiV10QianchuanReportUniPromotionDataGetGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV10QianchuanReportUniPromotionDataGetGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV10QianchuanReportUniPromotionDataGetGet");
    }

    if (request.orderBy == null) {
      throw new ApiException("Missing the required parameter 'orderBy' when calling openApiV10QianchuanReportUniPromotionDataGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportUniPromotionDataGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/uni_promotion/data/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "data_topic", value: request.dataTopic },
        { name: "dimensions", value: request.dimensions, collectionFormat: "csv" },
        { name: "metrics", value: request.metrics, collectionFormat: "csv" },
        { name: "filters", value: request.filters, collectionFormat: "csv" },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "order_by", value: request.orderBy, collectionFormat: "csv" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


