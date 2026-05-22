// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalFileCarouselListV30Order, LocalFileCarouselListV30Response } from "../models";


export interface OpenApiV30LocalFileCarouselListGetRequest {
  localAccountId: number;
  keyword?: string;
  carouselIds?: number[];
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

  async openApiV30LocalFileCarouselListGet(request: OpenApiV30LocalFileCarouselListGetRequest): Promise<LocalFileCarouselListV30Response> {
    const response = await this.openApiV30LocalFileCarouselListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalFileCarouselListGetWithHttpInfo(request: OpenApiV30LocalFileCarouselListGetRequest): Promise<ApiResponse<LocalFileCarouselListV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalFileCarouselListGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalFileCarouselListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/file/carousel/list/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "keyword", value: request.keyword },
        { name: "carousel_ids", value: request.carouselIds, collectionFormat: "csv" },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "order", value: request.order },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


