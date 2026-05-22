// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileVideoGetV2Filtering, FileVideoGetV2Response } from "../models";


export class FileVideoGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoGetGet(advertiserId: number, filtering: FileVideoGetV2Filtering, page: number, pageSize: number): Promise<FileVideoGetV2Response> {
    const response = await this.openApi2FileVideoGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApi2FileVideoGetGetWithHttpInfo(advertiserId: number, filtering: FileVideoGetV2Filtering, page: number, pageSize: number): Promise<ApiResponse<FileVideoGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileVideoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/video/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


