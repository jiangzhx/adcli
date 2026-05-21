// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ReportCustomCreativeGetV30FiltersInner, ReportCustomCreativeGetV30OrderByInner, ReportCustomCreativeGetV30Response } from "../models";


export class ReportCustomCreativeGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportCustomCreativeGetGet(dimensions: string[], advertiserId: number, metrics: string[], filters: ReportCustomCreativeGetV30FiltersInner[], startTime: string, endTime: string, orderBy: ReportCustomCreativeGetV30OrderByInner[], page: number, pageSize: number): Promise<ReportCustomCreativeGetV30Response> {
    const response = await this.openApiV30ReportCustomCreativeGetGetWithHttpInfo(dimensions, advertiserId, metrics, filters, startTime, endTime, orderBy, page, pageSize);
    return response.data;
  }

  async openApiV30ReportCustomCreativeGetGetWithHttpInfo(dimensions: string[], advertiserId: number, metrics: string[], filters: ReportCustomCreativeGetV30FiltersInner[], startTime: string, endTime: string, orderBy: ReportCustomCreativeGetV30OrderByInner[], page: number, pageSize: number): Promise<ApiResponse<ReportCustomCreativeGetV30Response>> {
    if (dimensions == null) {
      throw new ApiException("Missing the required parameter 'dimensions' when calling openApiV30ReportCustomCreativeGetGet");
    }

    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportCustomCreativeGetGet");
    }

    if (metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV30ReportCustomCreativeGetGet");
    }

    if (filters == null) {
      throw new ApiException("Missing the required parameter 'filters' when calling openApiV30ReportCustomCreativeGetGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ReportCustomCreativeGetGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ReportCustomCreativeGetGet");
    }

    if (orderBy == null) {
      throw new ApiException("Missing the required parameter 'orderBy' when calling openApiV30ReportCustomCreativeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportCustomCreativeGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/custom/creative/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
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


