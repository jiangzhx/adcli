// Generated from oceanengine/ad_open_sdk_go api/api_report_custom_async_task_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportCustomAsyncTaskCreateV30Request, ReportCustomAsyncTaskCreateV30Response } from "../models/index";


export interface ReportCustomAsyncTaskCreateV30ApiOpenApiV30ReportCustomAsyncTaskCreatePostRequest {
  reportCustomAsyncTaskCreateV30Request?: ReportCustomAsyncTaskCreateV30Request;
}

export class ReportCustomAsyncTaskCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportCustomAsyncTaskCreatePost(request: ReportCustomAsyncTaskCreateV30ApiOpenApiV30ReportCustomAsyncTaskCreatePostRequest): Promise<ReportCustomAsyncTaskCreateV30Response> {
    const response = await this.openApiV30ReportCustomAsyncTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportCustomAsyncTaskCreatePostWithHttpInfo(request: ReportCustomAsyncTaskCreateV30ApiOpenApiV30ReportCustomAsyncTaskCreatePostRequest): Promise<ApiResponse<ReportCustomAsyncTaskCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ReportCustomAsyncTaskCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/report/custom/async_task/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.reportCustomAsyncTaskCreateV30Request
    });
  }
}


