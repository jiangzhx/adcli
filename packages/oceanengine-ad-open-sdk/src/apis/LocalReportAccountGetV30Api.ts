// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalReportAccountGetV30Filtering, LocalReportAccountGetV30OrderType, LocalReportAccountGetV30Response, LocalReportAccountGetV30TimeGranularity } from "../models";


export interface OpenApiV30LocalReportAccountGetGetRequest {
  localAccountId: number;
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

  async openApiV30LocalReportAccountGetGet(request: OpenApiV30LocalReportAccountGetGetRequest): Promise<LocalReportAccountGetV30Response> {
    const response = await this.openApiV30LocalReportAccountGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalReportAccountGetGetWithHttpInfo(request: OpenApiV30LocalReportAccountGetGetRequest): Promise<ApiResponse<LocalReportAccountGetV30Response>> {
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


