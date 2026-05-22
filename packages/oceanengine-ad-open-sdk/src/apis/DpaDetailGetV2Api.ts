// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaDetailGetV2Filtering, DpaDetailGetV2Response } from "../models";


export class DpaDetailGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaDetailGetGet(advertiserId: number, productPlatformId: number, filtering: DpaDetailGetV2Filtering, page: number, pageSize: number): Promise<DpaDetailGetV2Response> {
    const response = await this.openApi2DpaDetailGetGetWithHttpInfo(advertiserId, productPlatformId, filtering, page, pageSize);
    return response.data;
  }

  async openApi2DpaDetailGetGetWithHttpInfo(advertiserId: number, productPlatformId: number, filtering: DpaDetailGetV2Filtering, page: number, pageSize: number): Promise<ApiResponse<DpaDetailGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DpaDetailGetGet");
    }

    if (productPlatformId == null) {
      throw new ApiException("Missing the required parameter 'productPlatformId' when calling openApi2DpaDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaDetailGetV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/detail/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "product_platform_id", value: productPlatformId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


