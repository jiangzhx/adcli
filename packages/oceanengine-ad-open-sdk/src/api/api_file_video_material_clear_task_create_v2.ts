// Generated from oceanengine/ad_open_sdk_go api/api_file_video_material_clear_task_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileVideoMaterialClearTaskCreateV2Request, FileVideoMaterialClearTaskCreateV2Response } from "../models/index";


export interface FileVideoMaterialClearTaskCreateV2ApiOpenApi2FileVideoMaterialClearTaskCreatePostRequest {
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

  async openApi2FileVideoMaterialClearTaskCreatePost(request: FileVideoMaterialClearTaskCreateV2ApiOpenApi2FileVideoMaterialClearTaskCreatePostRequest): Promise<FileVideoMaterialClearTaskCreateV2Response> {
    const response = await this.openApi2FileVideoMaterialClearTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoMaterialClearTaskCreatePostWithHttpInfo(request: FileVideoMaterialClearTaskCreateV2ApiOpenApi2FileVideoMaterialClearTaskCreatePostRequest): Promise<ApiResponse<FileVideoMaterialClearTaskCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<FileVideoMaterialClearTaskCreateV2Response>({
      method: "POST",
      path: "/open_api/2/file/video/material/clear_task/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.fileVideoMaterialClearTaskCreateV2Request
    });
  }
}


