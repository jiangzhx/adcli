// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileUploadTaskCreateV2Request, FileUploadTaskCreateV2Response } from "../models";


export class FileUploadTaskCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileUploadTaskCreatePost(request: FileUploadTaskCreateV2Request): Promise<FileUploadTaskCreateV2Response> {
    const response = await this.openApi2FileUploadTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileUploadTaskCreatePostWithHttpInfo(request: FileUploadTaskCreateV2Request): Promise<ApiResponse<FileUploadTaskCreateV2Response>> {
    return this.apiClient.requestWithHttpInfo<FileUploadTaskCreateV2Response>({
      method: "POST",
      path: "/open_api/2/file/upload_task/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


