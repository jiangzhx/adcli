// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { HourlyReportDateRange, HourlyReportsGetResponseData } from "../models";

export interface V3HourlyReportsApiGetRequest {
  accountId: number | string;
  level: string;
  dateRange: HourlyReportDateRange;
  groupBy: string[];
  fields: string[];
  filtering?: unknown;
  orderBy?: unknown;
  timeLine?: string;
  page?: number;
  pageSize?: number;
}


export class V3HourlyReportsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3HourlyReportsApiGetRequest): Promise<HourlyReportsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3HourlyReportsApiGetRequest): Promise<ApiResponse<HourlyReportsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

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
    return this.apiClient.requestWithHttpInfo<HourlyReportsGetResponseData>({
      method: "GET",
      path: "/hourly_reports/get",
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
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


