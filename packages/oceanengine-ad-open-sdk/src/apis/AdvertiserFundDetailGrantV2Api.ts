// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserFundDetailGrantV2Response } from "../models";


export class AdvertiserFundDetailGrantV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserFundDetailGrantGet(advertiserId: number, startDate: string, endDate: string, page: number, pageSize: number): Promise<AdvertiserFundDetailGrantV2Response> {
    const response = await this.openApi2AdvertiserFundDetailGrantGetWithHttpInfo(advertiserId, startDate, endDate, page, pageSize);
    return response.data;
  }

  async openApi2AdvertiserFundDetailGrantGetWithHttpInfo(advertiserId: number, startDate: string, endDate: string, page: number, pageSize: number): Promise<ApiResponse<AdvertiserFundDetailGrantV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AdvertiserFundDetailGrantGet");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserFundDetailGrantV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/fund/detail_grant/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


