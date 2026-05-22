// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalReportProjectGetV30Filtering, LocalReportProjectGetV30OrderType, LocalReportProjectGetV30Response, LocalReportProjectGetV30TimeGranularity } from "../models";


export interface OpenApiV30LocalReportProjectGetGetRequest {
  localAccountId: number | string;
  startDate: string;
  endDate: string;
  metrics: string[];
  timeGranularity?: LocalReportProjectGetV30TimeGranularity;
  orderType?: LocalReportProjectGetV30OrderType;
  orderField?: string;
  filtering?: LocalReportProjectGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class LocalReportProjectGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalReportProjectGetGet(request: OpenApiV30LocalReportProjectGetGetRequest): Promise<LocalReportProjectGetV30Response> {
    const response = await this.openApiV30LocalReportProjectGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalReportProjectGetGetWithHttpInfo(request: OpenApiV30LocalReportProjectGetGetRequest): Promise<ApiResponse<LocalReportProjectGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalReportProjectGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30LocalReportProjectGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30LocalReportProjectGetGet");
    }

    if (request.metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV30LocalReportProjectGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalReportProjectGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/report/project/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "time_granularity", value: request.timeGranularity },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "order_type", value: request.orderType },
        { name: "order_field", value: request.orderField },
        { name: "metrics", value: request.metrics, collectionFormat: "csv" },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


