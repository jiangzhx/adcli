// Generated from oceanengine/ad_open_sdk_go api/api_file_video_delete_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileVideoDeleteV2Request, FileVideoDeleteV2Response } from "../models/index";


export interface FileVideoDeleteV2ApiOpenApi2FileVideoDeletePostRequest {
  fileVideoDeleteV2Request?: FileVideoDeleteV2Request;
}

export class FileVideoDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoDeletePost(request: FileVideoDeleteV2ApiOpenApi2FileVideoDeletePostRequest): Promise<FileVideoDeleteV2Response> {
    const response = await this.openApi2FileVideoDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoDeletePostWithHttpInfo(request: FileVideoDeleteV2ApiOpenApi2FileVideoDeletePostRequest): Promise<ApiResponse<FileVideoDeleteV2Response>> {

    return this.apiClient.requestWithHttpInfo<FileVideoDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/file/video/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.fileVideoDeleteV2Request
    });
  }
}


