// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaDictGetV2Response } from "../models";


export interface OpenApi2DpaDictGetGetRequest {
  advertiserId: number | string;
  platformId: number | string;
}

export class DpaDictGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaDictGetGet(request: OpenApi2DpaDictGetGetRequest): Promise<DpaDictGetV2Response> {
    const response = await this.openApi2DpaDictGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaDictGetGetWithHttpInfo(request: OpenApi2DpaDictGetGetRequest): Promise<ApiResponse<DpaDictGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DpaDictGetGet");
    }

    if (request.platformId == null) {
      throw new ApiException("Missing the required parameter 'platformId' when calling openApi2DpaDictGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaDictGetV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/dict/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "platform_id", value: request.platformId }
      ]
    });
  }
}


