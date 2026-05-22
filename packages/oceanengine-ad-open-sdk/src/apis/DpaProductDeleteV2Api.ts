// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaProductDeleteV2Request, DpaProductDeleteV2Response } from "../models";


export interface OpenApi2DpaProductDeletePostRequest {
  dpaProductDeleteV2Request?: DpaProductDeleteV2Request;
}

export class DpaProductDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaProductDeletePost(request: OpenApi2DpaProductDeletePostRequest): Promise<DpaProductDeleteV2Response> {
    const response = await this.openApi2DpaProductDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaProductDeletePostWithHttpInfo(request: OpenApi2DpaProductDeletePostRequest): Promise<ApiResponse<DpaProductDeleteV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaProductDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/product/delete/",
      queryParams: [

      ],
      body: request.dpaProductDeleteV2Request
    });
  }
}


