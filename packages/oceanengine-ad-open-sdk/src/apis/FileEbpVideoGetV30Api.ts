// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileEbpVideoGetV30Filtering, FileEbpVideoGetV30Response } from "../models";


export interface OpenApiV30FileEbpVideoGetGetRequest {
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

  async openApiV30FileEbpVideoGetGet(request: OpenApiV30FileEbpVideoGetGetRequest): Promise<FileEbpVideoGetV30Response> {
    const response = await this.openApiV30FileEbpVideoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30FileEbpVideoGetGetWithHttpInfo(request: OpenApiV30FileEbpVideoGetGetRequest): Promise<ApiResponse<FileEbpVideoGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30FileEbpVideoGetGet");
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


