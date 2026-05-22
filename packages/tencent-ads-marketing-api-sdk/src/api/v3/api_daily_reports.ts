// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_daily_reports.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DailyReportsGetResponseData, ReportDateRange } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface DailyReportsApiGetRequest {
  level: string;
  dateRange: ReportDateRange;
  groupBy: string[];
  fields: string[];
  accountId?: number | string;
  filtering?: unknown;
  orderBy?: unknown;
  timeLine?: string;
  page?: number;
  pageSize?: number;
  organizationId?: number | string;
}


export class DailyReportsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: DailyReportsApiGetRequest): Promise<DailyReportsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: DailyReportsApiGetRequest): Promise<ApiResponse<DailyReportsGetResponseData>> {
    if (request.level == null) {
      throw new ApiException("Missing the required parameter 'level' when calling get");
    }

    if (request.dateRange == null) {
      throw new ApiException("Missing the required parameter 'dateRange' when calling get");
    }

    if (request.groupBy == null) {
      throw new ApiException("Missing the required parameter 'groupBy' when calling get");
    }

    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<DailyReportsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/daily_reports/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "level", value: request.level },
        { name: "date_range", value: request.dateRange },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "group_by", value: request.groupBy, collectionFormat: "multi" },
        { name: "order_by", value: request.orderBy, collectionFormat: "multi" },
        { name: "time_line", value: request.timeLine },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" },
        { name: "organization_id", value: request.organizationId }
      ],
      contentType: "text/plain"
    });
  }

}


