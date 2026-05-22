// Generated from oceanengine/ad_open_sdk_go api/api_file_upload_task_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileUploadTaskCreateV2Request, FileUploadTaskCreateV2Response } from "../models/index";


export interface FileUploadTaskCreateV2ApiOpenApi2FileUploadTaskCreatePostRequest {
  fileUploadTaskCreateV2Request?: FileUploadTaskCreateV2Request;
}

export class FileUploadTaskCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileUploadTaskCreatePost(request: FileUploadTaskCreateV2ApiOpenApi2FileUploadTaskCreatePostRequest): Promise<FileUploadTaskCreateV2Response> {
    const response = await this.openApi2FileUploadTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileUploadTaskCreatePostWithHttpInfo(request: FileUploadTaskCreateV2ApiOpenApi2FileUploadTaskCreatePostRequest): Promise<ApiResponse<FileUploadTaskCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<FileUploadTaskCreateV2Response>({
      method: "POST",
      path: "/open_api/2/file/upload_task/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.fileUploadTaskCreateV2Request
    });
  }
}


