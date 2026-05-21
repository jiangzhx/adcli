// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalFileVideoUploadTaskListV30Response } from "../models";


export class LocalFileVideoUploadTaskListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalFileVideoUploadTaskListGet(localAccountId: number, taskIds: number[]): Promise<LocalFileVideoUploadTaskListV30Response> {
    const response = await this.openApiV30LocalFileVideoUploadTaskListGetWithHttpInfo(localAccountId, taskIds);
    return response.data;
  }

  async openApiV30LocalFileVideoUploadTaskListGetWithHttpInfo(localAccountId: number, taskIds: number[]): Promise<ApiResponse<LocalFileVideoUploadTaskListV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalFileVideoUploadTaskListGet");
    }

    if (taskIds == null) {
      throw new ApiException("Missing the required parameter 'taskIds' when calling openApiV30LocalFileVideoUploadTaskListGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalFileVideoUploadTaskListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/file/video/upload_task/list/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "task_ids", value: taskIds, collectionFormat: "csv" }
      ]
    });
  }
}


