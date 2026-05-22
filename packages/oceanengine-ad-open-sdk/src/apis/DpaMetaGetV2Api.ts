// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaMetaGetV2Response } from "../models";


export interface OpenApi2DpaMetaGetGetRequest {
  advertiserId: number | string;
  platformId: number | string;
  indexable?: number;
  extractable?: number;
  industry?: number;
  status?: number;
  mediaType?: number;
}

export class DpaMetaGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaMetaGetGet(request: OpenApi2DpaMetaGetGetRequest): Promise<DpaMetaGetV2Response> {
    const response = await this.openApi2DpaMetaGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaMetaGetGetWithHttpInfo(request: OpenApi2DpaMetaGetGetRequest): Promise<ApiResponse<DpaMetaGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DpaMetaGetGet");
    }

    if (request.platformId == null) {
      throw new ApiException("Missing the required parameter 'platformId' when calling openApi2DpaMetaGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaMetaGetV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/meta/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "platform_id", value: request.platformId },
        { name: "indexable", value: request.indexable },
        { name: "extractable", value: request.extractable },
        { name: "industry", value: request.industry },
        { name: "status", value: request.status },
        { name: "mediaType", value: request.mediaType }
      ]
    });
  }
}


