// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileImageGetV2Filtering, FileImageGetV2Response } from "../models";


export interface OpenApi2FileImageGetGetRequest {
  advertiserId: number;
  filtering?: FileImageGetV2Filtering;
  page?: number;
  pageSize?: number;
}

export class FileImageGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileImageGetGet(request: OpenApi2FileImageGetGetRequest): Promise<FileImageGetV2Response> {
    const response = await this.openApi2FileImageGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileImageGetGetWithHttpInfo(request: OpenApi2FileImageGetGetRequest): Promise<ApiResponse<FileImageGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileImageGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileImageGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/image/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


