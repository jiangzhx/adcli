// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserFundDailyStatV2AccountType, AdvertiserFundDailyStatV2Response } from "../models";


export class AdvertiserFundDailyStatV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserFundDailyStatGet(advertiserId: number, startDate: string, endDate: string, page: number, pageSize: number, accountType: AdvertiserFundDailyStatV2AccountType): Promise<AdvertiserFundDailyStatV2Response> {
    const response = await this.openApi2AdvertiserFundDailyStatGetWithHttpInfo(advertiserId, startDate, endDate, page, pageSize, accountType);
    return response.data;
  }

  async openApi2AdvertiserFundDailyStatGetWithHttpInfo(advertiserId: number, startDate: string, endDate: string, page: number, pageSize: number, accountType: AdvertiserFundDailyStatV2AccountType): Promise<ApiResponse<AdvertiserFundDailyStatV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AdvertiserFundDailyStatGet");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserFundDailyStatV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/fund/daily_stat/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "account_type", value: accountType }
      ]
    });
  }
}


