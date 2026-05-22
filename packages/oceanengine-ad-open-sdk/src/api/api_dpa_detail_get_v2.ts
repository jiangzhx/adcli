// Generated from oceanengine/ad_open_sdk_go api/api_dpa_detail_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaDetailGetV2Filtering, DpaDetailGetV2Response } from "../models/index";


export interface DpaDetailGetV2ApiOpenApi2DpaDetailGetGetRequest {
  advertiserId: number | string;
  productPlatformId: number | string;
  filtering?: DpaDetailGetV2Filtering;
  page?: number;
  pageSize?: number;
}

export class DpaDetailGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaDetailGetGet(request: DpaDetailGetV2ApiOpenApi2DpaDetailGetGetRequest): Promise<DpaDetailGetV2Response> {
    const response = await this.openApi2DpaDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaDetailGetGetWithHttpInfo(request: DpaDetailGetV2ApiOpenApi2DpaDetailGetGetRequest): Promise<ApiResponse<DpaDetailGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DpaDetailGetGet");
    }

    if (request.productPlatformId == null) {
      throw new ApiException("Missing the required parameter 'productPlatformId' when calling openApi2DpaDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaDetailGetV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/detail/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "product_platform_id", value: request.productPlatformId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


