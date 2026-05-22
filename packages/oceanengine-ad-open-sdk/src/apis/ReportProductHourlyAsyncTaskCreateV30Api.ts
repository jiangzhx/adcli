// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportProductHourlyAsyncTaskCreateV30Request } from "../models";


export class ReportProductHourlyAsyncTaskCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportProductHourlyAsyncTaskCreatePost(request: ReportProductHourlyAsyncTaskCreateV30Request): Promise<ArrayBuffer> {
    const response = await this.openApiV30ReportProductHourlyAsyncTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportProductHourlyAsyncTaskCreatePostWithHttpInfo(request: ReportProductHourlyAsyncTaskCreateV30Request): Promise<ApiResponse<ArrayBuffer>> {
    return this.apiClient.requestWithHttpInfo<ArrayBuffer>({
      method: "POST",
      path: "/open_api/v3.0/report/product_hourly/async_task/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


