// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanReportCustomGetV10DataTopic, QianchuanReportCustomGetV10FiltersInner, QianchuanReportCustomGetV10OrderByInner, QianchuanReportCustomGetV10Response } from "../models";


export class QianchuanReportCustomGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportCustomGetGet(dataTopic: QianchuanReportCustomGetV10DataTopic, dimensions: string[], metrics: string[], filters: QianchuanReportCustomGetV10FiltersInner[], startTime: string, endTime: string, orderBy: QianchuanReportCustomGetV10OrderByInner[], advertiserId: number, page: number, pageSize: number): Promise<QianchuanReportCustomGetV10Response> {
    const response = await this.openApiV10QianchuanReportCustomGetGetWithHttpInfo(dataTopic, dimensions, metrics, filters, startTime, endTime, orderBy, advertiserId, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanReportCustomGetGetWithHttpInfo(dataTopic: QianchuanReportCustomGetV10DataTopic, dimensions: string[], metrics: string[], filters: QianchuanReportCustomGetV10FiltersInner[], startTime: string, endTime: string, orderBy: QianchuanReportCustomGetV10OrderByInner[], advertiserId: number, page: number, pageSize: number): Promise<ApiResponse<QianchuanReportCustomGetV10Response>> {
    if (dataTopic == null) {
      throw new ApiException("Missing the required parameter 'dataTopic' when calling openApiV10QianchuanReportCustomGetGet");
    }

    if (dimensions == null) {
      throw new ApiException("Missing the required parameter 'dimensions' when calling openApiV10QianchuanReportCustomGetGet");
    }

    if (metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV10QianchuanReportCustomGetGet");
    }

    if (filters == null) {
      throw new ApiException("Missing the required parameter 'filters' when calling openApiV10QianchuanReportCustomGetGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV10QianchuanReportCustomGetGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV10QianchuanReportCustomGetGet");
    }

    if (orderBy == null) {
      throw new ApiException("Missing the required parameter 'orderBy' when calling openApiV10QianchuanReportCustomGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportCustomGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/custom/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "data_topic", value: dataTopic },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "dimensions", value: dimensions, collectionFormat: "csv" },
        { name: "metrics", value: metrics, collectionFormat: "csv" },
        { name: "filters", value: filters, collectionFormat: "multi" },
        { name: "order_by", value: orderBy, collectionFormat: "multi" }
      ]
    });
  }
}


