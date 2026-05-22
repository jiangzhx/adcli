// Generated from oceanengine/ad_open_sdk_go api/api_local_report_material_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalReportMaterialGetV30Filtering, LocalReportMaterialGetV30OrderType, LocalReportMaterialGetV30Response, LocalReportMaterialGetV30TimeGranularity } from "../models/index";


export interface LocalReportMaterialGetV30ApiOpenApiV30LocalReportMaterialGetGetRequest {
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

  async openApiV30LocalReportMaterialGetGet(request: LocalReportMaterialGetV30ApiOpenApiV30LocalReportMaterialGetGetRequest): Promise<LocalReportMaterialGetV30Response> {
    const response = await this.openApiV30LocalReportMaterialGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalReportMaterialGetGetWithHttpInfo(request: LocalReportMaterialGetV30ApiOpenApiV30LocalReportMaterialGetGetRequest): Promise<ApiResponse<LocalReportMaterialGetV30Response>> {
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
        { name: "metrics", value: request.metrics },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


