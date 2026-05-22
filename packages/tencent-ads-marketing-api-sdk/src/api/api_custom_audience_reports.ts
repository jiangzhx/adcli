// Generated from tencentad/marketing-api-go-sdk pkg/api/api_custom_audience_reports.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CustomAudienceReportsGetResponseData, DateRange, FilteringStruct } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface CustomAudienceReportsApiGetRequest {
  accountId: number | string;
  filtering: FilteringStruct[];
  dateRange: DateRange;
  groupBy?: unknown;
  fields?: unknown;
}


export class CustomAudienceReportsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: CustomAudienceReportsApiGetRequest): Promise<CustomAudienceReportsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CustomAudienceReportsApiGetRequest): Promise<ApiResponse<CustomAudienceReportsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling get");
    }

    if (request.dateRange == null) {
      throw new ApiException("Missing the required parameter 'dateRange' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CustomAudienceReportsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/custom_audience_reports/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "date_range", value: request.dateRange },
        { name: "group_by", value: request.groupBy, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


