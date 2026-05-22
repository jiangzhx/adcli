// Generated from oceanengine/ad_open_sdk_go api/api_report_product_async_task_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportProductAsyncTaskGetV30Request } from "../models/index";


export interface ReportProductAsyncTaskGetV30ApiOpenApiV30ReportProductAsyncTaskGetPostRequest {
  reportProductAsyncTaskGetV30Request?: ReportProductAsyncTaskGetV30Request;
}

export class ReportProductAsyncTaskGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportProductAsyncTaskGetPost(request: ReportProductAsyncTaskGetV30ApiOpenApiV30ReportProductAsyncTaskGetPostRequest): Promise<ArrayBuffer> {
    const response = await this.openApiV30ReportProductAsyncTaskGetPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportProductAsyncTaskGetPostWithHttpInfo(request: ReportProductAsyncTaskGetV30ApiOpenApiV30ReportProductAsyncTaskGetPostRequest): Promise<ApiResponse<ArrayBuffer>> {

    return this.apiClient.requestWithHttpInfo<ArrayBuffer>({
      method: "POST",
      path: "/open_api/v3.0/report/product/async_task/get/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.reportProductAsyncTaskGetV30Request,
      responseType: "arrayBuffer"
    });
  }
}


