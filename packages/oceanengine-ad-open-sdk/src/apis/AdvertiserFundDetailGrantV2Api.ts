// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserFundDetailGrantV2Response } from "../models";


export interface OpenApi2AdvertiserFundDetailGrantGetRequest {
  advertiserId: number | string;
  startDate?: string;
  endDate?: string;
  page?: number;
  pageSize?: number;
}

export class AdvertiserFundDetailGrantV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserFundDetailGrantGet(request: OpenApi2AdvertiserFundDetailGrantGetRequest): Promise<AdvertiserFundDetailGrantV2Response> {
    const response = await this.openApi2AdvertiserFundDetailGrantGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserFundDetailGrantGetWithHttpInfo(request: OpenApi2AdvertiserFundDetailGrantGetRequest): Promise<ApiResponse<AdvertiserFundDetailGrantV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AdvertiserFundDetailGrantGet");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserFundDetailGrantV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/fund/detail_grant/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


