// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { FileCarouselAwemeGetV30Filtering, FileCarouselAwemeGetV30Response } from "../models";


export class FileCarouselAwemeGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FileCarouselAwemeGetGet(advertiserId: number, awemeId: string, filtering: FileCarouselAwemeGetV30Filtering, cursor: string, count: number): Promise<FileCarouselAwemeGetV30Response> {
    const response = await this.openApiV30FileCarouselAwemeGetGetWithHttpInfo(advertiserId, awemeId, filtering, cursor, count);
    return response.data;
  }

  async openApiV30FileCarouselAwemeGetGetWithHttpInfo(advertiserId: number, awemeId: string, filtering: FileCarouselAwemeGetV30Filtering, cursor: string, count: number): Promise<ApiResponse<FileCarouselAwemeGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30FileCarouselAwemeGetGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV30FileCarouselAwemeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileCarouselAwemeGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/file/carousel/aweme/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "filtering", value: filtering },
        { name: "cursor", value: cursor },
        { name: "count", value: count }
      ]
    });
  }
}


