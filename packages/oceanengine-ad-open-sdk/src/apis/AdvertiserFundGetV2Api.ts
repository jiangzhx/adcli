// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserFundGetV2GrantTypeSplit, AdvertiserFundGetV2Response } from "../models";


export interface OpenApi2AdvertiserFundGetGetRequest {
  advertiserId?: number;
  grantTypeSplit?: AdvertiserFundGetV2GrantTypeSplit;
}

export class AdvertiserFundGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserFundGetGet(request: OpenApi2AdvertiserFundGetGetRequest): Promise<AdvertiserFundGetV2Response> {
    const response = await this.openApi2AdvertiserFundGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserFundGetGetWithHttpInfo(request: OpenApi2AdvertiserFundGetGetRequest): Promise<ApiResponse<AdvertiserFundGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserFundGetV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/fund/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "grant_type_split", value: request.grantTypeSplit }
      ]
    });
  }
}


