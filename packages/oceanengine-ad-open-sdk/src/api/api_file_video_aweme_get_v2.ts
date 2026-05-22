// Generated from oceanengine/ad_open_sdk_go api/api_file_video_aweme_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileVideoAwemeGetV2Filtering, FileVideoAwemeGetV2Response } from "../models/index";


export interface FileVideoAwemeGetV2ApiOpenApi2FileVideoAwemeGetGetRequest {
  advertiserId: number | string;
  awemeId: string;
  filtering?: FileVideoAwemeGetV2Filtering;
  page?: number;
  pageSize?: number;
  cursor?: string;
  count?: number;
}

export class FileVideoAwemeGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoAwemeGetGet(request: FileVideoAwemeGetV2ApiOpenApi2FileVideoAwemeGetGetRequest): Promise<FileVideoAwemeGetV2Response> {
    const response = await this.openApi2FileVideoAwemeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoAwemeGetGetWithHttpInfo(request: FileVideoAwemeGetV2ApiOpenApi2FileVideoAwemeGetGetRequest): Promise<ApiResponse<FileVideoAwemeGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileVideoAwemeGetGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApi2FileVideoAwemeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoAwemeGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/video/aweme/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count }
      ]
    });
  }
}


