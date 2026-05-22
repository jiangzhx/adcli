// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalReportMaterialGetV30Filtering, LocalReportMaterialGetV30OrderType, LocalReportMaterialGetV30Response, LocalReportMaterialGetV30TimeGranularity } from "../models";


export interface OpenApiV30LocalReportMaterialGetGetRequest {
  localAccountId: number | string;
  startDate: string;
  endDate: string;
  metrics: string[];
  timeGranularity?: LocalReportMaterialGetV30TimeGranularity;
  orderType?: LocalReportMaterialGetV30OrderType;
  orderField?: string;
  filtering?: LocalReportMaterialGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class LocalReportMaterialGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalReportMaterialGetGet(request: OpenApiV30LocalReportMaterialGetGetRequest): Promise<LocalReportMaterialGetV30Response> {
    const response = await this.openApiV30LocalReportMaterialGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalReportMaterialGetGetWithHttpInfo(request: OpenApiV30LocalReportMaterialGetGetRequest): Promise<ApiResponse<LocalReportMaterialGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalReportMaterialGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30LocalReportMaterialGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30LocalReportMaterialGetGet");
    }

    if (request.metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV30LocalReportMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalReportMaterialGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/report/material/get/",
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


