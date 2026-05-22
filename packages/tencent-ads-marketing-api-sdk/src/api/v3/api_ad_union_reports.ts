// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_ad_union_reports.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdUnionReportsGetResponseData, ReportDateRange } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface AdUnionReportsApiGetRequest {
  accountId: number | string;
  dateRange: ReportDateRange;
  fields: string[];
  filtering?: unknown;
  groupBy?: unknown;
  orderBy?: unknown;
  page?: number;
  pageSize?: number;
}


export class AdUnionReportsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AdUnionReportsApiGetRequest): Promise<AdUnionReportsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdUnionReportsApiGetRequest): Promise<ApiResponse<AdUnionReportsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.dateRange == null) {
      throw new ApiException("Missing the required parameter 'dateRange' when calling get");
    }

    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdUnionReportsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/ad_union_reports/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering },
        { name: "date_range", value: request.dateRange },
        { name: "group_by", value: request.groupBy, collectionFormat: "multi" },
        { name: "order_by", value: request.orderBy, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


