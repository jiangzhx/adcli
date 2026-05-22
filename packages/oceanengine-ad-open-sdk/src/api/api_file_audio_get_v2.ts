// Generated from oceanengine/ad_open_sdk_go api/api_file_audio_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileAudioGetV2Filtering, FileAudioGetV2Response } from "../models/index";


export interface FileAudioGetV2ApiOpenApi2FileAudioGetGetRequest {
  advertiserId: number | string;
  filtering?: FileAudioGetV2Filtering;
  page?: number;
  pageSize?: number;
}

export class FileAudioGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileAudioGetGet(request: FileAudioGetV2ApiOpenApi2FileAudioGetGetRequest): Promise<FileAudioGetV2Response> {
    const response = await this.openApi2FileAudioGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileAudioGetGetWithHttpInfo(request: FileAudioGetV2ApiOpenApi2FileAudioGetGetRequest): Promise<ApiResponse<FileAudioGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileAudioGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileAudioGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/audio/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


