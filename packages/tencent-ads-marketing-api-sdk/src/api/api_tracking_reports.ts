// Generated from tencentad/marketing-api-go-sdk pkg/api/api_tracking_reports.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DateRange, TrackingReportsGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface TrackingReportsApiGetRequest {
  accountId: number | string;
  dateRange: DateRange;
  timeGranularity?: string;
  promotedObjectType?: string;
  promotedObjectId?: string;
  feedbackUrl?: string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class TrackingReportsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: TrackingReportsApiGetRequest): Promise<TrackingReportsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: TrackingReportsApiGetRequest): Promise<ApiResponse<TrackingReportsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.dateRange == null) {
      throw new ApiException("Missing the required parameter 'dateRange' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<TrackingReportsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/tracking_reports/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "date_range", value: request.dateRange },
        { name: "time_granularity", value: request.timeGranularity },
        { name: "promoted_object_type", value: request.promotedObjectType },
        { name: "promoted_object_id", value: request.promotedObjectId },
        { name: "feedback_url", value: request.feedbackUrl },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


