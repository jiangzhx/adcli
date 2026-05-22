// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileVideoGetV2Filtering, FileVideoGetV2Response } from "../models";


export interface OpenApi2FileVideoGetGetRequest {
  advertiserId: number;
  filtering?: FileVideoGetV2Filtering;
  page?: number;
  pageSize?: number;
}

export class FileVideoGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoGetGet(request: OpenApi2FileVideoGetGetRequest): Promise<FileVideoGetV2Response> {
    const response = await this.openApi2FileVideoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoGetGetWithHttpInfo(request: OpenApi2FileVideoGetGetRequest): Promise<ApiResponse<FileVideoGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileVideoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/video/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


