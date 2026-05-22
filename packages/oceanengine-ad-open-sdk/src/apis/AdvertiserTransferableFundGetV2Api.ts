// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserTransferableFundGetV2Response } from "../models";


export class AdvertiserTransferableFundGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserTransferableFundGetGet(advertiserId: number): Promise<AdvertiserTransferableFundGetV2Response> {
    const response = await this.openApi2AdvertiserTransferableFundGetGetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApi2AdvertiserTransferableFundGetGetWithHttpInfo(advertiserId: number): Promise<ApiResponse<AdvertiserTransferableFundGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserTransferableFundGetV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/transferable_fund/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


