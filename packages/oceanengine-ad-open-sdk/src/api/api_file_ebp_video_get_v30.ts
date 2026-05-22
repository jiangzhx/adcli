// Generated from oceanengine/ad_open_sdk_go api/api_file_ebp_video_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileEbpVideoGetV30Filtering, FileEbpVideoGetV30Response } from "../models/index";


export interface FileEbpVideoGetV30ApiOpenApiV30FileEbpVideoGetGetRequest {
  advertiserId: number | string;
  filtering?: FileEbpVideoGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class FileEbpVideoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FileEbpVideoGetGet(request: FileEbpVideoGetV30ApiOpenApiV30FileEbpVideoGetGetRequest): Promise<FileEbpVideoGetV30Response> {
    const response = await this.openApiV30FileEbpVideoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30FileEbpVideoGetGetWithHttpInfo(request: FileEbpVideoGetV30ApiOpenApiV30FileEbpVideoGetGetRequest): Promise<ApiResponse<FileEbpVideoGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<FileEbpVideoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/file/ebp_video/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


