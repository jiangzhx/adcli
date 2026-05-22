// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CarouselAdGetV2Response } from "../models";


export class CarouselAdGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CarouselAdGetGet(advertiserId: number, carouselIds: number[]): Promise<CarouselAdGetV2Response> {
    const response = await this.openApi2CarouselAdGetGetWithHttpInfo(advertiserId, carouselIds);
    return response.data;
  }

  async openApi2CarouselAdGetGetWithHttpInfo(advertiserId: number, carouselIds: number[]): Promise<ApiResponse<CarouselAdGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2CarouselAdGetGet");
    }

    if (carouselIds == null) {
      throw new ApiException("Missing the required parameter 'carouselIds' when calling openApi2CarouselAdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<CarouselAdGetV2Response>({
      method: "GET",
      path: "/open_api/2/carousel/ad/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "carousel_ids", value: carouselIds, collectionFormat: "csv" }
      ]
    });
  }
}


