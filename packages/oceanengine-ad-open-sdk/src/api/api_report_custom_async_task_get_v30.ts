// Generated from oceanengine/ad_open_sdk_go api/api_report_custom_async_task_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportCustomAsyncTaskGetV30Filtering, ReportCustomAsyncTaskGetV30Response } from "../models/index";


export interface ReportCustomAsyncTaskGetV30ApiOpenApiV30ReportCustomAsyncTaskGetGetRequest {
  advertiserId: number | string;
  filtering?: ReportCustomAsyncTaskGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class ReportCustomAsyncTaskGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportCustomAsyncTaskGetGet(request: ReportCustomAsyncTaskGetV30ApiOpenApiV30ReportCustomAsyncTaskGetGetRequest): Promise<ReportCustomAsyncTaskGetV30Response> {
    const response = await this.openApiV30ReportCustomAsyncTaskGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportCustomAsyncTaskGetGetWithHttpInfo(request: ReportCustomAsyncTaskGetV30ApiOpenApiV30ReportCustomAsyncTaskGetGetRequest): Promise<ApiResponse<ReportCustomAsyncTaskGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportCustomAsyncTaskGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportCustomAsyncTaskGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/custom/async_task/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


