// Generated from oceanengine/ad_open_sdk_go api/api_report_product_daily_async_task_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportProductDailyAsyncTaskCreateV30Request } from "../models/index";


export interface ReportProductDailyAsyncTaskCreateV30ApiOpenApiV30ReportProductDailyAsyncTaskCreatePostRequest {
  reportProductDailyAsyncTaskCreateV30Request?: ReportProductDailyAsyncTaskCreateV30Request;
}

export class ReportProductDailyAsyncTaskCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportProductDailyAsyncTaskCreatePost(request: ReportProductDailyAsyncTaskCreateV30ApiOpenApiV30ReportProductDailyAsyncTaskCreatePostRequest): Promise<ArrayBuffer> {
    const response = await this.openApiV30ReportProductDailyAsyncTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportProductDailyAsyncTaskCreatePostWithHttpInfo(request: ReportProductDailyAsyncTaskCreateV30ApiOpenApiV30ReportProductDailyAsyncTaskCreatePostRequest): Promise<ApiResponse<ArrayBuffer>> {

    return this.apiClient.requestWithHttpInfo<ArrayBuffer>({
      method: "POST",
      path: "/open_api/v3.0/report/product_daily/async_task/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.reportProductDailyAsyncTaskCreateV30Request,
      responseType: "arrayBuffer"
    });
  }
}


