// Generated from oceanengine/ad_open_sdk_go api/api_carousel_ad_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CarouselAdGetV2Response } from "../models/index";


export interface CarouselAdGetV2ApiOpenApi2CarouselAdGetGetRequest {
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

  async openApi2CarouselAdGetGet(request: CarouselAdGetV2ApiOpenApi2CarouselAdGetGetRequest): Promise<CarouselAdGetV2Response> {
    const response = await this.openApi2CarouselAdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2CarouselAdGetGetWithHttpInfo(request: CarouselAdGetV2ApiOpenApi2CarouselAdGetGetRequest): Promise<ApiResponse<CarouselAdGetV2Response>> {
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


