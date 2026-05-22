// Generated from oceanengine/ad_open_sdk_go api/api_local_report_project_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalReportProjectGetV30Filtering, LocalReportProjectGetV30OrderType, LocalReportProjectGetV30Response, LocalReportProjectGetV30TimeGranularity } from "../models/index";


export interface LocalReportProjectGetV30ApiOpenApiV30LocalReportProjectGetGetRequest {
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

  async openApiV30LocalReportProjectGetGet(request: LocalReportProjectGetV30ApiOpenApiV30LocalReportProjectGetGetRequest): Promise<LocalReportProjectGetV30Response> {
    const response = await this.openApiV30LocalReportProjectGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalReportProjectGetGetWithHttpInfo(request: LocalReportProjectGetV30ApiOpenApiV30LocalReportProjectGetGetRequest): Promise<ApiResponse<LocalReportProjectGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("localAccountId is required and must be specified");
    }

    if (request.startDate == null) {
      throw new ApiException("startDate is required and must be specified");
    }

    if (request.endDate == null) {
      throw new ApiException("endDate is required and must be specified");
    }

    if (request.metrics == null) {
      throw new ApiException("metrics is required and must be specified");
    }

    if (request.metrics != null && request.metrics.length < 1) {
      throw new ApiException("metrics must have at least 1 elements");
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
        { name: "metrics", value: request.metrics },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


