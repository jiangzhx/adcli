// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaProductUpdateV2Request, DpaProductUpdateV2Response } from "../models";


export class DpaProductUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaProductUpdatePost(dpaProductUpdateV2Request: DpaProductUpdateV2Request): Promise<DpaProductUpdateV2Response> {
    const response = await this.openApi2DpaProductUpdatePostWithHttpInfo(dpaProductUpdateV2Request);
    return response.data;
  }

  async openApi2DpaProductUpdatePostWithHttpInfo(dpaProductUpdateV2Request: DpaProductUpdateV2Request): Promise<ApiResponse<DpaProductUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaProductUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/product/update/",
      queryParams: [

      ],
      body: dpaProductUpdateV2Request
    });
  }
}


