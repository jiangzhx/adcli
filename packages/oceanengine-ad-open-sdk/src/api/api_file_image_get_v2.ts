// Generated from oceanengine/ad_open_sdk_go api/api_file_image_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileImageGetV2Filtering, FileImageGetV2Response } from "../models/index";


export interface FileImageGetV2ApiOpenApi2FileImageGetGetRequest {
  advertiserId: number | string;
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

  async openApi2FileImageGetGet(request: FileImageGetV2ApiOpenApi2FileImageGetGetRequest): Promise<FileImageGetV2Response> {
    const response = await this.openApi2FileImageGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileImageGetGetWithHttpInfo(request: FileImageGetV2ApiOpenApi2FileImageGetGetRequest): Promise<ApiResponse<FileImageGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


