// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaProductDetailGetV2Filtering, DpaProductDetailGetV2Response } from "../models";


export class DpaProductDetailGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaProductDetailGetGet(advertiserId: number, filtering: DpaProductDetailGetV2Filtering, page: number, pageSize: number, platformId: number): Promise<DpaProductDetailGetV2Response> {
    const response = await this.openApi2DpaProductDetailGetGetWithHttpInfo(advertiserId, filtering, page, pageSize, platformId);
    return response.data;
  }

  async openApi2DpaProductDetailGetGetWithHttpInfo(advertiserId: number, filtering: DpaProductDetailGetV2Filtering, page: number, pageSize: number, platformId: number): Promise<ApiResponse<DpaProductDetailGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaProductDetailGetV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/product/detail/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "platform_id", value: platformId }
      ]
    });
  }
}


