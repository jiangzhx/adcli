// Generated from oceanengine/ad_open_sdk_go api/api_carousel_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CarouselCreateV2Request, CarouselCreateV2Response } from "../models/index";


export interface CarouselCreateV2ApiOpenApi2CarouselCreatePostRequest {
  carouselCreateV2Request?: CarouselCreateV2Request;
}

export class CarouselCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CarouselCreatePost(request: CarouselCreateV2ApiOpenApi2CarouselCreatePostRequest): Promise<CarouselCreateV2Response> {
    const response = await this.openApi2CarouselCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CarouselCreatePostWithHttpInfo(request: CarouselCreateV2ApiOpenApi2CarouselCreatePostRequest): Promise<ApiResponse<CarouselCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<CarouselCreateV2Response>({
      method: "POST",
      path: "/open_api/2/carousel/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.carouselCreateV2Request
    });
  }
}


