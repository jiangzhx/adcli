// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileAudioAdV2Response, FileAudioAdV2UploadType } from "../models";


export interface OpenApi2FileAudioAdPostRequest {
  advertiserId: number | string;
  uploadType: FileAudioAdV2UploadType;
  audioFile?: File;
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

  async openApi2FileAudioAdPost(request: OpenApi2FileAudioAdPostRequest): Promise<FileAudioAdV2Response> {
    const response = await this.openApi2FileAudioAdPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileAudioAdPostWithHttpInfo(request: OpenApi2FileAudioAdPostRequest): Promise<ApiResponse<FileAudioAdV2Response>> {
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

      ]
    });
  }
}


