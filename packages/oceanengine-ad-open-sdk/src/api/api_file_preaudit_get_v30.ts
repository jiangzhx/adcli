// Generated from oceanengine/ad_open_sdk_go api/api_file_preaudit_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FilePreauditGetV30Filtering, FilePreauditGetV30Response } from "../models/index";


export interface FilePreauditGetV30ApiOpenApiV30FilePreauditGetGetRequest {
  advertiserId: number | string;
  filtering?: FilePreauditGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class FilePreauditGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FilePreauditGetGet(request: FilePreauditGetV30ApiOpenApiV30FilePreauditGetGetRequest): Promise<FilePreauditGetV30Response> {
    const response = await this.openApiV30FilePreauditGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30FilePreauditGetGetWithHttpInfo(request: FilePreauditGetV30ApiOpenApiV30FilePreauditGetGetRequest): Promise<ApiResponse<FilePreauditGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<FilePreauditGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/file/preaudit/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


