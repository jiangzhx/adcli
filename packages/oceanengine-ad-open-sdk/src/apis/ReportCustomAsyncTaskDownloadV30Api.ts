// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";


export class ReportCustomAsyncTaskDownloadV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportCustomAsyncTaskDownloadGet(advertiserId: number, taskId: number): Promise<ArrayBuffer> {
    const response = await this.openApiV30ReportCustomAsyncTaskDownloadGetWithHttpInfo(advertiserId, taskId);
    return response.data;
  }

  async openApiV30ReportCustomAsyncTaskDownloadGetWithHttpInfo(advertiserId: number, taskId: number): Promise<ApiResponse<ArrayBuffer>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportCustomAsyncTaskDownloadGet");
    }

    if (taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApiV30ReportCustomAsyncTaskDownloadGet");
    }
    return this.apiClient.requestWithHttpInfo<ArrayBuffer>({
      method: "GET",
      path: "/open_api/v3.0/report/custom/async_task/download/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "task_id", value: taskId }
      ]
    });
  }
}


