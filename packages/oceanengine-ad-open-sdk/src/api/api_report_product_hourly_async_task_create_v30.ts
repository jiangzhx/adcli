// Generated from oceanengine/ad_open_sdk_go api/api_report_product_hourly_async_task_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportProductHourlyAsyncTaskCreateV30Request } from "../models/index";


export interface ReportProductHourlyAsyncTaskCreateV30ApiOpenApiV30ReportProductHourlyAsyncTaskCreatePostRequest {
  reportProductHourlyAsyncTaskCreateV30Request?: ReportProductHourlyAsyncTaskCreateV30Request;
}

export class ReportProductHourlyAsyncTaskCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportProductHourlyAsyncTaskCreatePost(request: ReportProductHourlyAsyncTaskCreateV30ApiOpenApiV30ReportProductHourlyAsyncTaskCreatePostRequest): Promise<ArrayBuffer> {
    const response = await this.openApiV30ReportProductHourlyAsyncTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportProductHourlyAsyncTaskCreatePostWithHttpInfo(request: ReportProductHourlyAsyncTaskCreateV30ApiOpenApiV30ReportProductHourlyAsyncTaskCreatePostRequest): Promise<ApiResponse<ArrayBuffer>> {

    return this.apiClient.requestWithHttpInfo<ArrayBuffer>({
      method: "POST",
      path: "/open_api/v3.0/report/product_hourly/async_task/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.reportProductHourlyAsyncTaskCreateV30Request,
      responseType: "arrayBuffer"
    });
  }
}


