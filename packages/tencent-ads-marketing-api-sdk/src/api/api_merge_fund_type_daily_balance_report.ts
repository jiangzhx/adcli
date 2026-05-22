// Generated from tencentad/marketing-api-go-sdk pkg/api/api_merge_fund_type_daily_balance_report.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DateRangeTransaction, MergeFundTypeDailyBalanceReportGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface MergeFundTypeDailyBalanceReportApiGetRequest {
  accountId: number | string;
  dateRange: DateRangeTransaction;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class MergeFundTypeDailyBalanceReportApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: MergeFundTypeDailyBalanceReportApiGetRequest): Promise<MergeFundTypeDailyBalanceReportGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: MergeFundTypeDailyBalanceReportApiGetRequest): Promise<ApiResponse<MergeFundTypeDailyBalanceReportGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.dateRange == null) {
      throw new ApiException("Missing the required parameter 'dateRange' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<MergeFundTypeDailyBalanceReportGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/merge_fund_type_daily_balance_report/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "date_range", value: request.dateRange },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


