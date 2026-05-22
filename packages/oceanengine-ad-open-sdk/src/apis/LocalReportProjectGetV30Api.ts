// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalReportProjectGetV30Filtering, LocalReportProjectGetV30OrderType, LocalReportProjectGetV30Response, LocalReportProjectGetV30TimeGranularity } from "../models";


export class LocalReportProjectGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalReportProjectGetGet(localAccountId: number, startDate: string, endDate: string, metrics: string[], timeGranularity: LocalReportProjectGetV30TimeGranularity, orderType: LocalReportProjectGetV30OrderType, orderField: string, filtering: LocalReportProjectGetV30Filtering, page: number, pageSize: number): Promise<LocalReportProjectGetV30Response> {
    const response = await this.openApiV30LocalReportProjectGetGetWithHttpInfo(localAccountId, startDate, endDate, metrics, timeGranularity, orderType, orderField, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30LocalReportProjectGetGetWithHttpInfo(localAccountId: number, startDate: string, endDate: string, metrics: string[], timeGranularity: LocalReportProjectGetV30TimeGranularity, orderType: LocalReportProjectGetV30OrderType, orderField: string, filtering: LocalReportProjectGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<LocalReportProjectGetV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalReportProjectGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30LocalReportProjectGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30LocalReportProjectGetGet");
    }

    if (metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV30LocalReportProjectGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalReportProjectGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/report/project/get/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "time_granularity", value: timeGranularity },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "order_type", value: orderType },
        { name: "order_field", value: orderField },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "metrics", value: metrics, collectionFormat: "csv" }
      ]
    });
  }
}


