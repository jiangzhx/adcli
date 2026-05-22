// Generated from oceanengine/ad_open_sdk_go api/api_file_audio_ad_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileAudioAdV2Response, FileAudioAdV2UploadType } from "../models/index";


export interface FileAudioAdV2ApiOpenApi2FileAudioAdPostRequest {
  advertiserId: number | string;
  uploadType: FileAudioAdV2UploadType;
  audioFile?: Blob;
  audioSignature?: string;
  audioUrl?: string;
}

export class FileAudioAdV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileAudioAdPost(request: FileAudioAdV2ApiOpenApi2FileAudioAdPostRequest): Promise<FileAudioAdV2Response> {
    const response = await this.openApi2FileAudioAdPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileAudioAdPostWithHttpInfo(request: FileAudioAdV2ApiOpenApi2FileAudioAdPostRequest): Promise<ApiResponse<FileAudioAdV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileAudioAdPost");
    }

    if (request.uploadType == null) {
      throw new ApiException("Missing the required parameter 'uploadType' when calling openApi2FileAudioAdPost");
    }
    return this.apiClient.requestWithHttpInfo<FileAudioAdV2Response>({
      method: "POST",
      path: "/open_api/2/file/audio/ad/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        advertiser_id: request.advertiserId,
        audio_signature: request.audioSignature,
        audio_url: request.audioUrl,
        upload_type: request.uploadType
      },
      files: {
        audio_file: request.audioFile
      }
    });
  }
}


