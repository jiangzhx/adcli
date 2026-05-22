// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaPlayletAuthGetV2Response } from "../models";


export interface OpenApi2DpaPlayletAuthGetGetRequest {
  advertiserId: number;
  platformId: number;
  productId: number;
}

export class DpaPlayletAuthGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaPlayletAuthGetGet(request: OpenApi2DpaPlayletAuthGetGetRequest): Promise<DpaPlayletAuthGetV2Response> {
    const response = await this.openApi2DpaPlayletAuthGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaPlayletAuthGetGetWithHttpInfo(request: OpenApi2DpaPlayletAuthGetGetRequest): Promise<ApiResponse<DpaPlayletAuthGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DpaPlayletAuthGetGet");
    }

    if (request.platformId == null) {
      throw new ApiException("Missing the required parameter 'platformId' when calling openApi2DpaPlayletAuthGetGet");
    }

    if (request.productId == null) {
      throw new ApiException("Missing the required parameter 'productId' when calling openApi2DpaPlayletAuthGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaPlayletAuthGetV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/playlet/auth/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "platform_id", value: request.platformId },
        { name: "product_id", value: request.productId }
      ]
    });
  }
}


