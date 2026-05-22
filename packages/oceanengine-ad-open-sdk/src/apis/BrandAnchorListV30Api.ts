// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandAnchorListV30Page, BrandAnchorListV30Response } from "../models";


export class BrandAnchorListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandAnchorListGet(advertiserId: number, page: BrandAnchorListV30Page): Promise<BrandAnchorListV30Response> {
    const response = await this.openApiV30BrandAnchorListGetWithHttpInfo(advertiserId, page);
    return response.data;
  }

  async openApiV30BrandAnchorListGetWithHttpInfo(advertiserId: number, page: BrandAnchorListV30Page): Promise<ApiResponse<BrandAnchorListV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandAnchorListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/anchor/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page }
      ]
    });
  }
}


