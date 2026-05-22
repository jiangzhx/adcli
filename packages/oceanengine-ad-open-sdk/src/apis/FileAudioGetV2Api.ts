// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileAudioGetV2Filtering, FileAudioGetV2Response } from "../models";


export class FileAudioGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileAudioGetGet(advertiserId: number, filtering: FileAudioGetV2Filtering, page: number, pageSize: number): Promise<FileAudioGetV2Response> {
    const response = await this.openApi2FileAudioGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApi2FileAudioGetGetWithHttpInfo(advertiserId: number, filtering: FileAudioGetV2Filtering, page: number, pageSize: number): Promise<ApiResponse<FileAudioGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileAudioGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileAudioGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/audio/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


