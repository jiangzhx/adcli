// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CarouselDeleteV2Request, CarouselDeleteV2Response } from "../models";


export class CarouselDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CarouselDeletePost(request: CarouselDeleteV2Request): Promise<CarouselDeleteV2Response> {
    const response = await this.openApi2CarouselDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CarouselDeletePostWithHttpInfo(request: CarouselDeleteV2Request): Promise<ApiResponse<CarouselDeleteV2Response>> {
    return this.apiClient.requestWithHttpInfo<CarouselDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/carousel/delete/",
      queryParams: [

      ],
      body: request
    });
  }
}


