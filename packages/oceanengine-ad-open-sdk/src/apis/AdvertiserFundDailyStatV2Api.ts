// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserFundDailyStatV2AccountType, AdvertiserFundDailyStatV2Response } from "../models";


export interface OpenApi2AdvertiserFundDailyStatGetRequest {
  advertiserId: number;
  startDate?: string;
  endDate?: string;
  page?: number;
  pageSize?: number;
  accountType?: AdvertiserFundDailyStatV2AccountType;
}

export class AdvertiserFundDailyStatV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserFundDailyStatGet(request: OpenApi2AdvertiserFundDailyStatGetRequest): Promise<AdvertiserFundDailyStatV2Response> {
    const response = await this.openApi2AdvertiserFundDailyStatGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserFundDailyStatGetWithHttpInfo(request: OpenApi2AdvertiserFundDailyStatGetRequest): Promise<ApiResponse<AdvertiserFundDailyStatV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AdvertiserFundDailyStatGet");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserFundDailyStatV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/fund/daily_stat/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "account_type", value: request.accountType }
      ]
    });
  }
}


