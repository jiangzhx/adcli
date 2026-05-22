// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaPlayletAuthGetV2Response } from "../models";


export class DpaPlayletAuthGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaPlayletAuthGetGet(advertiserId: number, platformId: number, productId: number): Promise<DpaPlayletAuthGetV2Response> {
    const response = await this.openApi2DpaPlayletAuthGetGetWithHttpInfo(advertiserId, platformId, productId);
    return response.data;
  }

  async openApi2DpaPlayletAuthGetGetWithHttpInfo(advertiserId: number, platformId: number, productId: number): Promise<ApiResponse<DpaPlayletAuthGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DpaPlayletAuthGetGet");
    }

    if (platformId == null) {
      throw new ApiException("Missing the required parameter 'platformId' when calling openApi2DpaPlayletAuthGetGet");
    }

    if (productId == null) {
      throw new ApiException("Missing the required parameter 'productId' when calling openApi2DpaPlayletAuthGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaPlayletAuthGetV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/playlet/auth/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "platform_id", value: platformId },
        { name: "product_id", value: productId }
      ]
    });
  }
}


