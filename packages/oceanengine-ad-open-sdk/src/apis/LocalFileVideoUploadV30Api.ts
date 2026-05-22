// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalFileVideoUploadV30RequestVideoFile, LocalFileVideoUploadV30Response } from "../models";


export interface OpenApiV30LocalFileVideoUploadPostRequest {
  filename: string;
  localAccountId: number;
  videoFile: LocalFileVideoUploadV30RequestVideoFile;
  videoSignature: string;
}

export class LocalFileVideoUploadV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalFileVideoUploadPost(request: OpenApiV30LocalFileVideoUploadPostRequest): Promise<LocalFileVideoUploadV30Response> {
    const response = await this.openApiV30LocalFileVideoUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalFileVideoUploadPostWithHttpInfo(request: OpenApiV30LocalFileVideoUploadPostRequest): Promise<ApiResponse<LocalFileVideoUploadV30Response>> {
    if (request.filename == null) {
      throw new ApiException("Missing the required parameter 'filename' when calling openApiV30LocalFileVideoUploadPost");
    }

    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalFileVideoUploadPost");
    }

    if (request.videoFile == null) {
      throw new ApiException("Missing the required parameter 'videoFile' when calling openApiV30LocalFileVideoUploadPost");
    }

    if (request.videoSignature == null) {
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


