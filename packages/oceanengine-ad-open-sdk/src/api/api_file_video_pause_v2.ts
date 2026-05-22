// Generated from oceanengine/ad_open_sdk_go api/api_file_video_pause_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileVideoPauseV2Request, FileVideoPauseV2Response } from "../models/index";


export interface FileVideoPauseV2ApiOpenApi2FileVideoPausePostRequest {
  fileVideoPauseV2Request?: FileVideoPauseV2Request;
}

export class FileVideoPauseV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoPausePost(request: FileVideoPauseV2ApiOpenApi2FileVideoPausePostRequest): Promise<FileVideoPauseV2Response> {
    const response = await this.openApi2FileVideoPausePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoPausePostWithHttpInfo(request: FileVideoPauseV2ApiOpenApi2FileVideoPausePostRequest): Promise<ApiResponse<FileVideoPauseV2Response>> {

    return this.apiClient.requestWithHttpInfo<FileVideoPauseV2Response>({
      method: "POST",
      path: "/open_api/2/file/video/pause/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.fileVideoPauseV2Request
    });
  }
}


