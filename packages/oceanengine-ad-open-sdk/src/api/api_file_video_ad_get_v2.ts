// Generated from oceanengine/ad_open_sdk_go api/api_file_video_ad_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileVideoAdGetV2Response } from "../models/index";


export interface FileVideoAdGetV2ApiOpenApi2FileVideoAdGetGetRequest {
  advertiserId: number | string;
  videoIds: string[];
}

export class FileVideoAdGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoAdGetGet(request: FileVideoAdGetV2ApiOpenApi2FileVideoAdGetGetRequest): Promise<FileVideoAdGetV2Response> {
    const response = await this.openApi2FileVideoAdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoAdGetGetWithHttpInfo(request: FileVideoAdGetV2ApiOpenApi2FileVideoAdGetGetRequest): Promise<ApiResponse<FileVideoAdGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.videoIds == null) {
      throw new ApiException("videoIds is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoAdGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/video/ad/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "video_ids", value: request.videoIds }
      ]
    });
  }
}


