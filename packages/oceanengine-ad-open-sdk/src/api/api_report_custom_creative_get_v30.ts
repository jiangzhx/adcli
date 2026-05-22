// Generated from oceanengine/ad_open_sdk_go api/api_report_custom_creative_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportCustomCreativeGetV30FiltersInner, ReportCustomCreativeGetV30OrderByInner, ReportCustomCreativeGetV30Response } from "../models/index";


export interface ReportCustomCreativeGetV30ApiOpenApiV30ReportCustomCreativeGetGetRequest {
  dimensions: string[];
  advertiserId: number | string;
  metrics: string[];
  filters: ReportCustomCreativeGetV30FiltersInner[];
  startTime: string;
  endTime: string;
  orderBy: ReportCustomCreativeGetV30OrderByInner[];
  page?: number;
  pageSize?: number;
}

export class ReportCustomCreativeGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportCustomCreativeGetGet(request: ReportCustomCreativeGetV30ApiOpenApiV30ReportCustomCreativeGetGetRequest): Promise<ReportCustomCreativeGetV30Response> {
    const response = await this.openApiV30ReportCustomCreativeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportCustomCreativeGetGetWithHttpInfo(request: ReportCustomCreativeGetV30ApiOpenApiV30ReportCustomCreativeGetGetRequest): Promise<ApiResponse<ReportCustomCreativeGetV30Response>> {
    if (request.dimensions == null) {
      throw new ApiException("Missing the required parameter 'dimensions' when calling openApiV30ReportCustomCreativeGetGet");
    }

    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportCustomCreativeGetGet");
    }

    if (request.metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV30ReportCustomCreativeGetGet");
    }

    if (request.filters == null) {
      throw new ApiException("Missing the required parameter 'filters' when calling openApiV30ReportCustomCreativeGetGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ReportCustomCreativeGetGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ReportCustomCreativeGetGet");
    }

    if (request.orderBy == null) {
      throw new ApiException("Missing the required parameter 'orderBy' when calling openApiV30ReportCustomCreativeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportCustomCreativeGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/custom/creative/get/",
      queryParams: [
        { name: "dimensions", value: request.dimensions },
        { name: "advertiser_id", value: request.advertiserId },
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


