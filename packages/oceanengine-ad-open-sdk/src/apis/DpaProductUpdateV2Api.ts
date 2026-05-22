// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaProductUpdateV2Request, DpaProductUpdateV2Response } from "../models";


export interface OpenApi2DpaProductUpdatePostRequest {
  dpaProductUpdateV2Request?: DpaProductUpdateV2Request;
}

export class DpaProductUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaProductUpdatePost(request: OpenApi2DpaProductUpdatePostRequest): Promise<DpaProductUpdateV2Response> {
    const response = await this.openApi2DpaProductUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaProductUpdatePostWithHttpInfo(request: OpenApi2DpaProductUpdatePostRequest): Promise<ApiResponse<DpaProductUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaProductUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/product/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dpaProductUpdateV2Request
    });
  }
}


