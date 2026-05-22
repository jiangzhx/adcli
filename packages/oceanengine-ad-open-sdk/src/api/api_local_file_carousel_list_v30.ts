// Generated from oceanengine/ad_open_sdk_go api/api_local_file_carousel_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalFileCarouselListV30Order, LocalFileCarouselListV30Response } from "../models/index";


export interface LocalFileCarouselListV30ApiOpenApiV30LocalFileCarouselListGetRequest {
  localAccountId: number | string;
  keyword?: string;
  carouselIds?: (number | string)[];
  startTime?: string;
  endTime?: string;
  order?: LocalFileCarouselListV30Order;
  page?: number;
  pageSize?: number;
}

export class LocalFileCarouselListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalFileCarouselListGet(request: LocalFileCarouselListV30ApiOpenApiV30LocalFileCarouselListGetRequest): Promise<LocalFileCarouselListV30Response> {
    const response = await this.openApiV30LocalFileCarouselListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalFileCarouselListGetWithHttpInfo(request: LocalFileCarouselListV30ApiOpenApiV30LocalFileCarouselListGetRequest): Promise<ApiResponse<LocalFileCarouselListV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("localAccountId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<LocalFileCarouselListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/file/carousel/list/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "keyword", value: request.keyword },
        { name: "carousel_ids", value: request.carouselIds },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "order", value: request.order },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


