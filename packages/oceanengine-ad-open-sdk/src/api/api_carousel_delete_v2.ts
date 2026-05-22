// Generated from oceanengine/ad_open_sdk_go api/api_carousel_delete_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CarouselDeleteV2Request, CarouselDeleteV2Response } from "../models/index";


export interface CarouselDeleteV2ApiOpenApi2CarouselDeletePostRequest {
  carouselDeleteV2Request?: CarouselDeleteV2Request;
}

export class CarouselDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CarouselDeletePost(request: CarouselDeleteV2ApiOpenApi2CarouselDeletePostRequest): Promise<CarouselDeleteV2Response> {
    const response = await this.openApi2CarouselDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CarouselDeletePostWithHttpInfo(request: CarouselDeleteV2ApiOpenApi2CarouselDeletePostRequest): Promise<ApiResponse<CarouselDeleteV2Response>> {

    return this.apiClient.requestWithHttpInfo<CarouselDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/carousel/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.carouselDeleteV2Request
    });
  }
}


