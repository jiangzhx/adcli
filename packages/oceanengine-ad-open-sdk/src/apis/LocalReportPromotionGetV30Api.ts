// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalReportPromotionGetV30Filtering, LocalReportPromotionGetV30OrderType, LocalReportPromotionGetV30Response, LocalReportPromotionGetV30TimeGranularity } from "../models";


export class LocalReportPromotionGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalReportPromotionGetGet(localAccountId: number, startDate: string, endDate: string, metrics: string[], timeGranularity: LocalReportPromotionGetV30TimeGranularity, orderType: LocalReportPromotionGetV30OrderType, orderField: string, filtering: LocalReportPromotionGetV30Filtering, page: number, pageSize: number): Promise<LocalReportPromotionGetV30Response> {
    const response = await this.openApiV30LocalReportPromotionGetGetWithHttpInfo(localAccountId, startDate, endDate, metrics, timeGranularity, orderType, orderField, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30LocalReportPromotionGetGetWithHttpInfo(localAccountId: number, startDate: string, endDate: string, metrics: string[], timeGranularity: LocalReportPromotionGetV30TimeGranularity, orderType: LocalReportPromotionGetV30OrderType, orderField: string, filtering: LocalReportPromotionGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<LocalReportPromotionGetV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalReportPromotionGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30LocalReportPromotionGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30LocalReportPromotionGetGet");
    }

    if (metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV30LocalReportPromotionGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalReportPromotionGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/report/promotion/get/",
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


