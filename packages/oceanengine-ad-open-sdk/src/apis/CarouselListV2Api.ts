// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CarouselListV2Filtering, CarouselListV2Response } from "../models";


export interface OpenApi2CarouselListGetRequest {
  advertiserId: number;
  filtering?: CarouselListV2Filtering;
  pageSize?: number;
  page?: number;
}

export class CarouselListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CarouselListGet(request: OpenApi2CarouselListGetRequest): Promise<CarouselListV2Response> {
    const response = await this.openApi2CarouselListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2CarouselListGetWithHttpInfo(request: OpenApi2CarouselListGetRequest): Promise<ApiResponse<CarouselListV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2CarouselListGet");
    }
    return this.apiClient.requestWithHttpInfo<CarouselListV2Response>({
      method: "GET",
      path: "/open_api/2/carousel/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page_size", value: request.pageSize },
        { name: "page", value: request.page }
      ]
    });
  }
}


