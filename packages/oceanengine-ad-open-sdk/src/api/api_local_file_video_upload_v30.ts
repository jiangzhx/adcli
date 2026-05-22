// Generated from oceanengine/ad_open_sdk_go api/api_local_file_video_upload_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalFileVideoUploadV30RequestVideoFile, LocalFileVideoUploadV30Response } from "../models/index";


export interface LocalFileVideoUploadV30ApiOpenApiV30LocalFileVideoUploadPostRequest {
  filename: string;
  localAccountId: number | string;
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

  async openApiV30LocalFileVideoUploadPost(request: LocalFileVideoUploadV30ApiOpenApiV30LocalFileVideoUploadPostRequest): Promise<LocalFileVideoUploadV30Response> {
    const response = await this.openApiV30LocalFileVideoUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalFileVideoUploadPostWithHttpInfo(request: LocalFileVideoUploadV30ApiOpenApiV30LocalFileVideoUploadPostRequest): Promise<ApiResponse<LocalFileVideoUploadV30Response>> {
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

      ],
      contentType: "multipart/form-data",
      formParams: {
        filename: request.filename,
        local_account_id: request.localAccountId,
        video_file: request.videoFile,
        video_signature: request.videoSignature
      }
    });
  }
}


