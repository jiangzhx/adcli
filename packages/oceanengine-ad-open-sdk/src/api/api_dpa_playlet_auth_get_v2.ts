// Generated from oceanengine/ad_open_sdk_go api/api_dpa_playlet_auth_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaPlayletAuthGetV2Response } from "../models/index";


export interface DpaPlayletAuthGetV2ApiOpenApi2DpaPlayletAuthGetGetRequest {
  advertiserId: number | string;
  platformId: number | string;
  productId: number | string;
}

export class DpaPlayletAuthGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaPlayletAuthGetGet(request: DpaPlayletAuthGetV2ApiOpenApi2DpaPlayletAuthGetGetRequest): Promise<DpaPlayletAuthGetV2Response> {
    const response = await this.openApi2DpaPlayletAuthGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaPlayletAuthGetGetWithHttpInfo(request: DpaPlayletAuthGetV2ApiOpenApi2DpaPlayletAuthGetGetRequest): Promise<ApiResponse<DpaPlayletAuthGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.platformId == null) {
      throw new ApiException("platformId is required and must be specified");
    }

    if (request.platformId != null && Number(request.platformId) < 1) {
      throw new ApiException("platformId must be greater than 1");
    }

    if (request.productId == null) {
      throw new ApiException("productId is required and must be specified");
    }

    if (request.productId != null && Number(request.productId) < 1) {
      throw new ApiException("productId must be greater than 1");
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


