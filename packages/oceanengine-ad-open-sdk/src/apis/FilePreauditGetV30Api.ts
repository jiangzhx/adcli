// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FilePreauditGetV30Filtering, FilePreauditGetV30Response } from "../models";


export interface OpenApiV30FilePreauditGetGetRequest {
  advertiserId: number;
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

  async openApiV30FilePreauditGetGet(request: OpenApiV30FilePreauditGetGetRequest): Promise<FilePreauditGetV30Response> {
    const response = await this.openApiV30FilePreauditGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30FilePreauditGetGetWithHttpInfo(request: OpenApiV30FilePreauditGetGetRequest): Promise<ApiResponse<FilePreauditGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30FilePreauditGetGet");
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


