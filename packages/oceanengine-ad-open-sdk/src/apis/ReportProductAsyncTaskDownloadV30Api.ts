// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";


export class ReportProductAsyncTaskDownloadV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportProductAsyncTaskDownloadGet(advertiserId: number, taskId: number, rangeFrom: number, rangeTo: number): Promise<ArrayBuffer> {
    const response = await this.openApiV30ReportProductAsyncTaskDownloadGetWithHttpInfo(advertiserId, taskId, rangeFrom, rangeTo);
    return response.data;
  }

  async openApiV30ReportProductAsyncTaskDownloadGetWithHttpInfo(advertiserId: number, taskId: number, rangeFrom: number, rangeTo: number): Promise<ApiResponse<ArrayBuffer>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportProductAsyncTaskDownloadGet");
    }

    if (taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApiV30ReportProductAsyncTaskDownloadGet");
    }
    return this.apiClient.requestWithHttpInfo<ArrayBuffer>({
      method: "GET",
      path: "/open_api/v3.0/report/product/async_task/download/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "task_id", value: taskId },
        { name: "range_from", value: rangeFrom },
        { name: "range_to", value: rangeTo }
      ]
    });
  }
}


