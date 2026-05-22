// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaProductDetailGetV2Filtering, DpaProductDetailGetV2Response } from "../models";


export interface OpenApi2DpaProductDetailGetGetRequest {
  advertiserId?: number | string;
  filtering?: DpaProductDetailGetV2Filtering;
  page?: number;
  pageSize?: number;
  platformId?: number | string;
}

export class DpaProductDetailGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaProductDetailGetGet(request: OpenApi2DpaProductDetailGetGetRequest): Promise<DpaProductDetailGetV2Response> {
    const response = await this.openApi2DpaProductDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaProductDetailGetGetWithHttpInfo(request: OpenApi2DpaProductDetailGetGetRequest): Promise<ApiResponse<DpaProductDetailGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaProductDetailGetV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/product/detail/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "platform_id", value: request.platformId }
      ]
    });
  }
}


