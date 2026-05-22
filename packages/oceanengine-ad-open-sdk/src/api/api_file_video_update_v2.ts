// Generated from oceanengine/ad_open_sdk_go api/api_file_video_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileVideoUpdateV2Request, FileVideoUpdateV2Response } from "../models/index";


export interface FileVideoUpdateV2ApiOpenApi2FileVideoUpdatePostRequest {
  fileVideoUpdateV2Request?: FileVideoUpdateV2Request;
}

export class FileVideoUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoUpdatePost(request: FileVideoUpdateV2ApiOpenApi2FileVideoUpdatePostRequest): Promise<FileVideoUpdateV2Response> {
    const response = await this.openApi2FileVideoUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoUpdatePostWithHttpInfo(request: FileVideoUpdateV2ApiOpenApi2FileVideoUpdatePostRequest): Promise<ApiResponse<FileVideoUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<FileVideoUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/file/video/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.fileVideoUpdateV2Request
    });
  }
}


