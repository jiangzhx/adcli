// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaProductCreateV2Request, DpaProductCreateV2Response } from "../models";


export class DpaProductCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaProductCreatePost(dpaProductCreateV2Request: DpaProductCreateV2Request): Promise<DpaProductCreateV2Response> {
    const response = await this.openApi2DpaProductCreatePostWithHttpInfo(dpaProductCreateV2Request);
    return response.data;
  }

  async openApi2DpaProductCreatePostWithHttpInfo(dpaProductCreateV2Request: DpaProductCreateV2Request): Promise<ApiResponse<DpaProductCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaProductCreateV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/product/create/",
      queryParams: [

      ],
      body: dpaProductCreateV2Request
    });
  }
}


