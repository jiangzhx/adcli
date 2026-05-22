// Generated from oceanengine/ad_open_sdk_go api/api_carousel_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CarouselListV2Filtering, CarouselListV2Response } from "../models/index";


export interface CarouselListV2ApiOpenApi2CarouselListGetRequest {
  advertiserId: number | string;
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

  async openApi2CarouselListGet(request: CarouselListV2ApiOpenApi2CarouselListGetRequest): Promise<CarouselListV2Response> {
    const response = await this.openApi2CarouselListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2CarouselListGetWithHttpInfo(request: CarouselListV2ApiOpenApi2CarouselListGetRequest): Promise<ApiResponse<CarouselListV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


