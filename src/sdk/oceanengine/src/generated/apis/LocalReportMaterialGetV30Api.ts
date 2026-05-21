// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalReportMaterialGetV30Filtering, LocalReportMaterialGetV30OrderType, LocalReportMaterialGetV30Response, LocalReportMaterialGetV30TimeGranularity } from "../models";


export class LocalReportMaterialGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalReportMaterialGetGet(localAccountId: number, startDate: string, endDate: string, metrics: string[], timeGranularity: LocalReportMaterialGetV30TimeGranularity, orderType: LocalReportMaterialGetV30OrderType, orderField: string, filtering: LocalReportMaterialGetV30Filtering, page: number, pageSize: number): Promise<LocalReportMaterialGetV30Response> {
    const response = await this.openApiV30LocalReportMaterialGetGetWithHttpInfo(localAccountId, startDate, endDate, metrics, timeGranularity, orderType, orderField, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30LocalReportMaterialGetGetWithHttpInfo(localAccountId: number, startDate: string, endDate: string, metrics: string[], timeGranularity: LocalReportMaterialGetV30TimeGranularity, orderType: LocalReportMaterialGetV30OrderType, orderField: string, filtering: LocalReportMaterialGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<LocalReportMaterialGetV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalReportMaterialGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30LocalReportMaterialGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30LocalReportMaterialGetGet");
    }

    if (metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV30LocalReportMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalReportMaterialGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/report/material/get/",
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


