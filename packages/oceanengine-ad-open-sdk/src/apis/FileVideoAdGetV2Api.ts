// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileVideoAdGetV2Response } from "../models";


export interface OpenApi2FileVideoAdGetGetRequest {
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

  async openApi2FileVideoAdGetGet(request: OpenApi2FileVideoAdGetGetRequest): Promise<FileVideoAdGetV2Response> {
    const response = await this.openApi2FileVideoAdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoAdGetGetWithHttpInfo(request: OpenApi2FileVideoAdGetGetRequest): Promise<ApiResponse<FileVideoAdGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileVideoAdGetGet");
    }

    if (request.videoIds == null) {
      throw new ApiException("Missing the required parameter 'videoIds' when calling openApi2FileVideoAdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoAdGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/video/ad/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "video_ids", value: request.videoIds, collectionFormat: "csv" }
      ]
    });
  }
}


