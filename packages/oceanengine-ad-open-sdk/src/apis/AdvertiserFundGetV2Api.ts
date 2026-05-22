// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserFundGetV2GrantTypeSplit, AdvertiserFundGetV2Response } from "../models";


export class AdvertiserFundGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserFundGetGet(advertiserId: number, grantTypeSplit: AdvertiserFundGetV2GrantTypeSplit): Promise<AdvertiserFundGetV2Response> {
    const response = await this.openApi2AdvertiserFundGetGetWithHttpInfo(advertiserId, grantTypeSplit);
    return response.data;
  }

  async openApi2AdvertiserFundGetGetWithHttpInfo(advertiserId: number, grantTypeSplit: AdvertiserFundGetV2GrantTypeSplit): Promise<ApiResponse<AdvertiserFundGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserFundGetV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/fund/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "grant_type_split", value: grantTypeSplit }
      ]
    });
  }
}


