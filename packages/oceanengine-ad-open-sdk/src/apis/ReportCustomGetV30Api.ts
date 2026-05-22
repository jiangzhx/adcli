// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportCustomGetV30DataTopic, ReportCustomGetV30FiltersInner, ReportCustomGetV30OrderByInner, ReportCustomGetV30Response } from "../models";


export class ReportCustomGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportCustomGetGet(dimensions: string[], advertiserId: number, metrics: string[], filters: ReportCustomGetV30FiltersInner[], startTime: string, endTime: string, orderBy: ReportCustomGetV30OrderByInner[], page: number, pageSize: number, dataTopic: ReportCustomGetV30DataTopic): Promise<ReportCustomGetV30Response> {
    const response = await this.openApiV30ReportCustomGetGetWithHttpInfo(dimensions, advertiserId, metrics, filters, startTime, endTime, orderBy, page, pageSize, dataTopic);
    return response.data;
  }

  async openApiV30ReportCustomGetGetWithHttpInfo(dimensions: string[], advertiserId: number, metrics: string[], filters: ReportCustomGetV30FiltersInner[], startTime: string, endTime: string, orderBy: ReportCustomGetV30OrderByInner[], page: number, pageSize: number, dataTopic: ReportCustomGetV30DataTopic): Promise<ApiResponse<ReportCustomGetV30Response>> {
    if (dimensions == null) {
      throw new ApiException("Missing the required parameter 'dimensions' when calling openApiV30ReportCustomGetGet");
    }

    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportCustomGetGet");
    }

    if (metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV30ReportCustomGetGet");
    }

    if (filters == null) {
      throw new ApiException("Missing the required parameter 'filters' when calling openApiV30ReportCustomGetGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ReportCustomGetGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ReportCustomGetGet");
    }

    if (orderBy == null) {
      throw new ApiException("Missing the required parameter 'orderBy' when calling openApiV30ReportCustomGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportCustomGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/custom/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "data_topic", value: dataTopic },
        { name: "dimensions", value: dimensions, collectionFormat: "csv" },
        { name: "metrics", value: metrics, collectionFormat: "csv" },
        { name: "filters", value: filters, collectionFormat: "multi" },
        { name: "order_by", value: orderBy, collectionFormat: "multi" }
      ]
    });
  }
}


