// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaCategoryGetV2Response } from "../models";


export interface OpenApi2DpaCategoryGetGetRequest {
  advertiserId: number | string;
  platformId: number | string;
}

export class DpaCategoryGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaCategoryGetGet(request: OpenApi2DpaCategoryGetGetRequest): Promise<DpaCategoryGetV2Response> {
    const response = await this.openApi2DpaCategoryGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaCategoryGetGetWithHttpInfo(request: OpenApi2DpaCategoryGetGetRequest): Promise<ApiResponse<DpaCategoryGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DpaCategoryGetGet");
    }

    if (request.platformId == null) {
      throw new ApiException("Missing the required parameter 'platformId' when calling openApi2DpaCategoryGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaCategoryGetV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/category/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "platform_id", value: request.platformId }
      ]
    });
  }
}


