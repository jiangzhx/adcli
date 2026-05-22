// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_custom_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportCustomGetV10DataTopic, QianchuanReportCustomGetV10FiltersInner, QianchuanReportCustomGetV10OrderByInner, QianchuanReportCustomGetV10Response } from "../models/index";


export interface QianchuanReportCustomGetV10ApiOpenApiV10QianchuanReportCustomGetGetRequest {
  dataTopic: QianchuanReportCustomGetV10DataTopic;
  dimensions: string[];
  metrics: string[];
  filters: QianchuanReportCustomGetV10FiltersInner[];
  startTime: string;
  endTime: string;
  orderBy: QianchuanReportCustomGetV10OrderByInner[];
  advertiserId?: number | string;
  page?: number;
  pageSize?: number;
}

export class QianchuanReportCustomGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportCustomGetGet(request: QianchuanReportCustomGetV10ApiOpenApiV10QianchuanReportCustomGetGetRequest): Promise<QianchuanReportCustomGetV10Response> {
    const response = await this.openApiV10QianchuanReportCustomGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportCustomGetGetWithHttpInfo(request: QianchuanReportCustomGetV10ApiOpenApiV10QianchuanReportCustomGetGetRequest): Promise<ApiResponse<QianchuanReportCustomGetV10Response>> {
    if (request.dataTopic == null) {
      throw new ApiException("Missing the required parameter 'dataTopic' when calling openApiV10QianchuanReportCustomGetGet");
    }

    if (request.dimensions == null) {
      throw new ApiException("Missing the required parameter 'dimensions' when calling openApiV10QianchuanReportCustomGetGet");
    }

    if (request.metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV10QianchuanReportCustomGetGet");
    }

    if (request.filters == null) {
      throw new ApiException("Missing the required parameter 'filters' when calling openApiV10QianchuanReportCustomGetGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV10QianchuanReportCustomGetGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV10QianchuanReportCustomGetGet");
    }

    if (request.orderBy == null) {
      throw new ApiException("Missing the required parameter 'orderBy' when calling openApiV10QianchuanReportCustomGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportCustomGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/custom/get/",
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


