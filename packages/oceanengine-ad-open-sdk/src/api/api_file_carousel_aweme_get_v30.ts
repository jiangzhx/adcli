// Generated from oceanengine/ad_open_sdk_go api/api_file_carousel_aweme_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileCarouselAwemeGetV30Filtering, FileCarouselAwemeGetV30Response } from "../models/index";


export interface FileCarouselAwemeGetV30ApiOpenApiV30FileCarouselAwemeGetGetRequest {
  advertiserId: number | string;
  awemeId: string;
  filtering?: FileCarouselAwemeGetV30Filtering;
  cursor?: string;
  count?: number;
}

export class FileCarouselAwemeGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FileCarouselAwemeGetGet(request: FileCarouselAwemeGetV30ApiOpenApiV30FileCarouselAwemeGetGetRequest): Promise<FileCarouselAwemeGetV30Response> {
    const response = await this.openApiV30FileCarouselAwemeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30FileCarouselAwemeGetGetWithHttpInfo(request: FileCarouselAwemeGetV30ApiOpenApiV30FileCarouselAwemeGetGetRequest): Promise<ApiResponse<FileCarouselAwemeGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.awemeId == null) {
      throw new ApiException("awemeId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<FileCarouselAwemeGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/file/carousel/aweme/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "filtering", value: request.filtering },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count }
      ]
    });
  }
}


