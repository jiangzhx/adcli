// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalReportAccountGetV30Filtering, LocalReportAccountGetV30OrderType, LocalReportAccountGetV30Response, LocalReportAccountGetV30TimeGranularity } from "../models";


export class LocalReportAccountGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalReportAccountGetGet(localAccountId: number, startDate: string, endDate: string, metrics: string[], timeGranularity: LocalReportAccountGetV30TimeGranularity, orderType: LocalReportAccountGetV30OrderType, orderField: string, filtering: LocalReportAccountGetV30Filtering, page: number, pageSize: number): Promise<LocalReportAccountGetV30Response> {
    const response = await this.openApiV30LocalReportAccountGetGetWithHttpInfo(localAccountId, startDate, endDate, metrics, timeGranularity, orderType, orderField, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30LocalReportAccountGetGetWithHttpInfo(localAccountId: number, startDate: string, endDate: string, metrics: string[], timeGranularity: LocalReportAccountGetV30TimeGranularity, orderType: LocalReportAccountGetV30OrderType, orderField: string, filtering: LocalReportAccountGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<LocalReportAccountGetV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalReportAccountGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30LocalReportAccountGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30LocalReportAccountGetGet");
    }

    if (metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV30LocalReportAccountGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalReportAccountGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/report/account/get/",
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


