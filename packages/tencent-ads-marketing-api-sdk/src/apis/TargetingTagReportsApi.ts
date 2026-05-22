// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportDateRange, TargetingTagReportsGetResponseData } from "../models";

export interface TargetingTagReportsApiGetRequest {
  accountId: number | string;
  type_: string;
  level: string;
  dateRange: ReportDateRange;
  posType?: string;
  filtering?: unknown;
  groupBy?: unknown;
  orderBy?: unknown;
  page?: number;
  pageSize?: number;
  timeLine?: string;
  weixinOfficialAccountsUpgradeEnabled?: boolean;
  adqAccountsUpgradeEnabled?: boolean;
  fields?: unknown;
}


export class TargetingTagReportsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: TargetingTagReportsApiGetRequest): Promise<TargetingTagReportsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: TargetingTagReportsApiGetRequest): Promise<ApiResponse<TargetingTagReportsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.type_ == null) {
      throw new ApiException("Missing the required parameter 'type_' when calling get");
    }

    if (request.level == null) {
      throw new ApiException("Missing the required parameter 'level' when calling get");
    }

    if (request.dateRange == null) {
      throw new ApiException("Missing the required parameter 'dateRange' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<TargetingTagReportsGetResponseData>({
      method: "GET",
      path: "/targeting_tag_reports/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "type", value: request.type_ },
        { name: "level", value: request.level },
        { name: "date_range", value: request.dateRange },
        { name: "pos_type", value: request.posType },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "group_by", value: request.groupBy, collectionFormat: "multi" },
        { name: "order_by", value: request.orderBy, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "time_line", value: request.timeLine },
        { name: "weixin_official_accounts_upgrade_enabled", value: request.weixinOfficialAccountsUpgradeEnabled },
        { name: "adq_accounts_upgrade_enabled", value: request.adqAccountsUpgradeEnabled },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


