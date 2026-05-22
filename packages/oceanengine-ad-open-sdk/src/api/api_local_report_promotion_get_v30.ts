// Generated from oceanengine/ad_open_sdk_go api/api_local_report_promotion_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalReportPromotionGetV30Filtering, LocalReportPromotionGetV30OrderType, LocalReportPromotionGetV30Response, LocalReportPromotionGetV30TimeGranularity } from "../models/index";


export interface LocalReportPromotionGetV30ApiOpenApiV30LocalReportPromotionGetGetRequest {
  localAccountId: number | string;
  startDate: string;
  endDate: string;
  metrics: string[];
  timeGranularity?: LocalReportPromotionGetV30TimeGranularity;
  orderType?: LocalReportPromotionGetV30OrderType;
  orderField?: string;
  filtering?: LocalReportPromotionGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class LocalReportPromotionGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalReportPromotionGetGet(request: LocalReportPromotionGetV30ApiOpenApiV30LocalReportPromotionGetGetRequest): Promise<LocalReportPromotionGetV30Response> {
    const response = await this.openApiV30LocalReportPromotionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalReportPromotionGetGetWithHttpInfo(request: LocalReportPromotionGetV30ApiOpenApiV30LocalReportPromotionGetGetRequest): Promise<ApiResponse<LocalReportPromotionGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalReportPromotionGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30LocalReportPromotionGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30LocalReportPromotionGetGet");
    }

    if (request.metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV30LocalReportPromotionGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalReportPromotionGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/report/promotion/get/",
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


