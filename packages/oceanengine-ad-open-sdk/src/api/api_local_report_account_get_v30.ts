// Generated from oceanengine/ad_open_sdk_go api/api_local_report_account_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalReportAccountGetV30Filtering, LocalReportAccountGetV30OrderType, LocalReportAccountGetV30Response, LocalReportAccountGetV30TimeGranularity } from "../models/index";


export interface LocalReportAccountGetV30ApiOpenApiV30LocalReportAccountGetGetRequest {
  localAccountId: number | string;
  startDate: string;
  endDate: string;
  metrics: string[];
  timeGranularity?: LocalReportAccountGetV30TimeGranularity;
  orderType?: LocalReportAccountGetV30OrderType;
  orderField?: string;
  filtering?: LocalReportAccountGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class LocalReportAccountGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalReportAccountGetGet(request: LocalReportAccountGetV30ApiOpenApiV30LocalReportAccountGetGetRequest): Promise<LocalReportAccountGetV30Response> {
    const response = await this.openApiV30LocalReportAccountGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalReportAccountGetGetWithHttpInfo(request: LocalReportAccountGetV30ApiOpenApiV30LocalReportAccountGetGetRequest): Promise<ApiResponse<LocalReportAccountGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalReportAccountGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30LocalReportAccountGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30LocalReportAccountGetGet");
    }

    if (request.metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV30LocalReportAccountGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalReportAccountGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/report/account/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "time_granularity", value: request.timeGranularity },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "metrics", value: request.metrics, collectionFormat: "csv" },
        { name: "order_type", value: request.orderType },
        { name: "order_field", value: request.orderField },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


