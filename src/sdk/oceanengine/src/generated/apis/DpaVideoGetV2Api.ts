// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DpaVideoGetV2Filtering, DpaVideoGetV2Response } from "../models";


export class DpaVideoGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaVideoGetGet(advertiserId: number, filtering: DpaVideoGetV2Filtering, page: number, pageSize: number): Promise<DpaVideoGetV2Response> {
    const response = await this.openApi2DpaVideoGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApi2DpaVideoGetGetWithHttpInfo(advertiserId: number, filtering: DpaVideoGetV2Filtering, page: number, pageSize: number): Promise<ApiResponse<DpaVideoGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaVideoGetV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/video/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


