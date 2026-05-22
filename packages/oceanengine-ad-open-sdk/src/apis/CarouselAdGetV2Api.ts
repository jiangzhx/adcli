// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CarouselAdGetV2Response } from "../models";


export interface OpenApi2CarouselAdGetGetRequest {
  advertiserId: number | string;
  carouselIds: number | string[];
}

export class CarouselAdGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CarouselAdGetGet(request: OpenApi2CarouselAdGetGetRequest): Promise<CarouselAdGetV2Response> {
    const response = await this.openApi2CarouselAdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2CarouselAdGetGetWithHttpInfo(request: OpenApi2CarouselAdGetGetRequest): Promise<ApiResponse<CarouselAdGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2CarouselAdGetGet");
    }

    if (request.carouselIds == null) {
      throw new ApiException("Missing the required parameter 'carouselIds' when calling openApi2CarouselAdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<CarouselAdGetV2Response>({
      method: "GET",
      path: "/open_api/2/carousel/ad/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "carousel_ids", value: request.carouselIds, collectionFormat: "csv" }
      ]
    });
  }
}


