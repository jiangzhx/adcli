// Generated from tencentad/marketing-api-go-sdk pkg/api/api_hourly_reports.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DateRange, HourlyReportsGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface HourlyReportsApiGetRequest {
  accountId: number | string;
  level: string;
  dateRange: DateRange;
  filtering?: unknown;
  groupBy?: unknown;
  orderBy?: unknown;
  page?: number;
  pageSize?: number;
  timeLine?: string;
  fields?: unknown;
  weixinOfficialAccountsUpgradeEnabled?: boolean;
  adqAccountsUpgradeEnabled?: boolean;
}


export class HourlyReportsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: HourlyReportsApiGetRequest): Promise<HourlyReportsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: HourlyReportsApiGetRequest): Promise<ApiResponse<HourlyReportsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.level == null) {
      throw new ApiException("Missing the required parameter 'level' when calling get");
    }

    if (request.dateRange == null) {
      throw new ApiException("Missing the required parameter 'dateRange' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<HourlyReportsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/hourly_reports/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "level", value: request.level },
        { name: "date_range", value: request.dateRange },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "group_by", value: request.groupBy, collectionFormat: "multi" },
        { name: "order_by", value: request.orderBy, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "time_line", value: request.timeLine },
        { name: "fields", value: request.fields, collectionFormat: "multi" },
        { name: "weixin_official_accounts_upgrade_enabled", value: request.weixinOfficialAccountsUpgradeEnabled },
        { name: "adq_accounts_upgrade_enabled", value: request.adqAccountsUpgradeEnabled }
      ],
      contentType: "text/plain"
    });
  }

}


