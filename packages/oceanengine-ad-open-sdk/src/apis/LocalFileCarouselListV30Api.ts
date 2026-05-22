// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalFileCarouselListV30Order, LocalFileCarouselListV30Response } from "../models";


export class LocalFileCarouselListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalFileCarouselListGet(localAccountId: number, keyword: string, carouselIds: number[], startTime: string, endTime: string, order: LocalFileCarouselListV30Order, page: number, pageSize: number): Promise<LocalFileCarouselListV30Response> {
    const response = await this.openApiV30LocalFileCarouselListGetWithHttpInfo(localAccountId, keyword, carouselIds, startTime, endTime, order, page, pageSize);
    return response.data;
  }

  async openApiV30LocalFileCarouselListGetWithHttpInfo(localAccountId: number, keyword: string, carouselIds: number[], startTime: string, endTime: string, order: LocalFileCarouselListV30Order, page: number, pageSize: number): Promise<ApiResponse<LocalFileCarouselListV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalFileCarouselListGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalFileCarouselListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/file/carousel/list/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "keyword", value: keyword },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "order", value: order },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "carousel_ids", value: carouselIds, collectionFormat: "csv" }
      ]
    });
  }
}


