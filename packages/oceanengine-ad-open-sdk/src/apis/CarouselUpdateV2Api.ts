// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CarouselUpdateV2Request, CarouselUpdateV2Response } from "../models";


export interface OpenApi2CarouselUpdatePostRequest {
  carouselUpdateV2Request?: CarouselUpdateV2Request;
}

export class CarouselUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CarouselUpdatePost(request: OpenApi2CarouselUpdatePostRequest): Promise<CarouselUpdateV2Response> {
    const response = await this.openApi2CarouselUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CarouselUpdatePostWithHttpInfo(request: OpenApi2CarouselUpdatePostRequest): Promise<ApiResponse<CarouselUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<CarouselUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/carousel/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.carouselUpdateV2Request
    });
  }
}


