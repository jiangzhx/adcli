// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { FileVideoAwemeGetV2Filtering, FileVideoAwemeGetV2Response } from "../models";


export class FileVideoAwemeGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoAwemeGetGet(advertiserId: number, awemeId: string, filtering: FileVideoAwemeGetV2Filtering, page: number, pageSize: number, cursor: string, count: number): Promise<FileVideoAwemeGetV2Response> {
    const response = await this.openApi2FileVideoAwemeGetGetWithHttpInfo(advertiserId, awemeId, filtering, page, pageSize, cursor, count);
    return response.data;
  }

  async openApi2FileVideoAwemeGetGetWithHttpInfo(advertiserId: number, awemeId: string, filtering: FileVideoAwemeGetV2Filtering, page: number, pageSize: number, cursor: string, count: number): Promise<ApiResponse<FileVideoAwemeGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileVideoAwemeGetGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApi2FileVideoAwemeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoAwemeGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/video/aweme/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "cursor", value: cursor },
        { name: "count", value: count }
      ]
    });
  }
}


