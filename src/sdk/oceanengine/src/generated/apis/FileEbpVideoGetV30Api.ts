// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { FileEbpVideoGetV30Filtering, FileEbpVideoGetV30Response } from "../models";


export class FileEbpVideoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FileEbpVideoGetGet(advertiserId: number, filtering: FileEbpVideoGetV30Filtering, page: number, pageSize: number): Promise<FileEbpVideoGetV30Response> {
    const response = await this.openApiV30FileEbpVideoGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30FileEbpVideoGetGetWithHttpInfo(advertiserId: number, filtering: FileEbpVideoGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<FileEbpVideoGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30FileEbpVideoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileEbpVideoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/file/ebp_video/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


