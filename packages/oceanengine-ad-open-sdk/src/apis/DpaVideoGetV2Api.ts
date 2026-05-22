// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaVideoGetV2Filtering, DpaVideoGetV2Response } from "../models";


export interface OpenApi2DpaVideoGetGetRequest {
  advertiserId?: number;
  filtering?: DpaVideoGetV2Filtering;
  page?: number;
  pageSize?: number;
}

export class DpaVideoGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaVideoGetGet(request: OpenApi2DpaVideoGetGetRequest): Promise<DpaVideoGetV2Response> {
    const response = await this.openApi2DpaVideoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaVideoGetGetWithHttpInfo(request: OpenApi2DpaVideoGetGetRequest): Promise<ApiResponse<DpaVideoGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaVideoGetV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/video/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


