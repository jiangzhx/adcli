// Generated from oceanengine/ad_open_sdk_go api/api_report_custom_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportCustomGetV30DataTopic, ReportCustomGetV30FiltersInner, ReportCustomGetV30OrderByInner, ReportCustomGetV30Response } from "../models/index";


export interface ReportCustomGetV30ApiOpenApiV30ReportCustomGetGetRequest {
  dimensions: string[];
  advertiserId: number | string;
  metrics: string[];
  filters: ReportCustomGetV30FiltersInner[];
  startTime: string;
  endTime: string;
  orderBy: ReportCustomGetV30OrderByInner[];
  page?: number;
  pageSize?: number;
  dataTopic?: ReportCustomGetV30DataTopic;
}

export class ReportCustomGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportCustomGetGet(request: ReportCustomGetV30ApiOpenApiV30ReportCustomGetGetRequest): Promise<ReportCustomGetV30Response> {
    const response = await this.openApiV30ReportCustomGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportCustomGetGetWithHttpInfo(request: ReportCustomGetV30ApiOpenApiV30ReportCustomGetGetRequest): Promise<ApiResponse<ReportCustomGetV30Response>> {
    if (request.dimensions == null) {
      throw new ApiException("Missing the required parameter 'dimensions' when calling openApiV30ReportCustomGetGet");
    }

    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportCustomGetGet");
    }

    if (request.metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV30ReportCustomGetGet");
    }

    if (request.filters == null) {
      throw new ApiException("Missing the required parameter 'filters' when calling openApiV30ReportCustomGetGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ReportCustomGetGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ReportCustomGetGet");
    }

    if (request.orderBy == null) {
      throw new ApiException("Missing the required parameter 'orderBy' when calling openApiV30ReportCustomGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportCustomGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/custom/get/",
      queryParams: [
        { name: "dimensions", value: request.dimensions, collectionFormat: "csv" },
        { name: "advertiser_id", value: request.advertiserId },
        { name: "metrics", value: request.metrics, collectionFormat: "csv" },
        { name: "filters", value: request.filters, collectionFormat: "csv" },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "order_by", value: request.orderBy, collectionFormat: "csv" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "data_topic", value: request.dataTopic }
      ]
    });
  }
}


