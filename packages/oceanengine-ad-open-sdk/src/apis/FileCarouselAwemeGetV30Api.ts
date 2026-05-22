// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileCarouselAwemeGetV30Filtering, FileCarouselAwemeGetV30Response } from "../models";


export interface OpenApiV30FileCarouselAwemeGetGetRequest {
  advertiserId: number;
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

  async openApiV30FileCarouselAwemeGetGet(request: OpenApiV30FileCarouselAwemeGetGetRequest): Promise<FileCarouselAwemeGetV30Response> {
    const response = await this.openApiV30FileCarouselAwemeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30FileCarouselAwemeGetGetWithHttpInfo(request: OpenApiV30FileCarouselAwemeGetGetRequest): Promise<ApiResponse<FileCarouselAwemeGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30FileCarouselAwemeGetGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV30FileCarouselAwemeGetGet");
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


