// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaProductCreateV2Request, DpaProductCreateV2Response } from "../models";


export interface OpenApi2DpaProductCreatePostRequest {
  dpaProductCreateV2Request?: DpaProductCreateV2Request;
}

export class DpaProductCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaProductCreatePost(request: OpenApi2DpaProductCreatePostRequest): Promise<DpaProductCreateV2Response> {
    const response = await this.openApi2DpaProductCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaProductCreatePostWithHttpInfo(request: OpenApi2DpaProductCreatePostRequest): Promise<ApiResponse<DpaProductCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaProductCreateV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/product/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dpaProductCreateV2Request
    });
  }
}


