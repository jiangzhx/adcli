// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";


export class AsyncTaskDownloadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AsyncTaskDownloadGet(advertiserId: number, taskId: number, rangeFrom: number, rangeTo: number): Promise<ArrayBuffer> {
    const response = await this.openApi2AsyncTaskDownloadGetWithHttpInfo(advertiserId, taskId, rangeFrom, rangeTo);
    return response.data;
  }

  async openApi2AsyncTaskDownloadGetWithHttpInfo(advertiserId: number, taskId: number, rangeFrom: number, rangeTo: number): Promise<ApiResponse<ArrayBuffer>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AsyncTaskDownloadGet");
    }

    if (taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2AsyncTaskDownloadGet");
    }
    return this.apiClient.requestWithHttpInfo<ArrayBuffer>({
      method: "GET",
      path: "/open_api/2/async_task/download/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "task_id", value: taskId },
        { name: "range_from", value: rangeFrom },
        { name: "range_to", value: rangeTo }
      ]
    });
  }
}


