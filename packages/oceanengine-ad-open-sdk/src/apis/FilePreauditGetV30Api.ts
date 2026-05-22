// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FilePreauditGetV30Filtering, FilePreauditGetV30Response } from "../models";


export class FilePreauditGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FilePreauditGetGet(advertiserId: number, filtering: FilePreauditGetV30Filtering, page: number, pageSize: number): Promise<FilePreauditGetV30Response> {
    const response = await this.openApiV30FilePreauditGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30FilePreauditGetGetWithHttpInfo(advertiserId: number, filtering: FilePreauditGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<FilePreauditGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30FilePreauditGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FilePreauditGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/file/preaudit/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


