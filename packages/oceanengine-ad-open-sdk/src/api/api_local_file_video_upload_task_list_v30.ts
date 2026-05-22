// Generated from oceanengine/ad_open_sdk_go api/api_local_file_video_upload_task_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalFileVideoUploadTaskListV30Response } from "../models/index";


export interface LocalFileVideoUploadTaskListV30ApiOpenApiV30LocalFileVideoUploadTaskListGetRequest {
  localAccountId: number | string;
  taskIds: (number | string)[];
}

export class LocalFileVideoUploadTaskListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalFileVideoUploadTaskListGet(request: LocalFileVideoUploadTaskListV30ApiOpenApiV30LocalFileVideoUploadTaskListGetRequest): Promise<LocalFileVideoUploadTaskListV30Response> {
    const response = await this.openApiV30LocalFileVideoUploadTaskListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalFileVideoUploadTaskListGetWithHttpInfo(request: LocalFileVideoUploadTaskListV30ApiOpenApiV30LocalFileVideoUploadTaskListGetRequest): Promise<ApiResponse<LocalFileVideoUploadTaskListV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("localAccountId is required and must be specified");
    }

    if (request.taskIds == null) {
      throw new ApiException("taskIds is required and must be specified");
    }

    if (request.taskIds != null && request.taskIds.length < 1) {
      throw new ApiException("taskIds must have at least 1 elements");
    }

    if (request.taskIds != null && request.taskIds.length > 100) {
      throw new ApiException("taskIds must have less than 100 elements");
    }
    return this.apiClient.requestWithHttpInfo<LocalFileVideoUploadTaskListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/file/video/upload_task/list/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "task_ids", value: request.taskIds }
      ]
    });
  }
}


