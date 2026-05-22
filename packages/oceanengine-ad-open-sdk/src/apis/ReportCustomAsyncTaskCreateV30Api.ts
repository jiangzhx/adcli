// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportCustomAsyncTaskCreateV30Request, ReportCustomAsyncTaskCreateV30Response } from "../models";


export interface OpenApiV30ReportCustomAsyncTaskCreatePostRequest {
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

  async openApiV30ReportCustomAsyncTaskCreatePost(request: OpenApiV30ReportCustomAsyncTaskCreatePostRequest): Promise<ReportCustomAsyncTaskCreateV30Response> {
    const response = await this.openApiV30ReportCustomAsyncTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportCustomAsyncTaskCreatePostWithHttpInfo(request: OpenApiV30ReportCustomAsyncTaskCreatePostRequest): Promise<ApiResponse<ReportCustomAsyncTaskCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ReportCustomAsyncTaskCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/report/custom/async_task/create/",
      queryParams: [

      ],
      body: request.reportCustomAsyncTaskCreateV30Request
    });
  }
}


