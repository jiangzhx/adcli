// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { CarouselCreateV2Request, CarouselCreateV2Response } from "../models";


export class CarouselCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CarouselCreatePost(carouselCreateV2Request: CarouselCreateV2Request): Promise<CarouselCreateV2Response> {
    const response = await this.openApi2CarouselCreatePostWithHttpInfo(carouselCreateV2Request);
    return response.data;
  }

  async openApi2CarouselCreatePostWithHttpInfo(carouselCreateV2Request: CarouselCreateV2Request): Promise<ApiResponse<CarouselCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<CarouselCreateV2Response>({
      method: "POST",
      path: "/open_api/2/carousel/create/",
      queryParams: [

      ],
      body: carouselCreateV2Request
    });
  }
}


