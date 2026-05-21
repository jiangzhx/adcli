// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { FileVideoUploadTaskListV2AccountType, FileVideoUploadTaskListV2Response } from "../models";


export class FileVideoUploadTaskListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoUploadTaskListGet(accountId: number, accountType: FileVideoUploadTaskListV2AccountType, taskIds: number[]): Promise<FileVideoUploadTaskListV2Response> {
    const response = await this.openApi2FileVideoUploadTaskListGetWithHttpInfo(accountId, accountType, taskIds);
    return response.data;
  }

  async openApi2FileVideoUploadTaskListGetWithHttpInfo(accountId: number, accountType: FileVideoUploadTaskListV2AccountType, taskIds: number[]): Promise<ApiResponse<FileVideoUploadTaskListV2Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApi2FileVideoUploadTaskListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApi2FileVideoUploadTaskListGet");
    }

    if (taskIds == null) {
      throw new ApiException("Missing the required parameter 'taskIds' when calling openApi2FileVideoUploadTaskListGet");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoUploadTaskListV2Response>({
      method: "GET",
      path: "/open_api/2/file/video/upload_task/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "task_ids", value: taskIds, collectionFormat: "csv" }
      ]
    });
  }
}


