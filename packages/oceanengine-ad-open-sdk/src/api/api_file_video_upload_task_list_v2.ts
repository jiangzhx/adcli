// Generated from oceanengine/ad_open_sdk_go api/api_file_video_upload_task_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileVideoUploadTaskListV2AccountType, FileVideoUploadTaskListV2Response } from "../models/index";


export interface FileVideoUploadTaskListV2ApiOpenApi2FileVideoUploadTaskListGetRequest {
  accountId: number | string;
  accountType: FileVideoUploadTaskListV2AccountType;
  taskIds: number | string[];
}

export class FileVideoUploadTaskListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoUploadTaskListGet(request: FileVideoUploadTaskListV2ApiOpenApi2FileVideoUploadTaskListGetRequest): Promise<FileVideoUploadTaskListV2Response> {
    const response = await this.openApi2FileVideoUploadTaskListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoUploadTaskListGetWithHttpInfo(request: FileVideoUploadTaskListV2ApiOpenApi2FileVideoUploadTaskListGetRequest): Promise<ApiResponse<FileVideoUploadTaskListV2Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApi2FileVideoUploadTaskListGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApi2FileVideoUploadTaskListGet");
    }

    if (request.taskIds == null) {
      throw new ApiException("Missing the required parameter 'taskIds' when calling openApi2FileVideoUploadTaskListGet");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoUploadTaskListV2Response>({
      method: "GET",
      path: "/open_api/2/file/video/upload_task/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "task_ids", value: request.taskIds, collectionFormat: "csv" }
      ]
    });
  }
}


