// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ReportProductAsyncTaskGetV30Request } from "../models";


export class ReportProductAsyncTaskGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportProductAsyncTaskGetPost(reportProductAsyncTaskGetV30Request: ReportProductAsyncTaskGetV30Request): Promise<ArrayBuffer> {
    const response = await this.openApiV30ReportProductAsyncTaskGetPostWithHttpInfo(reportProductAsyncTaskGetV30Request);
    return response.data;
  }

  async openApiV30ReportProductAsyncTaskGetPostWithHttpInfo(reportProductAsyncTaskGetV30Request: ReportProductAsyncTaskGetV30Request): Promise<ApiResponse<ArrayBuffer>> {

    return this.apiClient.requestWithHttpInfo<ArrayBuffer>({
      method: "POST",
      path: "/open_api/v3.0/report/product/async_task/get/",
      queryParams: [

      ],
      body: reportProductAsyncTaskGetV30Request
    });
  }
}


