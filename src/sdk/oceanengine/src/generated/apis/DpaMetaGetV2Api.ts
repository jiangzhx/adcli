// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DpaMetaGetV2Response } from "../models";


export class DpaMetaGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaMetaGetGet(advertiserId: number, platformId: number, indexable: number, extractable: number, industry: number, status: number, mediaType: number): Promise<DpaMetaGetV2Response> {
    const response = await this.openApi2DpaMetaGetGetWithHttpInfo(advertiserId, platformId, indexable, extractable, industry, status, mediaType);
    return response.data;
  }

  async openApi2DpaMetaGetGetWithHttpInfo(advertiserId: number, platformId: number, indexable: number, extractable: number, industry: number, status: number, mediaType: number): Promise<ApiResponse<DpaMetaGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DpaMetaGetGet");
    }

    if (platformId == null) {
      throw new ApiException("Missing the required parameter 'platformId' when calling openApi2DpaMetaGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaMetaGetV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/meta/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "platform_id", value: platformId },
        { name: "indexable", value: indexable },
        { name: "extractable", value: extractable },
        { name: "industry", value: industry },
        { name: "status", value: status },
        { name: "mediaType", value: mediaType }
      ]
    });
  }
}


