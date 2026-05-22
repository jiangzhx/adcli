// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileVideoMaterialClearTaskCreateV2Request, FileVideoMaterialClearTaskCreateV2Response } from "../models";


export interface OpenApi2FileVideoMaterialClearTaskCreatePostRequest {
  fileVideoMaterialClearTaskCreateV2Request?: FileVideoMaterialClearTaskCreateV2Request;
}

export class FileVideoMaterialClearTaskCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoMaterialClearTaskCreatePost(request: OpenApi2FileVideoMaterialClearTaskCreatePostRequest): Promise<FileVideoMaterialClearTaskCreateV2Response> {
    const response = await this.openApi2FileVideoMaterialClearTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoMaterialClearTaskCreatePostWithHttpInfo(request: OpenApi2FileVideoMaterialClearTaskCreatePostRequest): Promise<ApiResponse<FileVideoMaterialClearTaskCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<FileVideoMaterialClearTaskCreateV2Response>({
      method: "POST",
      path: "/open_api/2/file/video/material/clear_task/create/",
      queryParams: [

      ],
      body: request.fileVideoMaterialClearTaskCreateV2Request
    });
  }
}


