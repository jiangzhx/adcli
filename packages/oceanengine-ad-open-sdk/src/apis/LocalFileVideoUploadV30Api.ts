// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalFileVideoUploadV30RequestVideoFile, LocalFileVideoUploadV30Response } from "../models";


export class LocalFileVideoUploadV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalFileVideoUploadPost(filename: string, localAccountId: number, videoFile: LocalFileVideoUploadV30RequestVideoFile, videoSignature: string): Promise<LocalFileVideoUploadV30Response> {
    const response = await this.openApiV30LocalFileVideoUploadPostWithHttpInfo(filename, localAccountId, videoFile, videoSignature);
    return response.data;
  }

  async openApiV30LocalFileVideoUploadPostWithHttpInfo(filename: string, localAccountId: number, videoFile: LocalFileVideoUploadV30RequestVideoFile, videoSignature: string): Promise<ApiResponse<LocalFileVideoUploadV30Response>> {
    if (filename == null) {
      throw new ApiException("Missing the required parameter 'filename' when calling openApiV30LocalFileVideoUploadPost");
    }

    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalFileVideoUploadPost");
    }

    if (videoFile == null) {
      throw new ApiException("Missing the required parameter 'videoFile' when calling openApiV30LocalFileVideoUploadPost");
    }

    if (videoSignature == null) {
      throw new ApiException("Missing the required parameter 'videoSignature' when calling openApiV30LocalFileVideoUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<LocalFileVideoUploadV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/file/video/upload/",
      queryParams: [

      ]
    });
  }
}


